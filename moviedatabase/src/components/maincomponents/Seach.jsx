import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



function Search(props) {

  return (
    <div >
      <form onSubmit={props.handleClick}>
        <span className="custom-select">
          <select onChange={e => props.setViewType(e.currentTarget.value)}>
            <option value={"movie"}>Movie</option>
            <option value={"tv"}>Tv Show</option>
            <option value={"person"}>Person</option>
          </select>
        </span>

        <input type="text" placeholder='Search...' onChange={props.handleChange} value={props.searchInput}
        />
        
          <NavLink exact activeClassName="active" to={`/${props.viewType}`}>Search</NavLink>
      </form>
    </div>
  )
}

export default withRouter(Search)