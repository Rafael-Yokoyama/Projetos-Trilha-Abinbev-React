import { put, call } from "redux-saga/effects";
import CadastrarService from "../../../services/cadastrar-services";

import {
  loadCadatrarFailure,
  loadCadastrarSuccess,
  loadLoginSuccess,
  loadLoginFailure,
} from "./actions";
import { AccessToken } from "./types";

export function* getCadastrar(action: any): any {
  try {
    const response: AccessToken = yield call(
      CadastrarService.PostSignNow,
      action.payload
    );
    yield put(loadCadastrarSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(loadCadatrarFailure());
  }
}

export function* getLogin(action: any): any {
  try {
    const response: AccessToken = yield call(
      CadastrarService.PostSign,
      action.payload
    );
    yield put(loadLoginSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(loadLoginFailure());
  }
}
