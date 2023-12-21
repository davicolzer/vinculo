import { ForgotPasswordService } from './ForgotPasswordService';
import { ForgotPasswordController } from './ForgotPasswordController';
import { UserRepository } from '../../../../data/repositories/UserRepository';
import { prisma } from '../../../../data/index';
import { sendMail } from '../../../../helpers/sendMail';

const userRepository = UserRepository();

const forgotPasswordService = ForgotPasswordService({
  sendMailForgotPassword: sendMail,
  userRepository,
  db: prisma,
});

export const forgotPasswordController = ForgotPasswordController({
  forgotPasswordService,
});
