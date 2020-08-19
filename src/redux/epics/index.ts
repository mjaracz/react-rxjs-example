import {combineEpics} from 'redux-observable'
import {usersListEpic} from './users-list'

export const rootEpic = combineEpics(usersListEpic)
