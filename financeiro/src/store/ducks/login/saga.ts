import { put, call } from "redux-saga/effects";
import CadastrarService from "../../../services/cadastrar-services";

import {
  loadCadatrarFailure,
  loadCadastrarSuccess,
  loadLoginSuccess,
  loadLoginFailure,
} from "./actions";

export function* getCadastrar(action: any): any {
  try {
    const response: any = yield call(
      CadastrarService.PostSignNow,
      action.payload   );
     
 
    localStorage.setItem("token", response.data.accessToken)
    yield put(loadCadastrarSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(loadCadatrarFailure(true));
    localStorage.clear()
  }
}

export function* getLogin(action: any): any {
  try {
    const response:any = yield call(
      CadastrarService.PostSign,
      action.payload
    );
    localStorage.setItem("token", response.data.accessToken)
    yield put(loadLoginSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(loadLoginFailure(true));
    localStorage.clear()
  }
}
