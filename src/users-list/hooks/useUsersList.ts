import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {cleanUsersListAction, getUsersListAction} from '../../redux/actions/users-list'
import {RootState} from '../../redux/types'

export function useUsersList() {
  const {usersList} = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersListAction())
    return () => dispatch(cleanUsersListAction())
  }, [dispatch])

  return {
    usersList
  }
}