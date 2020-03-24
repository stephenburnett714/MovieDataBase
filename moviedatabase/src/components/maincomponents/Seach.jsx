import React from 'react'
import {Dropdown, ButtonGroup, DropdownButton} from 'react-bootstrap'


export default function Search(props) {
    return(
        <div >
        <form action="">
       
  
        <span className="custom-select">
  <select>
    <option value="0">Select car:</option>
    <option value="1">Movie</option>
    <option value="2">TvShow</option>
    <option value="3">Person</option>
  </select>
</span>
      
        <input type="text" placeholder='Search...' onChange={props.handleChange} value={props.searchInput}
        />
        <button onClick={props.handleClick} >Search</button>
      </form>
        </div>
    )
}