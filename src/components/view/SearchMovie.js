import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from '../container/PopUp'

class SearchMovie extends Component {
  render() {
    let input

    if(this.props.movies.searchedMovies !== null) {

      input = this.props.movies.searchedMovies.map((movie,index) => {
        return (
          <div className="card  border-danger mb-3"  style={{display:"inline-block"}} key={index}>      

            <img className="card-img-top" style={{height: "10rem", width: "10rem"}} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="movie poster" />

            <div className="card-body">

              <h5 className="card-title"> Title: {movie.title}</h5>
              <p className="card-text"> <span className="dark">Description:</span> {movie.overview}</p>
              <p><small className="text-muted">Release Date: {movie.release_date}</small></p>

              <a id="more" href={`https://www.themoviedb.org/movie/${movie.id}`} className="btn btn-danger" target="_blank" rel="noopener noreferrer">More</a>

              <Modal 
                title={movie.title}
                description={movie.overview}
                id={movie.id}
              />

            </div>

          </div>
        )
      })
    } else {
      input = ''
    }
    
    return (
      <div>
        {input}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}
export default connect(mapStateToProps, null)(SearchMovie)
