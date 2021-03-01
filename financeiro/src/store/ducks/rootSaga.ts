import {  takeLatest, all } from "@redux-saga/core/effects"

import { getCadastrar, getLogin } from "./login/saga"


import { CadastrarTypes } from "./login/types"
import { CurrencyTypes } from "./currency/types"
import { getAllCurrencies, getSingleCurrency } from "./currency/saga"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(CadastrarTypes.POST_CADASTRO_REQUEST, getCadastrar),
    takeLatest(CadastrarTypes.POST_LOGIN_REQUEST, getLogin),
    takeLatest(CurrencyTypes.GET_ALL_CURRENCIES_REQUEST, getAllCurrencies),
    takeLatest(CurrencyTypes.GET_CURRENCY_REQUEST, getSingleCurrency)
  ])
}