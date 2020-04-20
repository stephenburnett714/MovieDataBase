import React, { useState, useEffect } from 'react'
import { getMovieAndCredits } from './../../services/apihelper'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Table } from 'react-bootstrap';



export default function MoviesDetails(props) {

    const [selectedMovie, setSelectedMovie] = useState(null)
    const [movieEffect, setMovieEffect] = useState(0)
    const moviePosterSize = "w400"

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
                setMovieEffect(100)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [movieEffect])



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
                        <div className="text">
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
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Actor/Actress</th>
                                <th>Character</th>
                            </tr>
                        </thead>

                        <tbody>
                        <tr>
                        {credits.cast.map((person, index) => (
                            <div key={index}>
                                <Link to={`/person/details/${person.id}`}>
                                <td className="cast-member">{person.name} </td> 
                                <td>{person.character}</td>
                                </Link>
                            </div>
                        ))}
                        </tr>
                        </tbody>
                    </Table>
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


