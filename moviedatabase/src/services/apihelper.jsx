import axios from 'axios';

const token = 'd6838493868f0bc0a4e8286ed3e3714c';
const base = 'https://api.themoviedb.org/3/';
const imageBase = 'https://image.tmdb.org/t/p/';


export const getTvShowOrMovie = async (viewType, id) => {
    const res = await axios.get(`${base}${viewType}/${id}?key=${token}`)
    return res.data
  }

export const getSearchedInfo = async (viewType, search) => {
    const res = await axios.get(`${base}search/${viewType}?api_key=${token}&query=${search}`)
    return res.data
  }

  export const getPoster = async (posterSize, posterLink) => {
    const res = await axios.get(`${imageBase}${posterSize}${posterLink}`)
    return res.data
  }
