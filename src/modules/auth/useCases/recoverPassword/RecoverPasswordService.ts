import { PrismaClient } from '@prisma/client';
import { IRecoverPasswordService } from '../../types/functions';
import { IUserRepository } from '../../../../data/repositories/types/UserRepository';

interface IService {
  userRepository: IUserRepository;
  db: PrismaClient;
}

export function RecoverPasswordService({
  userRepository,
  db,
}: IService): IRecoverPasswordService {
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
