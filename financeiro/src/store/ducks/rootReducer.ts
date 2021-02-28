import { combineReducers } from "redux"
import reducerCadastrar from "./login"


const createRootReducer = () => combineReducers({
  cadastrar: reducerCadastrar
})

export default createRootReducer