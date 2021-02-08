import { action } from 'typesafe-actions'
import {  StoriesTypes, AllStories } from './types'
export const getStories = (payload: AllStories) => action(StoriesTypes.GET_STORIES, payload)