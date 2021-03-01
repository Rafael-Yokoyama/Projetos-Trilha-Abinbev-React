import { combineReducers } from "redux"
import reducerCadastrar from "./login"
import reducerCurrencies from "./currency"

const createRootReducer = () => combineReducers({
  cadastrar: reducerCadastrar,
  currency: reducerCurrencies
})

export default createRootReducer