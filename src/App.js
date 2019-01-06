import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store from './store'
import Register from './components/layout/Register'
import Login from './components/layout/Login'
import './App.css'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path='/' exact component={Register} />
            <Route path='/login' exact component={Login} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
