import React from 'react'
import { Route, NavLink } from 'react-router-dom'


export default function Header(props) {
    return(
        <div>
      <header className="App-header">
    <nav>
      <NavLink exact activeClassName="active" to="/" onClick={() => props.setViewType(
          'movie'
      )}>
        Movies
      </NavLink>
      <NavLink exact activeClassName="active" to="/tv" onClick={() => props.setViewType(
          'tv'
      )}>
        Tv Shows
      </NavLink>         
      <h1 className="Title">Movie Finder</h1>
      </nav>
      </header>
      
    
        </div>
    )
}