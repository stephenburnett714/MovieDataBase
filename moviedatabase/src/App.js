import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { getPoster, getTvMoviePerson, getSearchedInfo } from './services/apihelper'


export default function App(props) {

  const [searchInput, setSearchInput] = useState("")


  const [pageType, setPageType] = useState({
    viewType: "movie",
    showsOrMovies: []
  })

  const [person, setPerson] = useState({
    viewType: "movie",
    person: []
  })


  const handleChange = (e) => {
    let value = e.target.value;
    setSearchInput(value)
  }


  const handleClick = async (e) => {
    e.preventDefault();


    let titles = await getSearchedInfo(pageType.viewType, searchInput);
    setPageType(prev => ({
      viewType: prev.viewType,
      showsOrMovies: titles.results
    }))
    console.log(titles.results)
  }


  return (
    <div className="App">
      <Header
        setPageType={setPageType}
        pageType={pageType}
      />
      <Main
        // Search Functions
        searchInput={searchInput}
        handleClick={handleClick}
        handleChange={handleChange}
        getPoster={getPoster}
        pageType={pageType}
        getTvMoviePerson={getTvMoviePerson}
      />
      <Footer />
    </div>
  );
}


