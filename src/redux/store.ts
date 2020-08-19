import {createStore} from 'redux'
import {applyMiddleware} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {rootReducer} from './reducer'
import {rootEpic} from './epics'

const epicMiddleware = createEpicMiddleware()

export const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
)
epicMiddleware.run(rootEpic)
