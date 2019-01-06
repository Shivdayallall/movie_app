import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { trendingMovies} from '../../actions'

class TrendMovies extends Component {

  render() {
    let trendingMovies
    if(this.props.movies.searchedMovies !== null) {
    
      trendingMovies = this.props.movies.searchedMovies.map((movie, index) => {
        // trendMovies is coming from the state below, and moviesTrending is coming from the  state inside trendingReducer.js
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
      trendingMovies = ''
    }
    // console.log(this.props)
    return (
      <div>
        {trendingMovies}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}
export default connect(mapStateToProps, null)(TrendMovies)