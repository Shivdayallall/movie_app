import React, { Component } from 'react'
import { connect } from 'react-redux'

class NowPlayingMovies extends Component {
  render() {
    let current
    if(this.props.movies.searchedMovies !== null) {

      current = this.props.currentShowning.searchedMovies.map((movie, index) => {
        return (
          <div key={index}>
            Title: {movie.title}
            <br></br>
            Description: {movie.overview}
            <br></br>
          </div>
        )
      })
    } else {
      current = ''
    }
    return (
      <div>
        {current}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}
export default connect(mapStateToProps, null)(NowPlayingMovies)
