import React from 'react'
import Movies from './maincomponents/Movies'
import TvShows from './maincomponents/TvShows'
import People from './maincomponents/People'
import PeopleDetails from './maincomponents/PeopleDetails'
import MoviesDetails from './maincomponents/MoviesDetails'
import TvShowsDetails from './maincomponents/TvShowsDetails'
import { Route } from 'react-router-dom'


export default function Main(props) {

    return (
        <div>
            <Route exact path="/movie">
                <Movies
                    getPoster={props.getPoster}
                    getTvMoviePerson={props.getTvMoviePerson}
                    searchInput={props.searchInput}
                    handleClick={props.handleClick}
                    handleChange={props.handleChange}
                    searchedResults={props.searchedResults}
                />
            </Route>

            <Route exact path="/tv">
                <TvShows
                    getPoster={props.getPoster}
                    searchInput={props.searchInput}
                    handleClick={props.handleClick}
                    handleChange={props.handleChange}
                    seacrhedResults={props.searchedResults}
                />
            </Route>

            <Route exact path="/person">
                <People
                    getPoster={props.getPoster}
                    searchInput={props.searchInput}
                    handleClick={props.handleClick}
                    handleChange={props.handleChange}
                    searchedResults={props.searchedResults}
                />
            </Route>

            <Route exact path ="/movie/details/:id" component={match => 
                        <MoviesDetails
                        handleClick={props.handleClick}
                        match={match} 
                        getTvMoviePerson={props.getTvMoviePerson}
                        />}>
            </Route>

            <Route exact path ="/tv/details/:id" component={match => 
                        <TvShowsDetails
                        handleClick={props.handleClick}
                        match={match} 
                        getTvMoviePerson={props.getTvMoviePerson}
                        />}>
            </Route>

            <Route exact path ="/person/details/:id" component={match => 
                        <PeopleDetails
                        handleClick={props.handleClick} 
                        match={match} 
                        getTvMoviePerson={props.getTvMoviePerson}
                        />}>
            </Route>

            

        </div>
    )
}