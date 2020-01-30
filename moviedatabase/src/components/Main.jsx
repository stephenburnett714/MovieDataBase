import React from 'react'
import Search from './maincomponents/Seach'
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
            {/* <Search
                searchInput={props.searchInput}
                handleClick={props.handleClick}
                handleChange={props.handleChange}
            /> */}
            <Route exact path="/movie">
                <Movies
                    getPoster={props.getPoster}
                    pageType={props.pageType}
                    getTvMoviePerson={props.getTvMoviePerson}
                    searchInput={props.searchInput}
                    handleClick={props.handleClick}
                    handleChange={props.handleChange}
                />
            </Route>

            <Route exact path="/tv">
                <TvShows
                    getPoster={props.getPoster}
                    pageType={props.pageType}
                    searchInput={props.searchInput}
                    handleClick={props.handleClick}
                    handleChange={props.handleChange}
                />
            </Route>

            <Route exact path="/person">
                <People
                    getPoster={props.getPoster}
                    pageType={props.pageType}
                    searchInput={props.searchInput}
                    handleClick={props.handleClick}
                    handleChange={props.handleChange}
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

            <Route exact path ="/person/details/:id" component={match => 
                        <PeopleDetails 
                        match={match} 
                        getTvMoviePerson={props.getTvMoviePerson}
                        pageType={props.pageType}
                        setPageType={props.setPageType}
                        />}>
            </Route>

            

        </div>
    )
}