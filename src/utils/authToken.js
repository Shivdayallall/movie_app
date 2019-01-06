import axios from 'axios'

const setAuthToken = token => {
  if (token) {

    axios.defaults.headers.common['Authorization'] = token
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
  } else {

    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken