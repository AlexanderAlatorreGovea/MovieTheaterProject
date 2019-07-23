import React from 'react';
import './MovieList.scss'
import MovieCard from '../MovieCard/MovieCard'

class MovieList  extends React.Component {
    render(){
    const { searchQuery } = this.props; 
    return(
        <div className="MovieList" style={{paddingLeft: '3rem'}}>
        <div className="searchField-title">
            <span>Results For:&nbsp; {`${searchQuery}`} </span>
        </div>
        <div className="MovieList-Wrapper">

            {
            this.props.movies.map((movie, i) => {
            console.log(movie)
            return(
            <MovieCard 
                key={movie.id} 
                viewMovieInfo={movie.viewMovieInfo} 
                movieId={movie.id} 
                title={movie.title} 
                overview={movie.overview} 
                image={movie.poster_path} 
                date={movie.release_date}
                searchQuery={searchQuery}
            /> 
            )
            })}
        </div>
    </div>
    )
}
}

export default MovieList;
