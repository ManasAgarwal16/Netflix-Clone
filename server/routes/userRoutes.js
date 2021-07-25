import express from 'express';
const router = express.Router();
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
  getUserStats,
} from '../controllers/userController.js';
import { verifyToken } from '../middleware/verifyToken.js';

router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);
router.get('/find/:id', getUser);
router.get('/', verifyToken, getAllUser);
router.get('/stats', verifyToken, getUserStats);

export default router;
