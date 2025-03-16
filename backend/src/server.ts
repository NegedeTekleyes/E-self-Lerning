import express, { Application } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();  // Load environment variables from .env

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());  // Parse incoming JSON requests
app.use('/api/users', userRoutes);  // User authentication routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
