import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../icons/logo.svg'
import './styled.css'

export function Home() {
  return (
    <div className="home">
      <header className="home__header">
        <img src={logo} className="header__logo" alt="logo" />
        <p>
          Example of <code>rxjs</code> with React ecosystem.
        </p>
        <Link
          className="header__link"
          to="/users-list"
          rel="noopener noreferrer"
        >
          Go to an Example
        </Link>
      </header>
    </div>
  )
}
