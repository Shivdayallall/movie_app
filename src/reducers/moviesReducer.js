import { TRENDING_MOVIES, JOJO_MOVIES } from '../constants'

const initialState = {
  moviesTrending: null,
  searchedMovies: null
}

export default (state = initialState, action ) => {
  let updated = Object.assign({}, state)

  switch(action.type) {
    case TRENDING_MOVIES:
      updated.moviesTrending = action.payload.data.results
      return updated

    case JOJO_MOVIES:
      console.log(action.payload)
      updated.searchedMovies = action.payload
      //console.log(updated.searchedMovies.length)
      return updated;

    default:
      return state 
  }
}