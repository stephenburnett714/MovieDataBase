import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {getPersonAndCredits, getPoster} from './../../services/apihelper'
import moment from 'moment'





export default function PeopleDetails(props) {

const [personAndMovies, setPersonAndMovies] = useState(null)
const [personEffect, setPersonEffect] = useState(true)
const characterSize = "w400"
const posterSize = "w200";

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await getPersonAndCredits(props.match.match.params.id)
              setPersonAndMovies(response)
              console.log(response)
              setPersonEffect(!personEffect)

            } catch (err) {
              console.log(err);
            }
          }
          fetchData()
    },[props.handleClick])

    
    if(personAndMovies && personAndMovies) {
        const {deathday, name, profile_path, birthday, biography} = personAndMovies
    return (
        
        <div>
            <h1>{name}</h1>
            <div className="movie-details">
            <div className="details-picture">
            {profile_path ? <img className="top-picture" src={`https://image.tmdb.org/t/p/${characterSize}${profile_path}`} alt="" /> : <img className="top-picture" src="/ni4x6.png" alt=""/>}
            </div>
            <div>
            <h3>Birthdate: {moment(birthday).format('MMMM DD, YYYY')}</h3>
            {deathday ?  <span>DeathDay: { moment(deathday).format('MMMM DD, YYYY')}</span> : <p></p>}
            <h3>Biography:</h3>
            <p className="biography">{biography}</p>
            </div>
            </div>

            <div className="movies-and-shows">
                <div className="shown-movies">
                <h1>Movies: </h1>
                {personAndMovies.movie_credits.cast.map((movie, index ) => (
                <div key={index}>
                    <Link className="single-movie" key={index} to = {`/movie/details/${movie.id}`}>
                {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`} alt="" /> : <img src="/ni2x3.png" />}
                    <h3>{movie.title}</h3>
                </Link>
                </div>
           ))}

                </div>
                <div className="shown-shows">
                <h1>Shows:</h1>
                {personAndMovies.tv_credits.cast.map((show, index ) => (
                <div key={index}>
                    <Link className="single-show" key={index} to = {`/tv/details/${show.id}`}>
                {show.poster_path ? <img src={`https://image.tmdb.org/t/p/${posterSize}${show.poster_path}`} alt="" /> : <img src="/ni2x3.png" />}
                    <h3>{show.name}</h3>
                </Link>
                </div>
           ))}

           </div>
           </div>
        </div>
    )
        } else {
            return (
                <h1>Loading...</h1>
            )
        }
}