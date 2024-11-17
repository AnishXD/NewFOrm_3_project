import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/apiRoutes.js';

dotenv.config();

const app = express();
const corsOptions = {
    origin: 'https://new-f-orm-3-project.vercel.app', // Allow requests from your frontend's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
  
  app.use(cors(corsOptions));app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5069;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
