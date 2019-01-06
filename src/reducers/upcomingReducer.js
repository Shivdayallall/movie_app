import { UPCOMING_MOVIES } from '../constants'


const initialState = {
  pendingMovies: null,
}

export default (state = initialState, action ) => {
  let updated = Object.assign({}, state)

  switch(action.type) {
    case UPCOMING_MOVIES:
      updated.pendingMovies = action.payload.data.results
      return updated

    default:
      return state  
  }
}



// map of null- means your trying to map over an array that dont exist
// map of undefine- means your trying to map over an array that's not defined, or you can learn to spell
