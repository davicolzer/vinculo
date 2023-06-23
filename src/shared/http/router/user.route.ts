import express from 'express';
import { createUserController } from '../../../modules/user/useCases/createUser';

const userRoute = express();

userRoute.post('/create', createUserController.handler);

export { userRoute }