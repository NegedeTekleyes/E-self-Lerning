import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);  // Public route for registration
router.post('/login', loginUser);        // Public route for login
router.get('/profile', authenticateToken, (req, res) => {  // Protected route
  res.status(200).json({ message: 'Profile data', user: req.user });
});

export default router;
