// api/index.ts
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware (adicione json, cors etc. se precisar)
app.use(express.json());

// Rotas da API (exemplo)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Olá do backend!' });
});

// Serve os arquivos estáticos do frontend (build do Vite)
const clientDistPath = path.join(__dirname, '..', 'client', 'dist'); // ajuste se build for em outro lugar
app.use(express.static(clientDistPath));

// SPA fallback: qualquer rota não-API serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Export essencial pro Vercel!
export default app;