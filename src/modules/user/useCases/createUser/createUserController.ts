import {
  ICreateUserController,
  ICreateUserService,
} from '../../types/functions';

interface IController {
  createUserService: ICreateUserService;
}

export function CreateUserController({
  createUserService,
}: IController): ICreateUserController {
  return {
    handler: async (request, response) => {
      const { email, name, password } = request.body;

      const { data, error } = await createUserService.execute({
        email,
        name,
        password,
      });

      if (error && error.statusCode) {
        return response.status(error.statusCode).send({ error });
      }

      return response.status(200).send({ data });
    },
  };
}
