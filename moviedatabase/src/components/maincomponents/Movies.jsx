import React from 'react'
import { Link } from 'react-router-dom'


export default function Movies(props) {

    const posterSize = 'w200'

       if (props.pageType.showsOrMovies) {
    return (
        <div >
            {props.pageType.showsOrMovies.map((movie, index) => (
                <div>
                    <Link to = {`/movie/details/${movie.id}`}>
                    <h3>{movie.title || movie.original_name} ({movie.release_date})</h3>
                    <img src={`https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`} alt="" />
                    </Link>
                </div>
            ))}
        </div>
    )
    } else if (props.pageType.showsOrMovies === undefined || props.pageType.showsOrMovies === 0){
            return (
                <div>
                    <h1>Search A Movie</h1>
                </div>
            )
        }
}