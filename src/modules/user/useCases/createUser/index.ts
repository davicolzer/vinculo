import { CreateUserService } from './createUserService';
import { CreateUserController } from './createUserController';
import { UserRepository } from '../../../../data/repositories/UserRepository';
import { prisma } from '../../../../data/index';

const userRepository = UserRepository();

const createUserService = CreateUserService({ userRepository, db: prisma });

export const createUserController = CreateUserController({ createUserService });