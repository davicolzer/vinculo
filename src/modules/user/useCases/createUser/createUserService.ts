import { PrismaClient } from '@prisma/client';
import { ICreateUserService } from '../../types/functions';
import { IUserRepository } from '../../../../data/repositories/types/UserRepository';
import { hash, genSalt } from 'bcryptjs';


interface IService {
  userRepository: IUserRepository;
  db: PrismaClient;
}

export function CreateUserService({
  userRepository,
  db,
}: IService): ICreateUserService {
  return {
    async execute({ email, name, password }) {
      try {
        const foundUser = await userRepository.findOneByEmail(email, db);

        if (foundUser) {
          return {
            error: {
              statusCode: 400,
              message: 'User already exists',
            },
          };
        }
        const salt = await genSalt(10);
        const encryptedPassword = await hash(password, salt);
        const data = await userRepository.create(
          { name, email, password: encryptedPassword },
          db
        );

        await db.$disconnect();
        return { data };
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
