import { GoogleGenAI } from '@google/genai';

let geminiClient: GoogleGenAI | null = null;

export function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY) {
    try {
      geminiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (e) {
      console.error('[MORAL.EXE] Failed to instantiate GoogleGenAI:', e);
    }
  }
  return geminiClient;
}

export async function callGeminiWithFallback(params: { contents: string; config?: any }): Promise<string | null> {
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
