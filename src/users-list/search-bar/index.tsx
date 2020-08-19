import React from 'react'
import {useSearchBar} from './hooks/useSearchBar'
import './styled.css'

export function SearchBar() {
  const {searchUsers} = useSearchBar()
  return (
    <input type="text" className="usersList__searchBar" placeholder="Search by user name" onChange={searchUsers}/>
  )
}