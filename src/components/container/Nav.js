import React, { Component } from 'react'
import { connect } from 'react-redux'

import { trendingMovies, upcomingMovies, topRatedMovies, nowPlayingMovies, movieSearch,} from '../../actions'
import { /*TrendMovies, UpcomingMovies, TopRatedMovies,*/ SearchMovie, } from '../view'



class Nav extends Component {
  state= {
    textSearch: ''
  }

  componentWillReceiveProps() {
    // work on disableing the button
    // let search = document.getElementById('search')
    // let btn = document.getElementById("btn").disabled = true
    // if(search !== "") {
    //   btn.disabled = false
    // } 
  }

  componentDidMount() {
    this.props.trendingMovies()
  }

  handleTrendingMovies = () => {
    this.props.trendingMovies();
  }


  upcomingMovies = () => {
    this.props.upcomingMovies()
  }

  topRatedMovies = () => {
    this.props.topRatedMovies()
  }

  currentShowing = () => {
    this.props.nowPlayingMovies()
  }
  
  searchMovie = (e) => {
    this.setState({
      "textSearch": e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.movieSearch(this.state.textSearch)
  }

  render() {
    
    return (
      <div>

        <nav className="navbar navbar-expand-md navbar-dark bg-secondary mb-2 fixed-top">

          <div className="collapse navbar-collapse" id="navbarCollapse">

            <ul className="navbar-nav mr-auto">

              <li className="nav-item ">
                <button className="btn btn-danger" onClick={this.handleTrendingMovies}>Trending Movies</button>
              </li>

              <li className="nav-item">
                <button className="btn btn-danger" onClick={this.upcomingMovies}>Upcoming Movies</button>
              </li>

              <li className="nav-item">
                <button className="btn btn-danger" onClick={this.topRatedMovies}>Top Rated</button>
              </li>

              <li className="nav-item">
                <button className="btn btn-danger" onClick={this.currentShowing}>Now Playing</button>
              </li>

            </ul>

            <form className="form-inline mt-2 mt-md-0" onSubmit={this.submitForm}>

              <input id="search" className="form-control mr-sm-2" type="text" placeholder="Search Movie" aria-label="Search" name="search" value={this.state.textSearch} onChange={this.searchMovie}/>

              <button id="btn" className="btn btn-outline-danger my-2 my-sm-0" type="button">Search</button>
            </form>

          </div>

        </nav>

        {/* <TrendMovies />
        <UpcomingMovies />
        <TopRatedMovies /> */}
        <SearchMovie />
      </div>
    )
  }
}

  const mapStateToProps = (state) => {
    return {
      trendMovie: state.trendFromStore,
      futureMovie: state.pendFromStore,
      highestRated: state.topRatedFromStore,
      nowPlaying: state.currentShowingFromStore,
      searchName: state.searchFromStore,
      movies: state.movies
    }
  }
export default connect(mapStateToProps, { trendingMovies, upcomingMovies, topRatedMovies, nowPlayingMovies, movieSearch})(Nav)

