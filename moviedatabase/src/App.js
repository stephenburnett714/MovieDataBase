import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import { Route, NavLink } from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {getTvShowOrMovie, getSearchedInfo} from './services/apihelper'


export default function App(props) {

// Is it a movie or a Tv Show
  const [viewType, setViewType] = useState("movie")
// Whats in the searchbar
  const [searchInput, setSearchInput] = useState("")
// The movie/s or show/s that are returned
  const [showsOrMovies, setShowsOrMovies] = useState({})




  const handleChange = (e) => {
    let value = e.target.value;
    setSearchInput(value)
  }


  const handleClick = async (e) => {
    e.preventDefault();

    let title = await getSearchedInfo(viewType, searchInput);
    setShowsOrMovies(title)
    console.log(title)
    }
    
  
 

  return (
    <div className="App">
      <Header
      // What page are we in
      viewType={viewType}
      setViewType={setViewType}
      />
      <Main
      // Search Functions
      searchInput={searchInput} 
      handleClick={handleClick} 
      handleChange={handleChange}
      // Object of seached information
      showsOrMovies={showsOrMovies}
      viewType={viewType}
      />
      <Footer />
    </div>
  );
}


