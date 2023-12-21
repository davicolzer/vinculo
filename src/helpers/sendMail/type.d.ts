export interface ISendMailTemplate_Return {
  html: string;
  subject: string;
}

export interface ISendMailTemplate_ForgotPassword {
  token: string;
}

export interface IEmailTemplate {
  FORGOT_PASSWORD: (
    x: ISendMailTemplate_ForgotPassword
  ) => ISendMailTemplate_Return;
}

export interface ISendMail {
  template: ISendMailTemplate_Return;
  fromName: string;
  toEmail: string;
  toName?: string;
}

export type TSendMail = (x: ISendMail) => Promise<void>;
