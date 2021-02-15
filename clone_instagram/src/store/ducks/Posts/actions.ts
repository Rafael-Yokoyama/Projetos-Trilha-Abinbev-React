import { action } from 'typesafe-actions'
import { PostTypes, Posts } from './types'

export const getPosts = (payload: Posts) => action(PostTypes.GET_POSTS, payload);