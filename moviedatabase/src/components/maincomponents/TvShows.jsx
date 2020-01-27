import React from 'react'


export default function TvShows(props) {

    const posterSize = 'w200'

    if (props.viewType == "tv" && Object.entries(props.showsOrMovies).length > 0) {
        return(
            <div >
                {props.showsOrMovies.results.map((tv, index) => (
                    <div>
                    <h3>{tv.title || tv.original_name} ({tv.first_air_date || tv.release_date})</h3>
                    <img src= {`https://image.tmdb.org/t/p/${posterSize}${tv.poster_path}`} alt=""/>
                    </div>
                ))}
            </div>
        )} else if (props.viewType == "tv"){
            return (
                <div>
                    <h1>Search a TV Show</h1>
                </div>
            )
        }  else {
            return(
                <div></div>
            )
        }
}