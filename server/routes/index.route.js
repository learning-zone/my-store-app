import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import apiRoutes from './api.route';

const router = express.Router();

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /users
router.use('/users', userRoutes);

// mount api routes at /api
router.use('/ip', apiRoutes);

export default router;