import {  takeLatest, all } from "@redux-saga/core/effects"

import { getCadastrar, getLogin } from "./login/saga"


import { CadastrarTypes } from "./login/types"
import { CurrencyTypes } from "./currency/types"
import { getCurrency, listCurrencies } from './currency/saga';
import { getTransactions, postTransaction, deleteTransaction } from './finances/saga';

import { FinanceTypes } from './finances/types';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(CadastrarTypes.POST_CADASTRO_REQUEST, getCadastrar),
    takeLatest(CadastrarTypes.POST_LOGIN_REQUEST, getLogin),
   

    takeLatest(CurrencyTypes.GET_CURRENCY_REQUEST, getCurrency),
    takeLatest(CurrencyTypes.GET_CURRENCIESLIST_REQUEST, listCurrencies),


    takeLatest(FinanceTypes.GET_TRANSACTION_REQUEST, getTransactions),
    takeLatest(FinanceTypes.POST_TRANSACTION_REQUEST, postTransaction),
    takeLatest(FinanceTypes.DELETE_TRANSACTION_REQUEST, deleteTransaction)
  ])
}