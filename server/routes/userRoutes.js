import express from 'express';
import {registerUser, loginUser, userCredits} from '../controllers/userControllers.js';
import userAuth from '../middlewares/auth.js';

const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/credits', userAuth, userCredits);

export default router;

// localhost:4000/api/user/register
// localhost:4000/api/user/login
// localhost:4000/api/user/credits