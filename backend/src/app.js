import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authroutes.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);

export default app;

app.get('/test', (req, res) => {
  res.json({ message: 'Server is running' });
});