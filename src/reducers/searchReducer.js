import { SEARCH_MOVIES } from '../constants'

const initialState = {
  search: '',
}

export default (state = initialState, action ) => {
  let updated = Object.assign({}, state)

  switch(action.type) {
    case SEARCH_MOVIES:
      updated.search = action.payload.data
      return updated


    default:
      return state 
  }
}