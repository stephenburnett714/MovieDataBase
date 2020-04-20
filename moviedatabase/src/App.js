import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {getPersonAndCredits, getMovieCredits, getPoster, getTvMoviePerson, getSearchedInfo } from './services/apihelper'


export default function App(props) {

  const [searchInput, setSearchInput] = useState("")

  const [viewType, setViewType] = useState("movie")
  console.log(searchInput)
  const [searchedResults, setSearchedResults] = useState([])


  const handleChange = (e) => {
    e.preventDefault()
    let value = e.target.value;
    setSearchInput(value)
  }


  const handleClick = async (event) => {
    event.preventDefault()
    setSearchedResults([])
    let newPage = await getSearchedInfo(viewType, searchInput)
    setSearchedResults(newPage.results)
    console.log('hey')
  }


  return (
    <div className="App">
      <Header
        viewType={viewType}
        setViewType={setViewType}
        searchInput={searchInput}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      <Main
        // Search Functions
        searchInput={searchInput}
        handleClick={handleClick}
        handleChange={handleChange}
        getPoster={getPoster}
        getTvMoviePerson={getTvMoviePerson}
        getMovieCredits={getMovieCredits}
        getPersonAndCredits={getPersonAndCredits}
        searchedResults={searchedResults}
      />
      <Footer />
    </div>
  );
}


