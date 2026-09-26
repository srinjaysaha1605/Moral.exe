import type { Request, Response } from 'express';
import { callGeminiWithFallback } from '../_lib/gemini';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // ignore
      }
    }
    body = body || {};

    const {
      experimentId,
      experimentTitle,
      stepNumber,
      targetDimensionId,
      scenarioType,
      difficulty,
      previousScenarios,
    } = body;

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
}
