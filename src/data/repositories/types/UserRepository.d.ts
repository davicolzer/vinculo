import { PrismaClient, User, Prisma } from '@prisma/client';

interface IDataBase {
  db: PrismaClient;
}

type TUser = Omit<User, 'password'>;

export interface IUserRepository {
  create: (
    data: Prisma.UserCreateInput,
    dbManager: PrismaClient
  ) => Promise<TUser>;
  findOneByEmail: (email: string, dbManager: PrismaClient) => Promise<User | null>;
}
