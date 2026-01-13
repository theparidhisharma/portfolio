import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import linkedinRoutes from './routes/linkedin.routes.js';
import aiRoutes from './routes/ai.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/linkedin', linkedinRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio API Running');
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});