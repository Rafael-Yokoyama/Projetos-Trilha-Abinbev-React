import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'



import reducerCategories from './ducks/categories'
import reducerBudget from './ducks/budget'
import reducerCartItem from './ducks/cartItem'


const createRootReducer = () => combineReducers({
  cartItem: reducerCartItem,
  categories: reducerCategories,
  budgetItem: reducerBudget,
  
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }