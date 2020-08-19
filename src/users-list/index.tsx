import React from 'react'
import {UserItem} from './user-item'
import {useUsersList} from './hooks/useUsersList'
import {ReactComponent as CircularProgress} from '../icons/circularProgress.svg'
import {SearchBar} from './search-bar'
import './styled/users-list.css'

export function UsersList() {
  const {usersList: {isLoading, users}} = useUsersList()
  return (
    <div className="usersList">
      <h1 className="usersList__title">Users List</h1>
      <SearchBar/>
      {
        isLoading
          ? <CircularProgress className='usersList__progress'/>
          : users.map(user => <UserItem key={user.id} id={user.id} name={user.name} username={user.username} />)
      }
    </div>
  )
}