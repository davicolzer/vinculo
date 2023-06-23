import { LoginService } from './loginService';
import { LoginController } from './loginController';
import { UserRepository } from '../../../../data/repositories/UserRepository';
import { prisma } from '../../../../data/index';

const userRepository = UserRepository();

const loginService = LoginService({ userRepository, db: prisma });

export const loginController = LoginController({ loginService });
