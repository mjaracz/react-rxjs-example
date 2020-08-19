import {User} from '../types'

export const getUsersListAction = () => ({
  type: 'GET_USERS_LIST'
})

export const usersListFetchAction = (users: User[]) => ({
  type: 'USERS_LIST_FETCH',
  payload: users
})

export const usersListErrorAction = (e) => ({
  type: 'USERS_LIST_ERROR',
  payload: e
})

export const usersFilterListAction = (users: User[]) => ({
  type: 'USERS_FILTER_LIST',
  payload: users
})

export const cleanUsersListAction = () => ({
  type: 'USERS_LIST_CLEAN'
})