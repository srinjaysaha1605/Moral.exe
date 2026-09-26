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

    const { experimentTitle, archetype, scores, contradiction, answersHistory } = body;

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
}
