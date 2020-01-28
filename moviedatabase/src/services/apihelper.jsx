import axios from 'axios';

const token = 'd6838493868f0bc0a4e8286ed3e3714c';
const base = 'https://api.themoviedb.org/3/';
const imageBase = 'https://image.tmdb.org/t/p/';


export const getTvMoviePerson = async (viewType, id) => {
  console.log(viewType, id)
    const res = await axios.get(`${base}${viewType}/${id}?api_key=${token}&language=en-US`)
    console.log(res)
    return res.data
  }

export const getSearchedInfo = async (viewType, search) => {
    const res = await axios.get(`${base}search/${viewType}?api_key=${token}&query=${search}&language=en-US`)
    return res.data
  }

  export const getPoster = async (posterSize, posterLink) => {
    const res = await axios.get(`${imageBase}${posterSize}${posterLink}`)
    return res.data
  }



