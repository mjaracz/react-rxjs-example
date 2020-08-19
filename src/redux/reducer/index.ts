import {combineReducers} from 'redux'
import {usersListReducer} from './users-list'

export const rootReducer = combineReducers({
  usersList: usersListReducer
})