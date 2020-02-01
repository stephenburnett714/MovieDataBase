import React from 'react'
import { Link } from 'react-router-dom'
import Search from './../maincomponents/Seach'


export default function People(props) {

    const posterSize = 'w200'

       if (props.pageType.showsOrMovies) {
    return (
        <div className="flexbox">
            {props.pageType.showsOrMovies.map((person, index) => (
                <div  className="flex" key={index}>
                    <Link to = {`/person/details/${person.id}`}>
                    <h5>{person.name}</h5>
                    {person.profile_path ? <img className="featured-picture" src={`https://image.tmdb.org/t/p/${posterSize}${person.profile_path}`} alt="" /> : <img src="/ni2x3.png" alt=""/>}
                    </Link>
                </div>
            ))}
        </div>
    )
    } else if (props.pageType.showsOrMovies === undefined || props.pageType.showsOrMovies === 0){
            return (
                <div>
                    <h1>Search A Person</h1>
                        <Search 
                        searchInput={props.searchInput}
                        handleClick={props.handleClick}
                        handleChange={props.handleChange}
                        />
                </div>
            )
        }
}