export interface ITemplateRecoveryPassword {
  token: string
}

export function recoveryPassword({ token }: ITemplateRecoveryPassword) {
  return `
  <div>
  <h1>
    Esqueceu sua senha?
  </h1>
  <p>
    Clique no botão abaixo para redefinir
  </p>
  <a href="${process.env.FRONTEND_URL}/recovery/${token}">
    <button>
      REDEFINIR SENHA
    </button>
  </a>
  </div>
  `;
}
