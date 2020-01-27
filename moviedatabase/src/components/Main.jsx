import React from 'react'
import Search from './maincomponents/Seach'
import Movies from './maincomponents/Movies'
import TvShows from './maincomponents/TvShows'


export default function Main(props) {

    return(
        <div>
            <Search 
            searchInput={props.searchInput} 
            handleClick={props.handleClick} 
            handleChange={props.handleChange}
            />
            <Movies 
            showsOrMovies={props.showsOrMovies} 
            viewType={props.viewType}
            getPoster={props.getPoster}
            />
            <TvShows 
            showsOrMovies={props.showsOrMovies} 
            viewType={props.viewType}
            getPoster={props.getPoster}
            />
        </div>
    )
}