import React, {useState, useEffect} from 'react'
import axios from 'axios'



export default function PeopleDetails(props) {

const [selectedPerson, setSelectedPerson] = useState(null)
const size = "w500"

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await props.getTvMoviePerson(props.pageType.viewType, props.match.match.params.id)

              setSelectedPerson(response);
              
            } catch (err) {
              console.log(err);
            }
          }
        fetchData()
    },[])

    

    const renderData = () =>{
       
        if (selectedPerson && selectedPerson.name){
            const {name, profile_path} = selectedPerson
           return(
       <div>
       <h1>{name}</h1>
       <img src={`https://image.tmdb.org/t/p/${size}${profile_path}`} alt="" />

       </div>
           )}
        else {
            return(
                <div>No data</div>
            )
        }}


        console.log(selectedPerson)
    return (
        <div>
            <h1>{renderData()}</h1>
        </div>
    )
    }