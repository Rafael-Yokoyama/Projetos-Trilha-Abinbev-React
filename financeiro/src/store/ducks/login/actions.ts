import { action } from "typesafe-actions";
import { AccessToken, CadastrarTypes } from "./types";

export const getCadastrarRequest = (token: any) =>
  action(CadastrarTypes.POST_CADASTRO_REQUEST, token);

export const loadCadastrarSuccess = (payload: AccessToken) =>
  action(CadastrarTypes.POST_CADASTRO_SUCCESS, payload);

export const loadCadatrarFailure = () =>
  action(CadastrarTypes.POST_CADASTRO_FAILURE);

export const getLoginRequest = (token: any) =>
  action(CadastrarTypes.POST_LOGIN_REQUEST, token);

export const loadLoginSuccess = (payload: AccessToken) =>
  action(CadastrarTypes.POST_LOGIN_SUCCESS, payload);

export const loadLoginFailure = () => action(CadastrarTypes.POST_LOGIN_FAILURE);
