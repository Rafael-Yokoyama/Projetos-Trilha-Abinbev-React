import { combineReducers } from "redux"
import reducerCadastrar from "./login"
import currency from './currency';
import finance from './finances';

const createRootReducer = () => combineReducers({
  cadastrar: reducerCadastrar,
  currency,
  finance 
})

export default createRootReducer