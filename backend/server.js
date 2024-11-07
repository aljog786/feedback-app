import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import feedbackRoutes from './routes/feedbackRoutes.js';

const app = express();
const port = 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/feedback', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});