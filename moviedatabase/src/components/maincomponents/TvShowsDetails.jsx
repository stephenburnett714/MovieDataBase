import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import {getShowAndCredits} from './../../services/apihelper'



export default function TvShowsDetails(props) {

    const [selectedTvShow, setSelectedTvShow] = useState(null)
    const [tvEffect, setTvEffect] = useState(0)
    const moviePosterSize = "w400"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getShowAndCredits(props.match.match.params.id)
                setSelectedTvShow(response);
                setTvEffect(100)
                setTvEffect(0)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [tvEffect])



    const renderData = () => {

        if (selectedTvShow && selectedTvShow.name) {
            const {first_air_date, last_episode_to_air, number_of_episodes, credits, overview, poster_path, name } = selectedTvShow

            return (
                <div>
                    <h1>{name}</h1>
                    <div className="movie-details">
                    <div className="details-picture">
                    {poster_path ? <img className="top-picture" src={`https://image.tmdb.org/t/p/${moviePosterSize}${poster_path}`} alt="" /> : <img className="top-picture" src="/ni4x6.png" alt=""/>}
                    </div>
                    <div>
                    <h5>Air Date: {moment(first_air_date).format('MMMM DD, YYYY')}</h5>
                    <p className="overview-info">Overview: {overview}</p>
                    <p className="bold-heading">Number of episodes: {number_of_episodes}</p>
                    {last_episode_to_air ? <p className="bold-heading"> Last Episode: {moment(last_episode_to_air.air_date).format('MMMM DD, YYYY')}</p> : <p></p>}

                    </div>
                    </div>
                    <h2>Cast:</h2>
                    
                    
                    {credits.cast.map((person, index) => (
                        <div key={index}>
                            <Link to={`/person/details/${person.id}`}>
                                <div className="cast-member">{person.name} as {person.character}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            )
        }
        else {
            return (
                <div>No data</div>
            )
        }
    }

    return (
        <div>
            <h1>{renderData()}</h1>
        </div>
    )
}