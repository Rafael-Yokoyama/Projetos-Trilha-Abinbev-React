import { CurrencyTypes } from "./types";

const initialState: any = {
  loading: false,
  error: false,
  success: false,
  allCurrencies: {},
  selectedCurrency: {}
};

function reducerCurrencies(state = initialState, action: any) {
  switch (action.type) {
    case CurrencyTypes.GET_ALL_CURRENCIES_REQUEST:
      return { ...state, loading: true };
    case CurrencyTypes.GET_ALL_CURRENCIES_SUCCESS:
      return { ...state, loading: false, success: true, allCurrencies: action.payload };
    case CurrencyTypes.GET_ALL_CURRENCIES_FAILURE:
      return { ...state, error: true, success: false };
    case CurrencyTypes.GET_CURRENCY_REQUEST:
      return { ...state, loading: true };
    case CurrencyTypes.GET_CURRENCY_SUCCESS:
      return { ...state, success: true, loading: false, selectedCurrency: action.payload };
    case CurrencyTypes.GET_CURRENCY_FAILURE:
      return { ...state };
    default:
      return state;
  }
}

export default reducerCurrencies;