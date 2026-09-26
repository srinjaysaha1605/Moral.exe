import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import healthHandler from './api/health';
import configHandler from './api/config';
import generateQuestionHandler from './api/moral/generate-question';
import generateAnalysisHandler from './api/moral/generate-analysis';

dotenv.config();

export const app = express();
app.use(express.json());

// Wire local express routes directly to the serverless handlers
app.get('/api/health', healthHandler);
app.get('/api/config', configHandler);
app.post('/api/moral/generate-question', generateQuestionHandler);
app.post('/api/moral/generate-analysis', generateAnalysisHandler);

const PORT = Number(process.env.PORT) || 3000;

async function startStandaloneServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MORAL.EXE local server running on port ${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startStandaloneServer();
}

export default app;
