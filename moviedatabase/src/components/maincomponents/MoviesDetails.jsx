import React, {useState, useEffect} from 'react'
import axios from 'axios'



export default function MoviesDetails(props) {

const [selectedMovie, setSelectedMovie] = useState(null)
const moviePosterSize = "w500"

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await props.getTvMoviePerson(props.pageType.viewType, props.match.match.params.id)

              setSelectedMovie(response);
              
            } catch (err) {
              console.log(err);
            }
          }
        fetchData()
    },[])

    

    const renderData = () =>{
       
        if (selectedMovie && selectedMovie.title && selectedMovie.release_date){
            const {tagline, budget, poster_path, genres, title, release_date} = selectedMovie
            // release_date = release_date.toLocaleDateString()
           return(
       <div>
       <h1>{title}</h1>
       <h5>{tagline}</h5>
       <h3>{release_date}</h3>
       <img src={`https://image.tmdb.org/t/p/${moviePosterSize}${poster_path}`} alt="" />
       <h3>Genres:</h3>
       {genres.map((genre, index) => (

           
            <p>{genre.name} </p>
  
       ))}
       <h1>Budget: ${budget}</h1>

       </div>
           )}
        else {
            return(
                <div>No data</div>
            )
        }}


        console.log(selectedMovie)
    return (
        <div>
            <h1>{renderData()}</h1>
        </div>
    )
    }