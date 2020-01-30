import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'



export default function TvShowsDetails(props) {

const [selectedTvShow, setSelectedTvShow] = useState(null)
const moviePosterSize = "w500"

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await props.getTvMoviePerson(props.pageType.viewType, props.match.match.params.id)
              setSelectedTvShow(response);
              console.log(selectedTvShow)
            } catch (err) {
              console.log(err);
            }
          }
        fetchData()
    },[])

    

    const renderData = () =>{
       
        if (selectedTvShow && selectedTvShow.name){
            const {credits, overview, poster_path, genres, name, release_date} = selectedTvShow

           return(
       <div>
       <h1>{name}</h1>
       <h3>Air Date: {moment(release_date).format('MMMM DD, YYYY')}</h3>
       <img src={`https://image.tmdb.org/t/p/${moviePosterSize}${poster_path}`} alt="" />
       <h3>Genres:</h3>
       {/* {genres.map((genre, index) => (
           <ul>
            <h5><li>{genre.name}</li></h5>
           </ul>
       ))} */}
        <p>Overview: {overview}</p>
        <h1>Cast:</h1>
           {credits.cast.map((person, index) => (
               <div key={index}>
               <Link to = {`/person/details/${person.id}`}>
            <div>{person.name}</div>
            </Link>
                </div>
           ))}
       </div>
           )}
        else {
            return(
                <div>No data</div>
            )
        }}

        console.log(selectedTvShow)
    return (
        <div>
            <h1>{renderData()}</h1>
        </div>
    )
    }