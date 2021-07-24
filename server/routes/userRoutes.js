import express from 'express';
const router = express.Router();
import { updateUser } from '../controllers/userController.js';
import { verifyToken } from '../middleware/verifyToken.js';

router.put('/:id', verifyToken, updateUser);
export default router;
