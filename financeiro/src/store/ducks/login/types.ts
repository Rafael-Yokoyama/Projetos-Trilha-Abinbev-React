export enum CadastrarTypes {
  POST_CADASTRO_REQUEST = "   POST_CADASTRO_REQUEST",
  POST_CADASTRO_SUCCESS = "  POST_CADASTRO_SUCCESS",
  POST_CADASTRO_FAILURE = "  POST_CADASTRO_FAILURE ",

  POST_LOGIN_REQUEST = "POST_LOGIN_REQUEST",
  POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS",
  POST_LOGIN_FAILURE = "POST_LOGIN_FAILURE",
}
export interface Cadastrar {
  email: string | undefined;
  password: string | undefined;
}


export interface login {
  email: string | undefined;
  password: string | undefined;
}
