import React, {useState, useEffect} from 'react'
import {getMovieAndCredits} from './../../services/apihelper'
import { Link } from 'react-router-dom'
import moment from 'moment'



export default function MoviesDetails(props) {

const [selectedMovie, setSelectedMovie] = useState(null)
const moviePosterSize = "w500"

// Found on w3resource
function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await getMovieAndCredits(props.match.match.params.id)
              setSelectedMovie(response);
              {console.log(selectedMovie)}
            } catch (err) {
              console.log(err);
            }
          }
        fetchData()
    },[])

    

    const renderData = () =>{
       
        if (selectedMovie && selectedMovie.title && selectedMovie.release_date){
            const {credits, overview, tagline, budget, poster_path, genres, title, release_date} = selectedMovie
            // release_date = release_date.toLocaleDateString()
           return(
       <div>
           
       <h1>{title}</h1>
       <h5>{tagline}</h5>
       <div className="movie-details">
       <div className="movie-details-picture">
       <img src={`https://image.tmdb.org/t/p/${moviePosterSize}${poster_path}`} alt="" />
       </div>
       <div className="movie-details-info">
       <h5>Realease Date: {moment(release_date).format('MMMM DD, YYYY')}</h5>
    
       <div className="overview-info">{overview}</div>

       <span className="bold-heading-genre">Genres: </span>{genres.map((genre, index) => (
            <span className="overview-info">{genre.name} </span>
       ))}

       <h3>Budget: ${thousands_separators(budget) || "N/A"}</h3>
       </div>
       </div>
       <h1>Cast:</h1>
           {credits.cast.map((person, index) => (
               <div key={index}>
               <Link to = {`/person/details/${person.id}`}>
           <div>{person.name} as {person.character}</div>
            </Link>
                </div>
           ))}
       </div>
           )}
        else {
            return(
                <div>Loading...</div>
            )
        }}


        console.log(selectedMovie)
    return (
        <div>
            <h1>{renderData()}</h1>
        </div>
    )
    }


