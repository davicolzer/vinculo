import {
  IRecoverPasswordService,
  IRecoverPasswordController,
} from '../../types/functions';

interface IController {
  recoverPasswordService: IRecoverPasswordService;
  sendMail: any;
}

export function RecoverPasswordController({
  recoverPasswordService,
}: IController): IRecoverPasswordController {
  return {
    handler: async (request, response) => {
      const { email } = request.body

      const { data, error } = await recoverPasswordService.execute({
        email,
      });

      if (error && error.statusCode) {
        return response.status(error.statusCode).send({ error });
      }

      return response.status(200).send({ data });;
    },
  };
}
