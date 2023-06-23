import { PrismaClient } from '@prisma/client';
import { ILoginService } from '../../types/functions';
import { IUserRepository } from '../../../../data/repositories/types/UserRepository';
import { compare } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

interface IService {
  userRepository: IUserRepository;
  db: PrismaClient;
}

export function LoginService({ userRepository, db }: IService): ILoginService {
  return {
    async execute({ email, password }) {
      try {
        const foundUser = await userRepository.findOneByEmail(email, db);

        if (!foundUser) {
          return {
            error: {
              statusCode: 400,
              message: 'User or password is incorrect',
            },
          };
        }

        const checkedPassword = await compare(password, foundUser.password);

        if (!checkedPassword) {
          return {
            error: {
              statusCode: 400,
              message: 'User or password is incorrect',
            },
          };
        }

        const { id } = foundUser;

        const token = jwt.sign({ id }, String(process.env.JWT_SECRET), {
          expiresIn: 60 * 60 * 24, // 1 day
        });

        await db.$disconnect();
        return { data: { token } };
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
