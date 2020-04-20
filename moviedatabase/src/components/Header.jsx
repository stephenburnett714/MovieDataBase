import React from 'react'

import { NavLink } from 'react-router-dom'
import Search from './maincomponents/Seach'



export default function Header(props) {
    return(
        <div className="headers-div">
      <header className="App-header">



      <h1 className="title">The Movie Database</h1>

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