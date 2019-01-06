import React, { Component } from 'react'
import { connect } from 'react-redux'

class UpcomingMovies extends Component {
  render() {
    let upcomingMovies
    if(this.props.movies.searchedMovies !== null) {

      upcomingMovies = this.props.movies.searchedMovies.map((movie, index) => {
        return (
          <div key={index}>
            Title: {movie.title}
            <br></br>
            Description: {movie.overview}
            <br></br>
            Release Date: {movie.release_date}
            <br></br>
          </div>
        )
      })
    } else {
      upcomingMovies = ''
    }
    // console.log(this.props)
    return (
      <div>
        {upcomingMovies}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, null)(UpcomingMovies)
