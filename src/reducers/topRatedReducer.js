import { TOP_RATED_MOVIES, JOJO_MOVIES } from '../constants'

const initialState = {
  topRatedMovies: null
}

export default (state = initialState, action ) => {
  let updated = Object.assign({}, state)

  switch(action.type) {
    case TOP_RATED_MOVIES:
      updated.topRatedMovies = action.payload.data.results
      return updated


    case JOJO_MOVIES:
      updated.topRatedMovies = action.payload.data.results
      return updated
    default:
      return state  
  }
}