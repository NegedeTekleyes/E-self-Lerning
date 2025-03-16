import { PrismaClient } from '@prisma/client';
import logger from './utils/logger';  // Assuming you have a logger utility

const prisma = new PrismaClient();

const connectDatabase = async () => {
  try {
    await prisma.$connect();
    logger.info('Connected to the database');
  } catch (error) {
    logger.error('Database connection error:', error);
    process.exit(1); // Exit the application if database connection fails
  }
};

connectDatabase();

export default prisma;
