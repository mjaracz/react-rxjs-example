import React from 'react'
import './styled/user-item.css'

export function UserItem(props: UserItemProps) {
  const {name, username, id} = props
  return (
    <div className="userItem">
      <span className="userItem__title">{id}. {name}</span>
      <span className="userItem__text">@{username}</span>
    </div>
  )
}