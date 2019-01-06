import { NOW_SHOWING, JOJO_MOVIES } from '../constants'


const initialState = {
  currentShowing: null,
}

export default (state = initialState, action ) => {
  let updated = Object.assign({}, state)

  switch(action.type) {
    case NOW_SHOWING:
      updated.currentShowing = action.payload.data.results
      return updated

      case JOJO_MOVIES:
      updated.currentShowing = action.payload.data.results
      return updated

    default:
      return state 
  }
}