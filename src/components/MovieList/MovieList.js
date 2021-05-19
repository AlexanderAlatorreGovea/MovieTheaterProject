import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";

import "./MovieList.scss";

class MovieList extends React.Component {
  render() {
    const imgURL = "http://image.tmdb.org/t/p/";
    const { searchQuery } = this.props;
    return (
      <div className="MovieList" style={{ paddingLeft: "3rem" }}>
        <div className="searchField-title">
          <span>Results For:&nbsp; {`${searchQuery}`} </span>
        </div>
        <div className="MovieList-Wrapper">
          {this.props.movies.map((movie, i) => {
            return (
              <Link
                to={{
                  pathname: `/MovieDetails/${movie.id}`,
                  state: {
                    imgURL: imgURL,
                    key: movie.id,
                    movie: movie,
                  },
                }}
              >
                <MovieCard
                  key={movie.id}
                  viewMovieInfo={movie.viewMovieInfo}
                  movieId={movie.id}
                  movie={movie}
                  title={movie.title}
                  overview={movie.overview}
                  image={movie.poster_path}
                  date={movie.release_date}
                  searchQuery={searchQuery}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MovieList;
