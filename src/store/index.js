import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { moviesReducer,  errorReducer, userReducer, authReducer, emailReducer } from '../reducers'

const reducers = combineReducers({
  errors: errorReducer,
  movies: moviesReducer,
  user: userReducer,
  auth: authReducer,
  sendEmail: emailReducer
})
const initialState = {}
const middleware = [thunk]

const store = createStore(reducers, initialState, compose(
  applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
))
export default store