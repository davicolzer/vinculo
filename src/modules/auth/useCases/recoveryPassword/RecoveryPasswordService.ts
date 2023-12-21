import { PrismaClient } from '@prisma/client';
import { IRecoveryPasswordService } from '../../types/functions';
import { IUserRepository } from '../../../../data/repositories/types/UserRepository';
import { emailTemplate } from '../../../../helpers/sendMail/templates';
import { compare, genSalt, hash } from 'bcryptjs';
import { generateRandomString } from '../../../../utils/generateRandomString';

interface IService {
  userRepository: IUserRepository;
  db: PrismaClient;
}

export function RecoveryPasswordService({
  userRepository,
  db,
}: IService): IRecoveryPasswordService {
  return {
    async execute({ email, token, password }) {
      try {
        const foundUser = await userRepository.findOneByEmail(email, db);

        if (!foundUser) {
          return {
            data: {
              statusCode: 200,
              message: 'Could not change password',
            },
          };
        }

        const isTokenCorrect = await compare(token, password);

        if (!isTokenCorrect) {
          return {
            data: {
              statusCode: 200,
              message: 'Could not change password',
            },
          };
        }

        const salt = await genSalt(10);
        const encryptedPassword = await hash(password, salt);
        const data = await userRepository.update(
          {
            data: {
              password,
              recoveryPasswordExpires: null,
              recoveryPasswordToken: null,
            },
            where: {
              id: foundUser.id,
            },
          },
          db
        );

        await db.$disconnect();

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
