import { PrismaClient } from '@prisma/client';
import { IForgotPasswordService } from '../../types/functions';
import { IUserRepository } from '../../../../data/repositories/types/UserRepository';
import { TSendMail } from '../../../../helpers/sendMail/type';
import { emailTemplate } from '../../../../helpers/sendMail/templates';
import { hash } from 'bcryptjs';
import { generateRandomString } from '../../../../utils/generateRandomString';

interface IService {
  userRepository: IUserRepository;
  sendMailForgotPassword: TSendMail;
  db: PrismaClient;
}

export function ForgotPasswordService({
  userRepository,
  sendMailForgotPassword,
  db,
}: IService): IForgotPasswordService {
  return {
    async execute({ email }) {
      try {
        const foundUser = await userRepository.findOneByEmail(email, db);

        if (!foundUser) {
          return {
            data: {
              statusCode: 200,
              message: 'Email successfully sent',
            },
          };
        }

        const ramdonString = generateRandomString();

        const recoveryPasswordToken = await hash(ramdonString, 10);

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await userRepository.update(
          {
            where: {
              id: foundUser.id,
            },
            data: {
              recoveryPasswordToken,
              recoveryPasswordExpires: now,
            },
          },
          db
        );

        await sendMailForgotPassword({
          toName: "Teste",
          template: emailTemplate.FORGOT_PASSWORD({ token: ramdonString }),
          fromName: 'Vinculo',
          toEmail: foundUser.email,
        });

        await db.$disconnect();
        return {
          data: {
            statusCode: 200,
            message: 'Email successfully sent',
          },
        };
      } catch (error) {
        return {
          error: {
            statusCode: 500,
            message: error,
          },
        };
      }
    },
  };
}
