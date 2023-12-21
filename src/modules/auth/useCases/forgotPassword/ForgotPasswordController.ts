import { Request, Response } from 'express';
import {
  IForgotPasswordService,
  IForgotPasswordController,
} from '../../types/functions';

interface IController {
  forgotPasswordService: IForgotPasswordService;
}

export function ForgotPasswordController({
  forgotPasswordService,
}: IController): IForgotPasswordController {
  return {
    handler: async (request: Request, response: Response) => {
      const { email } = request.body;

      const { data, error } = await forgotPasswordService.execute({
        email,
      });

      if (error && error.statusCode) {
        return response.status(error.statusCode).send({ error });
      }

      return response.status(200).send({ data });
    },
  };
}
