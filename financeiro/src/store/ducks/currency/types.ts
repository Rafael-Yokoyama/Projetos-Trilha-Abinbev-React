export enum CurrencyTypes {
    GET_ALL_CURRENCIES_REQUEST = 'GET_ALL_CURRENCIES_REQUEST',
    GET_ALL_CURRENCIES_SUCCESS = 'GET_ALL_CURRENCIES_SUCCESS',
    GET_ALL_CURRENCIES_FAILURE = 'GET_ALL_CURRENCIES_FAILURE',

    GET_CURRENCY_REQUEST = 'GET_CURRENCY_REQUEST',
    GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS',
    GET_CURRENCY_FAILURE = 'GET_CURRENCY_FAILURE',
  }
  
  export interface Currency {
    currency_code: string,
    country_code: string,
    country_name: string
    name: string,
    symbol: string,
  
  }
  
  export interface Currencies {
    [key: string]: Currency;
  }
  
  export interface SelectedCurrency  {
    central_bank: string,
    using_countries: string[]
  }