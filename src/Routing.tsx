import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from './home'
import {UsersList} from './users-list'

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users-list' component={UsersList}/>
      </Switch>
    </BrowserRouter>
  )
}