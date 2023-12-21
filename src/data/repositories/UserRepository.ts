import { IUserRepository } from './types/UserRepository';

export function UserRepository(): IUserRepository {
  return {
    async create(data, { user }) {
      const created = await user.create({ data });

      const { password, ...newCreated } = created;

      return newCreated;
    },
    async findOneByEmail(email, { user }) {
      console.log({email})
      const find = await user.findUnique({ where: { email } });
      return find;
    },
    async update(data, { user }) {
      const updated = await user.update(data);
      return updated;
    },
  };
}
