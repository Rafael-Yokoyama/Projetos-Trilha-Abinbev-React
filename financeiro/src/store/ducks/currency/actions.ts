import { action } from "typesafe-actions";
import { CurrencyTypes, SelectedCurrency } from "./types";

export const loadAllCurrenciesRequest = () =>
  action(CurrencyTypes.GET_ALL_CURRENCIES_REQUEST);

export const loadAllCurrenciesSuccess = (response: any) =>
  action(CurrencyTypes.GET_ALL_CURRENCIES_SUCCESS, response);

export const loadAllCurrenciesFailure = () =>
  action(CurrencyTypes.GET_ALL_CURRENCIES_FAILURE);

export const loadCurrencyRequest = (payload: string) =>
  action(CurrencyTypes.GET_CURRENCY_REQUEST, payload);

export const loadCurrencySuccess = (payload: SelectedCurrency) =>
  action(CurrencyTypes.GET_CURRENCY_SUCCESS, payload);

export const loadCurrencyFailure = () =>
  action(CurrencyTypes.GET_CURRENCY_FAILURE);
