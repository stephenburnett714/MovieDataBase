import React from 'react'

import { NavLink } from 'react-router-dom'
import Search from './maincomponents/Seach'



export default function Header(props) {
    return(
        <div className="headers-div">
      <header className="App-header">
    <nav>
      {/* Nav Links will be modified Buttons not needed adding searchmad Dropdown */}
      <NavLink className="header-link" exact activeClassName="active" to="/movie" onClick={() => props.setPageType({
        viewType: "movie",
        showsAndMovies: []
      })}>
        Search Movies
      </NavLink>

      <NavLink className="header-link" exact activeClassName="active" to="/tv" onClick={() => props.setPageType({
        viewType: "tv",
        showsAndMovies: []
      })}>
        Search TV Shows
      </NavLink>

      <NavLink className="header-link" exact activeClassName="active" to={`/${props.viewType}`} onClick={() => props.setPageType({
        viewType: "person",
        showsAndMovies: []
      })}>
        Search Actor/Actress
      </NavLink>


      <h1 className="title">The Movie Database</h1>
      </nav>
      </header>

      <Search
        viewType={props.viewType}
        setViewType={props.setViewType}
        searchInput={props.searchInput}
        handleClick={props.handleClick}
        handleChange={props.handleChange}
      />

    
        </div>
    )
}