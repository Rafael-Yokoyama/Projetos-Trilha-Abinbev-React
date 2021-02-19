import { action } from 'typesafe-actions'
import { TodoItem, TypesTodo } from './types'

export const getTodo = (payload: TodoItem) => action(TypesTodo.GET_CARRINHO, payload)