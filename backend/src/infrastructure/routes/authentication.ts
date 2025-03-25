import express from 'express';
import { SupabaseAuthService } from '../services/SupabaseAuthService';
import { LoginController } from '../controllers/auth/LoginController';

const authenticationRouter = express.Router();
const authService = new SupabaseAuthService();
const loginController = new LoginController(authService);

authenticationRouter.post('/login', loginController.run);

export { authenticationRouter };
