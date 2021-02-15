import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerUser from './ducks/User'
import reducerStories from './ducks/Stories'
import reducerPosts from './ducks/Posts'

const createRootReducer = () => combineReducers({
  user: reducerUser,
  stories: reducerStories,
   posts: reducerPosts
  
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }