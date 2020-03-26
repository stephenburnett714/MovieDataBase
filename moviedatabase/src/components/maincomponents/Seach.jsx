import React from 'react'



export default function Search(props) {
  {console.log(props.viewType)}
    return(
        <div >
          {console.log(props.viewType)}
        <form action="">
       
  
        <span className="custom-select">
  <select onChange={e => props.setViewType(e.currentTarget.value)}>
    <option value={"movie"}>Movie</option>
    <option value={"tv"}>Tv Show</option>
    <option value={"person"}>Person</option>
  </select>
</span>
      
        <input type="text" placeholder='Search...' onChange={props.handleChange} value={props.searchInput}
        />
        <button onClick={props.handleClick} >Search</button>
      </form>
        </div>
    )
}
