import { RecoverPasswordService } from './RecoverPasswordService';
import { RecoverPasswordController } from './RecoverPasswordController';
import { UserRepository } from '../../../../data/repositories/UserRepository';
import { prisma } from '../../../../data/index';

const userRepository = UserRepository();

const recoverPasswordService = RecoverPasswordService({
  userRepository,
  db: prisma,
});

export const recoverPasswordController = RecoverPasswordController({
  recoverPasswordService,
  sendMail: '',
});
