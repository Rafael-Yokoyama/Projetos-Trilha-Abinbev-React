
import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects"

import CurrencyService from "../../../services/currency-service"
import { loadAllCurrenciesFailure, loadAllCurrenciesSuccess, loadCurrencyFailure,loadCurrencySuccess } from "./actions";

export function* getAllCurrencies(){
  try {
    const response: AxiosResponse = yield call(CurrencyService.getCurrencies)
    yield put(loadAllCurrenciesSuccess(response.data))
  } catch (error) {
    yield put(loadAllCurrenciesFailure())
  }
}

export function* getSingleCurrency(action: any){
  try {
    const response: AxiosResponse = yield call(CurrencyService.getCurrency, action.payload)
    yield put(loadCurrencySuccess(response.data));
  } catch (error) {
    yield put(loadCurrencyFailure())
  }
}