import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY) {
    try {
      geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (e) {
      console.error('[MORAL.EXE] Failed to instantiate GoogleGenAI:', e);
    }
  }
  return geminiClient;
}

async function callGeminiWithFallback(params: { contents: string; config?: any }): Promise<string | null> {
  const client = getGeminiClient();
  if (!client) return null;

  const modelsToTry = [
    'gemini-3.6-flash',
    'gemini-3.7-flash',
    'gemini-3.5-flash',
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-3-flash-preview',
  ];

  for (const model of modelsToTry) {
    try {
      const response = await client.models.generateContent({
        model,
        contents: params.contents,
        config: params.config,
      });

      const text = response.text?.trim();
      if (text) {
        return text;
      }
    } catch (err: any) {
      console.warn(`[MORAL.EXE] Gemini model ${model} failed, trying fallback model...`, err?.message || err);
    }
  }
  return null;
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'MORAL.EXE Server',
      timestamp: new Date().toISOString(),
    });
  });

  // Server config check
  app.get('/api/config', (_req: Request, res: Response) => {
    res.json({
      geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    });
  });

  // ============================================================================
  // MORAL.EXE BEHAVIORAL ANALYSIS ENDPOINTS
  // ============================================================================
  app.post('/api/moral/generate-question', async (req: Request, res: Response) => {
    try {
      const {
        experimentId,
        experimentTitle,
        stepNumber,
        targetDimensionId,
        scenarioType,
        difficulty,
        previousScenarios,
      } = req.body;

      if (!process.env.GEMINI_API_KEY) {
        res.json({ success: false, fallback: true, message: 'Gemini API key not configured.' });
        return;
      }

      const prompt = `You are MORAL.EXE, a decision-making analysis assistant.
Generate question ${stepNumber || 1} of 10 for the test: "${experimentTitle || experimentId}".

Target Focus: "${targetDimensionId}"
Scenario Type: "${scenarioType || 'subtle_dilemma'}"
Difficulty: "${difficulty || 'baseline'}"
Previous Scenarios generated (DO NOT REPEAT SIMILAR SITUATIONS): ${JSON.stringify(previousScenarios || [])}

RULES:
1. Create a realistic, relatable real-world situation or workplace/social scenario.
2. CRITICAL LANGUAGE RULE: Use simple, plain, everyday conversational English. Avoid difficult vocabulary, dense academic terms, or overly complex sentences. The situation must be quick and easy to read.
3. Provide EXACTLY 4 choices ranging from passive/defensive to active/direct choices. Keep the text of each choice short and simple.
4. Keep options plausible and believable. Avoid absurd extreme options.
5. DO NOT make the "correct" or "good" answer obvious.
6. Assign a numeric weight from 0.0 to 1.0 to each option representing the raw score on focus "${targetDimensionId}".

Respond in strictly valid JSON:
{
  "scenario": "A 2-3 sentence realistic scenario written in clear, simple everyday English...",
  "options": [
    { "text": "Option A...", "weight": 0.0, "code": "A" },
    { "text": "Option B...", "weight": 0.33, "code": "B" },
    { "text": "Option C...", "weight": 0.66, "code": "C" },
    { "text": "Option D...", "weight": 1.0, "code": "D" }
  ]
}`;

      const raw = await callGeminiWithFallback({
        contents: prompt,
        config: { responseMimeType: 'application/json' },
      });

      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.scenario && Array.isArray(parsed.options) && parsed.options.length === 4) {
          res.json({
            success: true,
            question: {
              id: `q_ai_${Date.now()}_${stepNumber}`,
              scenario: parsed.scenario,
              options: parsed.options,
              targetDimensionId,
              scenarioType: scenarioType || 'subtle_dilemma',
              difficulty: difficulty || 'baseline',
            },
          });
          return;
        }
      }

      res.json({ success: false, fallback: true });
    } catch (err: any) {
      console.warn('[MORAL.EXE API] Dynamic question generation fallback:', err?.message || err);
      res.json({ success: false, fallback: true });
    }
  });

  app.post('/api/moral/generate-analysis', async (req: Request, res: Response) => {
    try {
      const { experimentTitle, archetype, scores, contradiction, answersHistory } = req.body;

      if (!process.env.GEMINI_API_KEY) {
        res.json({
          success: false,
          fallback: true,
          report: {
            executiveSummary: archetype?.summary || 'Behavioral evaluation complete.',
            dimensionalBreakdown: 'Analysis derived from your decision choices.',
            strategicRecommendations: contradiction?.detail || 'Continue self-reflection across decision domains.',
          },
        });
        return;
      }

      const prompt = `You are MORAL.EXE, a clear and helpful decision analysis system.
Write a clear, easy-to-understand decision analysis report for a participant in the test: "${experimentTitle}".

PARTICIPANT EVALUATION:
- ARCHETYPE ASSIGNED: ${archetype?.title} (${archetype?.summary})
- SCORES: ${JSON.stringify(scores || {})}
- MAIN INSIGHT: ${contradiction?.headline} - ${contradiction?.detail}
- USER ANSWERS SUMMARY: ${JSON.stringify(answersHistory?.map((a: any) => ({ dimension: a.dimensionId, weight: a.selectedOptionWeight })) || [])}

REQUIREMENTS FOR YOUR REPORT:
Write in plain, simple, friendly, easy-to-understand English. Avoid clinical or heavy psychological jargon.
1. Executive Summary: Explain in 2 simple sentences why their choices fit the "${archetype?.title}" profile.
2. Decision Breakdown: Explain in 2 simple sentences what their choices reveal about how they make decisions.
3. Key Takeaway: Explain in 2 simple sentences what to keep in mind about "${contradiction?.headline}".

Respond in strictly valid JSON:
{
  "executiveSummary": "2 simple sentences...",
  "dimensionalBreakdown": "2 simple sentences...",
  "strategicRecommendations": "2 simple sentences..."
}`;

      const raw = await callGeminiWithFallback({
        contents: prompt,
        config: { responseMimeType: 'application/json' },
      });

      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.executiveSummary && parsed.dimensionalBreakdown && parsed.strategicRecommendations) {
          res.json({
            success: true,
            report: parsed,
          });
          return;
        }
      }

      res.json({
        success: false,
        fallback: true,
        report: {
          executiveSummary: archetype?.summary || 'Decision profile complete.',
          dimensionalBreakdown: 'Your choices show consistent decision patterns across tested scenarios.',
          strategicRecommendations: contradiction?.detail || 'Keep your main tendencies in mind during key choices.',
        },
      });
    } catch (err: any) {
      console.warn('[MORAL.EXE API] Analysis report fallback:', err?.message || err);
      res.json({
        success: false,
        fallback: true,
        report: {
          executiveSummary: 'Decision profile complete.',
          dimensionalBreakdown: 'Your choices show consistent decision patterns across tested scenarios.',
          strategicRecommendations: 'Keep your main tendencies in mind during key choices.',
        },
      });
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MORAL.EXE server running on port ${PORT}`);
  });
}

startServer();
