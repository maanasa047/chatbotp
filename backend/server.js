// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import axios from 'axios'; // ✅ Added to communicate with LocalGPT
import authRoutes from './routes/authRoutes.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ LocalGPT Chat Route
app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post('http://localhost:8000/chat', {
      message: prompt
    });

    res.json({ reply: response.data.response });
  } catch (error) {
    console.error('❌ LocalGPT Error:', error.message);
    res.status(500).json({ reply: 'Sorry, I could not process your request via LocalGPT.' });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
