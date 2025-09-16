import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
await connectDB();

app.use(express.json({
  verify: (req, res, buf) => {
    try {
      JSON.parse(buf);
    } catch (e) {
      res.status(400).json({ success: false, message: 'Invalid JSON' });
      throw new Error('Invalid JSON');
    }
  }
}));

app.use('/api/user', userRouter);
app.get('/', (req, res) => {
  res.send('API is running...')
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});