import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'


export default function Movies(props) {

    const posterSize = 'w200'

    if (props.searchedResults) {
        return (
            <div className="flexbox">
                {props.searchedResults.map((movie, index) => (
                    <div className="flex" key={index}>
                        <Link to={`/movie/details/${movie.id}`}>
                            <h5>{movie.title || movie.original_name} {movie.release_date ? moment(movie.release_date).format('(YYYY)') : ""}</h5>
                            {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`} alt="" /> : <img src="/ni2x3.png" alt="" />}
                        </Link>
                    </div>
                ))}
            </div>
        )
    } else if (props.searchedResults === undefined || props.searchedResults === 0) {
        return (
            <div>
                <h1>No Results Found</h1>

            </div>
        )
    }
}