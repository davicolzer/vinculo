import {
  ISendMailTemplate_ForgotPassword,
  ISendMailTemplate_Return,
} from '../type';

export function forgotPassword({
  token,
}: ISendMailTemplate_ForgotPassword): ISendMailTemplate_Return {
  return {
    subject: 'Vinculo - Esqueceu sua senha?',
    html: `
      <div>
      <h1>
        Vinculo
      </h1>
      <h2>
        Esqueceu sua senha?
      </h2>
      <p>
        Clique no botão abaixo para redefinir
      </p>
      <a href="${process.env.FRONTEND_URL}/recovery/${token}">
        <button>
          REDEFINIR SENHA
        </button>
      </a>
      </div>
    `,
  };
}
