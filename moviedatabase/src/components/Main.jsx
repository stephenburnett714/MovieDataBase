import React from 'react'
import Search from './maincomponents/Seach'
import Movies from './maincomponents/Movies'
import TvShows from './maincomponents/TvShows'
import MoviesDetails from './maincomponents/MoviesDetails'
import TvShowsDetails from './maincomponents/TvShowsDetails'
import { Route } from 'react-router-dom'


export default function Main(props) {

    return (
        <div>
            <Search
                searchInput={props.searchInput}
                handleClick={props.handleClick}
                handleChange={props.handleChange}
            />
            <Route exact path="/movie">
                <Movies
                    getPoster={props.getPoster}
                    pageType={props.pageType}
                    getTvMoviePerson={props.getTvMoviePerson}
                />
            </Route>

            <Route exact path="/tv">
                <TvShows
                    getPoster={props.getPoster}
                    pageType={props.pageType}
                />
            </Route>

            <Route exact path ="/movie/details/:id" component={match => 
                        <MoviesDetails 
                        match={match} 
                        getTvMoviePerson={props.getTvMoviePerson}
                        pageType={props.pageType}
                        />}>
            </Route>

            <Route exact path ="/tv/details/:id" component={match => 
                        <TvShowsDetails 
                        match={match} 
                        getTvMoviePerson={props.getTvMoviePerson}
                        pageType={props.pageType}
                        />}>
            </Route>

            

        </div>
    )
}