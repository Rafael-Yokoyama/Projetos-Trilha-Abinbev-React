import { action } from "typesafe-actions";
import { Cadastrar, CadastrarTypes } from "./types";

export const getCadastrarRequest = (user: Cadastrar) =>
  action(CadastrarTypes.POST_CADASTRO_REQUEST, user);

export const loadCadastrarSuccess = (user: Cadastrar) =>
  action(CadastrarTypes.POST_CADASTRO_SUCCESS, user);

export const loadCadatrarFailure = (error:boolean) =>
  action(CadastrarTypes.POST_CADASTRO_FAILURE,error);

export const getLoginRequest = (user: any) =>
  action(CadastrarTypes.POST_LOGIN_REQUEST, user);

export const loadLoginSuccess = (user: Cadastrar) =>
  action(CadastrarTypes.POST_LOGIN_SUCCESS, user);

export const loadLoginFailure = (error:boolean) => action(CadastrarTypes.POST_LOGIN_FAILURE,error);
