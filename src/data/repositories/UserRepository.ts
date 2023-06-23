import { IUserRepository } from './types/UserRepository';

export function UserRepository(): IUserRepository {
  return {
    async create(data, { user }) {
      const created = await user.create({ data });

      const { password, ...newCreated } = created;

      return newCreated;
    },
    async findOneByEmail(email, { user }) {
      const find = await user.findUnique({ where: { email } });

      return find;
    },
  };
}
