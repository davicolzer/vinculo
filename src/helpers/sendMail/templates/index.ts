import { recoveryPassword } from './recoveryPassword';

export interface IEmailTemplate {
  RECOVERY_PASSWORD: (x: { token: string }) => string;
}

export const emailTemplate = {
  RECOVERY_PASSWORD: recoveryPassword,
};
