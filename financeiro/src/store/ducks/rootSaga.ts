import {  takeLatest, all } from "@redux-saga/core/effects"

import { getCadastrar, getLogin } from "./login/saga"
import { CadastrarTypes } from "./login/types"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(CadastrarTypes.POST_CADASTRO_REQUEST, getCadastrar),
    takeLatest(CadastrarTypes.POST_LOGIN_REQUEST, getLogin)
  ])
}