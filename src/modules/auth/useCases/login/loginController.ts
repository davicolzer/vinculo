import { Request, Response } from 'express';
import {
  ILoginController,
  ILoginService,
} from '../../types/functions';

interface IController {
  loginService: ILoginService;
}

export function LoginController({
  loginService,
}: IController): ILoginController {
  return {
    handler: async (request: Request, response: Response) => {
      const { email, password } = request.body

      const { data, error } = await loginService.execute({
        email,
        password,
      });

      if (error && error.statusCode) {
        return response.status(error.statusCode).send({ error });
      }

      return response.status(200).send({ data });;
    },
  };
}
