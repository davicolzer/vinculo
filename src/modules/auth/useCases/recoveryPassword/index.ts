import { RecoveryPasswordService } from './RecoveryPasswordService';
import { RecoveryPasswordController } from './RecoveryPasswordController';
import { UserRepository } from '../../../../data/repositories/UserRepository';
import { prisma } from '../../../../data/index';

const userRepository = UserRepository();

const recoveryPasswordService = RecoveryPasswordService({
  userRepository,
  db: prisma,
});

export const recoveryPasswordController = RecoveryPasswordController({
  recoveryPasswordService,
});
