import { SIGN_USER_UP, GET_ERRORS, SET_CURRENT_USER, } from '../constants'
import axios from 'axios'
import authToken from '../utils/authToken'
import jwt from 'jwt-decode'



// ******* MUST INCLUDE THIS WHEN USING A NODE BACKEND ************
const Axios = axios.create({
  baseURL: 'http://localhost:8080', 
  timeout: 10000,
  withCredentials: false,
  headers: {
      'Access-Control-Allow-Origin': '*'
  }
})

// SIGN USER UP
export const createUser = (userData, history) => dispatch => {
  Axios.post('/users/register', userData)
  .then(res => {
    history.push('/')
    return res
  })
  .then(user => {
    console.log(user)
    dispatch({
      type: SIGN_USER_UP,
      data: user
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

// LOGIN USER IN
export const loginUser = (userInfo) => dispatch => {
  Axios.post('/users/login', userInfo)
  .then(res => {
    const { token } = res.data
    localStorage.setItem('jwtToken', token)
    authToken(token)
    const decode = jwt(token)
    dispatch(setCurrentUser(decode))
  })
  .catch(err => {
    console.log(err)
    dispatch({
      type: GET_ERRORS,
      payload: err.responce.data
    })
  })
}

// SET LOG IN USER
export const setCurrentUser = decode => {
  return {
    type: SET_CURRENT_USER,
    payload: decode
  }
}
