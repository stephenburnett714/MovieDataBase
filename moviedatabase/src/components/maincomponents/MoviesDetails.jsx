import React, { useState, useEffect } from 'react'
import { getMovieAndCredits } from './../../services/apihelper'
import { Link } from 'react-router-dom'
import moment from 'moment'



export default function MoviesDetails(props) {

    const [selectedMovie, setSelectedMovie] = useState(null)
    const moviePosterSize = "w400"

    // Found on w3resource
    function thousands_separators(num) {
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMovieAndCredits(props.match.match.params.id)
                setSelectedMovie(response);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])



    const renderData = () => {

        if (selectedMovie && selectedMovie.title && selectedMovie.release_date) {
            const { credits, overview, tagline, budget, poster_path, genres, title, release_date } = selectedMovie

            return (
                <div>
                    <h1>{title}</h1>
                    <h5>{tagline}</h5>
                    <div className="movie-details">
                        <div className="details-picture">
                            {poster_path ? <img className="top-picture" src={`https://image.tmdb.org/t/p/${moviePosterSize}${poster_path}`} alt="" /> : <img className="top-picture" src="/ni4x6.png" alt="" />}
                        </div>
                        <div className = "text">
                        <div className="movie-details-info">
                            <h5>Realease Date: {moment(release_date).format('MMMM DD, YYYY')}</h5>

                            <div className="overview-info">{overview}</div>

                            <span className="bold-heading">Genres: </span>{genres.map((genre, index) => (
                                <span className="overview-info">{genre.name} </span>
                            ))}

                            <h5>Budget: {budget ? `$${thousands_separators(budget)}` : "No Data"}</h5>
                        </div>
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
                <div>Loading...</div>
            )
        }
    }


    return (
        <div>
            <h1>{renderData()}</h1>
        </div>
    )
}


