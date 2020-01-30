import React from 'react'
import { Link } from 'react-router-dom'


export default function People(props) {

    const posterSize = 'w200'

       if (props.pageType.showsOrMovies) {
    return (
        <div >
            {props.pageType.showsOrMovies.map((person, index) => (
                <div key={index}>
                    <Link to = {`/person/details/${person.id}`}>
                    <h3>{person.name}</h3>
                    <img className="featured-picture" src={`https://image.tmdb.org/t/p/${posterSize}${person.profile_path}`} alt="" />
                    </Link>
                </div>
            ))}
        </div>
    )
    } else if (props.pageType.showsOrMovies === undefined || props.pageType.showsOrMovies === 0){
            return (
                <div>
                    <h1>Search A Person</h1>
                </div>
            )
        }
}