import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Search from './../maincomponents/Seach'


export default function TvShows(props) {

    const posterSize = 'w200'

    if (props.searchedResults) {
        return (
            <div className="flexbox">
                {props.searchedResults.map((tv, index) => (
                    <div className="flex" key={index}>
                        <Link to={`/tv/details/${tv.id}`}>
                            <h5>{tv.title || tv.original_name} {tv.first_air_date ? moment(tv.first_air_date).format('(YYYY)') : ""} </h5>
                            {tv.poster_path ? <img src={`https://image.tmdb.org/t/p/${posterSize}${tv.poster_path}`} alt="" /> : <img src="/ni2x3.png" alt="" />}
                        </Link>
                    </div>
                ))}
            </div>
        )
    } else if (props.searchedResults === undefined || props.searchedResults.length == 0) {
        return (
            <div>
                <h1>No Results Found</h1>

            </div>
        )
    }
}