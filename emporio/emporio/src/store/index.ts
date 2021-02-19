import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerCarrinho from './ducks/carrinho'


const createRootReducer = () => combineReducers({
  carrinho: reducerCarrinho
  
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }