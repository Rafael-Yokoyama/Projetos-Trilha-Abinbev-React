import { action } from 'typesafe-actions'
import { UserTypes, User } from './types'

export const getUsuario = (payload: User) => action(UserTypes.GET_USER, payload)