import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerUser from './ducks/User'
import reducerStories from './ducks/Stories'

const createRootReducer = () => combineReducers({
  user: reducerUser,
  stories: reducerStories,
  
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }