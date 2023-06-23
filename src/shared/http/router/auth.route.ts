import express from 'express';
import { loginController } from '../../../modules/auth/useCases/login';

const authRoute = express();

authRoute.post('/login', loginController.handler);

export { authRoute }