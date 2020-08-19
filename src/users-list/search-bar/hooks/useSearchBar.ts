import {ChangeEvent} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../redux/types'
import {getUsersListAction, usersFilterListAction} from '../../../redux/actions/users-list'

export const useSearchBar = () => {
  const {usersList} = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const searchUsers = async (event: ChangeEvent<HTMLInputElement>) => {
    const searchUsers = usersList.users.filter(user => user.username.includes(event.currentTarget.value))
    if (!event.currentTarget.value) {
      await dispatch(getUsersListAction())
    }
    await dispatch(usersFilterListAction(searchUsers))
  }

  return {
    searchUsers
  }
}