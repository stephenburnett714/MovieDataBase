import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {getPersonAndCredits, getMovieCredits, getPoster, getTvMoviePerson, getSearchedInfo } from './services/apihelper'


export default function App(props) {

  const [searchInput, setSearchInput] = useState("")

  const [viewType, setViewType] = useState("movie")
  console.log(viewType)
  const [seacrchedResults, setseacrchedResults] = useState([])


  const [pageType, setPageType] = useState({
    viewType: "movie",
    showsOrMovies: []
  })

  const [person, setPerson] = useState({
    viewType: "tv",
    showPerson: []
  })


  const handleChange = (e) => {
    let value = e.target.value;
    setSearchInput(value)
  }


  const handleClick = async (e) => {
    e.preventDefault();


    let newPage = await getSearchedInfo(pageType.viewType, searchInput);
    setPageType(prev => ({
      viewType: prev.viewType,
      showsOrMovies: newPage.results
    }))
  }


  return (
    <div className="App">
      <Header
        viewType={viewType}
        setViewType={setViewType}
        setPageType={setPageType}
        pageType={pageType}
        setPerson={setPerson}
      />
      <Main
        // Search Functions
        searchInput={searchInput}
        handleClick={handleClick}
        handleChange={handleChange}
        getPoster={getPoster}
        pageType={pageType}
        person={person}
        getTvMoviePerson={getTvMoviePerson}
        getMovieCredits={getMovieCredits}
        getPersonAndCredits={getPersonAndCredits}
        setPageType={setPageType}
      />
      <Footer />
    </div>
  );
}


