import React from 'react'
import {  Link } from 'react-router-dom'


export default function TvShows(props) {

    const posterSize = 'w200'

if (props.pageType.showsOrMovies) {
    return (
        <div >
            {props.pageType.showsOrMovies.map((tv, index) => (
                <div>
                    <Link to = {`/tv/details/${tv.id}`}>
                    <h3>{tv.title || tv.original_name} ({tv.first_air_date || tv.release_date})</h3>
                    <img src={`https://image.tmdb.org/t/p/${posterSize}${tv.poster_path}`} alt="" />
                    </Link>
                </div>
            ))}
        </div>
    )
    } else if (props.pageType.showsOrMovies === undefined || props.pageType.showsOrMovies === 0){
            return (
                <div>
                    <h1>Search a TV Show</h1>
                </div>
            )
        }
}