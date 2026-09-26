import type { Request, Response } from 'express';

export default function handler(_req: Request, res: Response) {
  res.json({
    status: 'ok',
    service: 'MORAL.EXE Server',
    timestamp: new Date().toISOString(),
  });
}
