import { Request, Response } from 'express';
import {
  IRecoveryPasswordService,
  IRecoveryPasswordController,
} from '../../types/functions';

interface IController {
  recoveryPasswordService: IRecoveryPasswordService;
}

export function RecoveryPasswordController({
  recoveryPasswordService,
}: IController): IRecoveryPasswordController {
  return {
    handler: async (request: Request, response: Response) => {
      const { email, password } = request.body;
      const { token } = request.params;

      const { data, error } = await recoveryPasswordService.execute({
        token,
        email,
        password
      });

      if (error && error.statusCode) {
        return response.status(error.statusCode).send({ error });
      }

      return response.status(200).send({ data });
    },
  };
}
