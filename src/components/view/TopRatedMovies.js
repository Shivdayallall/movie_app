import React, { Component } from 'react'
import { connect } from 'react-redux'

class TopRatedMovies extends Component {
  render() {
    
    let highestRated
    if(this.props.movies.searchedMovies !== null) {
      highestRated = this.props.movies.searchedMovies.map((movie, index) => {
        return (
          <div key={index}>
          <h1>Title: {movie.title}</h1>
          <br></br>
          Description: {movie.overview}
          <br></br>
          Release Date: {movie.release_date}
          <br></br>
        </div>
        )
      })
    } else {
      highestRated = ''
    }
    return (
      <div>
        {highestRated}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}
export default connect(mapStateToProps, null)(TopRatedMovies)

