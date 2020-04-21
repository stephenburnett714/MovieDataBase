import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, FormGroup } from 'react-bootstrap';



export default function Search(props) {

  return (
    <div className="seach-bar">
      <form onSubmit={props.handleClick}>
        <span className="custom-select">
          <select className="resize-button" onChange={e => props.setViewType(e.currentTarget.value)}>
            <option value={"movie"}>Movie</option>
            <option value={"tv"}>Tv Show</option>
            <option value={"person"}>Person</option>
          </select>
        </span>

        <input className="search-bar" type="text" placeholder='Search...'onChange={props.handleChange} value={props.searchInput}
        />
        
        <Button className="resize-button" type="submit" onClick={props.handleClick}>
          <NavLink className="nav-text" exact to={`/${props.viewType}`}  >Search</NavLink>
          </Button>
          </form>
    </div>
  )
}