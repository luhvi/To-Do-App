import express from 'express';
import path from 'path';
import type { Request, Response } from 'express';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
