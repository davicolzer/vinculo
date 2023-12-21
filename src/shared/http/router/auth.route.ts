import express from 'express';
import { loginController } from '../../../modules/auth/useCases/login';
import { forgotPasswordController } from '../../../modules/auth/useCases/forgotPassword';
import { recoveryPasswordController } from '../../../modules/auth/useCases/recoveryPassword';

const authRoute = express();

authRoute.post('/login', loginController.handler);
authRoute.post('/forgot-password', forgotPasswordController.handler);
authRoute.post('/recovery-password/:token', recoveryPasswordController.handler);

export { authRoute };
