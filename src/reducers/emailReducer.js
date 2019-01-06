import { EMAIL_SEND } from '../constants'

const initialState = {
  email: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case EMAIL_SEND:
      console.log("email sent")
      return action.payload
    default:
      return state
  }
}
