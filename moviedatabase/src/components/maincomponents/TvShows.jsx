import React from 'react'
import moment from 'moment'
import {  Link } from 'react-router-dom'
import Search from './../maincomponents/Seach'



export default function TvShows(props) {

    const posterSize = 'w200'

if (props.pageType.showsOrMovies) {
    return (
        <div className="flexbox">
            {props.pageType.showsOrMovies.map((tv, index) => (
                <div className="flex">
                    <Link to = {`/tv/details/${tv.id}`}>
            <h5>{tv.title || tv.original_name} {tv.first_air_date ? moment(tv.first_air_date).format('(YYYY)') : ""} </h5> 
                    {tv.poster_path ? <img src={`https://image.tmdb.org/t/p/${posterSize}${tv.poster_path}`} alt="" /> : <img src="/ni2x3.png" alt=""/>}
                    </Link>
                </div>
            ))}
        </div>
    )
    } else if (props.pageType.showsOrMovies === undefined || props.pageType.showsOrMovies === 0){
            return (
                <div>
                    <h1>Search a TV Show</h1>
                    <Search 
                        searchInput={props.searchInput}
                        handleClick={props.handleClick}
                        handleChange={props.handleChange}
        />      
                </div>
            )
        }
}