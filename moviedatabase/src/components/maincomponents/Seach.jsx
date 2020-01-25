import React from 'react'


export default function Search(props) {
    return(
        <div >
        <form action="">
        <input type="text" placeholder='Search...' onChange={props.handleChange} value={props.searchInput}
        />
        <button onClick={props.handleClick} >Search</button>
      </form>
        </div>
    )
}