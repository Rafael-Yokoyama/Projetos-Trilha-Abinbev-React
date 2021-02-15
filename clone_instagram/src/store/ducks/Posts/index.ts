import { PostTypes, Posts } from './types'

const initialStatePosts: Posts = {
  postsList: []
}

function reducerPosts(state = initialStatePosts, action: any) {
  switch (action.type) {
    case PostTypes.GET_POSTS:
      return {
        
        postsList: action.payload
      }
    default:
      return state
  }
}

export default reducerPosts;