import {of} from 'rxjs'
import {ofType} from 'redux-observable'
import {catchError, map, switchMap} from 'rxjs/operators'
import {fetchUsersList} from '../api/fetchUsersList'
import {usersListErrorAction, usersListFetchAction} from '../actions/users-list'

export const usersListEpic = (action$) => action$.pipe(
  ofType('GET_USERS_LIST'),
  switchMap(() => fetchUsersList().pipe(
    map(response => usersListFetchAction(response)),
    catchError((e) => of(usersListErrorAction(e)))
  ))
)
