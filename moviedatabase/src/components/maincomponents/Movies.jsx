import React from 'react'
import {Link} from 'react-router-dom' 



export default function Movies(props) {

const posterSize = 'w200'
   
    if (props.viewType == "movie"  && Object.entries(props.showsOrMovies).length > 0) {
    return(
        <div >
            {props.showsOrMovies.results.map((movie, index) => (
                <div>
                <h3>{movie.title || movie.original_name} ({movie.release_date})</h3>
                <img src= {`https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`} alt=""/>
                </div>
            ))}
        </div>
    )} else if (props.viewType == "movie") {
        return (
            <div>
                <h1>Search a Movie</h1>
            </div>
        )
    }  else {
        return(
            <div>
                
            </div>
        )
    }
}