import { /*TRENDING_MOVIES, UPCOMING_MOVIES, TOP_RATED_MOVIES, NOW_SHOWING, SEARCH_MOVIES,*/  JOJO_MOVIES,  GET_ERRORS } from '../constants'

import axios from 'axios'
// ******* TRENDING MOVIES ***************

export const trendingMovies = () => dispatch => {
  axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=[your api key]')
  .then(movies => {
    console.log(movies)
    dispatch({
      type:JOJO_MOVIES,
      payload:movies.data.results
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type:GET_ERRORS,
      payload: err
    })
  })
}

// ******* UPCOMING MOVIES ***************
export const upcomingMovies = () => dispatch => {
  axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=[your api key]&language=en-US&page=1&include_adult=false')
  .then(movies => {
    let loadedMovies = movies.data.results
    let currentDate = new Date().toJSON().slice(0,10).toString()

    currentDate = new Date(currentDate)
    let filteredMovies = []
     loadedMovies.forEach((movie) => {
      console.log(movie)
      let movieReleaseDate = new Date(movie.release_date)
      if (currentDate <= movieReleaseDate) {
        filteredMovies.push(movie)
      }
    })
    dispatch({
      type: JOJO_MOVIES,
      payload:filteredMovies
    })
  })
  .catch(err => {
    // console.log(err)
    dispatch({
      type: GET_ERRORS,
      data: err
    })
  })
}

// ******* TOP RATED MOVIES ***************
export const topRatedMovies = () => dispatch => {
  axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=[your api key]&language=en-US&page=2&include_adult=false')
  .then(movies => {
    // console.log(movies)
    dispatch({
      type: JOJO_MOVIES,
      payload:movies.data.results
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: GET_ERRORS,
      data: err
    })
  })
}

// ******* NOW PLAYING MOVIES ***************
export const nowPlayingMovies = () => dispatch => {
  axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=[your api key]&language=en-US&page=2&include_adult=false')
  .then(movies => {
    console.log(movies)
    dispatch({
      type: JOJO_MOVIES,
      payload: movies.data.results
    })
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: GET_ERRORS,
      data: err
    })
  })
}

// ******* SERACH MOVIES ***************
export const movieSearch = (text) => dispatch => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=[your api key]&language=en-US&query=${text}&page=1&include_adult=false`)
  .then(movies => {
    // console.log(movies)
    dispatch({
      type: JOJO_MOVIES,
      payload: movies.data.results
    })
  })
  .catch(err => {
    // console.log(err)
    dispatch({
      type: GET_ERRORS,
      data: err
    })
  })
}


