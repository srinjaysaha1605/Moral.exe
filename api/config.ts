import type { Request, Response } from 'express';

export default function handler(_req: Request, res: Response) {
  res.json({
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
  });
}
