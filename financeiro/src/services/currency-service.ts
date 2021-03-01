import { apiExternal } from "./api";

const CurrencyService = {
  getCurrencies: () => apiExternal.get("/currencies.json"),
  getCurrency: (currency: any) => apiExternal.get(`/currency/${currency}.json?lang=pt`)
}

export default CurrencyService