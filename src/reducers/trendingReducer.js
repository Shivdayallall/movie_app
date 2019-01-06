import { TRENDING_MOVIES } from '../constants'

const initialState = {
  moviesTrending: null,
}

export default (state = initialState, action ) => {
  let updated = Object.assign({}, state)

  switch(action.type) {
    case TRENDING_MOVIES:
      updated.moviesTrending = action.payload.data.results
      return updated

    default:
      return state 
  }
}