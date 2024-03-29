import React from "react";
import { searchData } from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MovieList from "../MovieList/MovieList";

import "./SearchField.scss";

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 1,
      switchPage: false,
    };
    this.apiKey = "745fff882d6434c78ae4843ae559ef06";
  }

  fetchFuction = () => {
    return this.props.searchData(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.props.match.params.id}&page=${this.state.page}`
    );
  };

  scrollToTop = () => {
    return window.scroll({ top: 0 });
  };

  fetchNewMovies = (number) => {
    const page = +number;
    this.setState(
      (prevState) => {
        return {
          page: prevState.page + page,
          switchPage: true,
        };
      },
      () => {
        this.fetchFuction();
        this.scrollToTop();
      }
    );
  };

  componentDidMount() {
    this.fetchFuction();
  }

  componentDidUpdate(prevProps) {
    const id = this.props.match.params.id;
    const prevId = prevProps.match.params.id;

    const page = this.state.page;
    const prevPage = prevProps.searchDataResults.page;

    if (id !== prevId) {
      this.fetchFuction();
      this.setState({
        page: 1,
      });
    }
  }

  truncateTitle = (title, limit = 20) => {
    const newTitle = [];
    if (title.length > limit) {
      title.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);

      return `${newTitle.join(" ")} ...`;
    }
    return title;
  };

  render() {
    const imgURL = "http://image.tmdb.org/t/p/";
    const state = this.state;
    const searchData = this.props.searchDataResults;
    const limit = searchData.total_pages;
    const id = this.props.match.params.id;

    return (
      <div className="SearchField">
        <div className="MovieList" style={{ paddingLeft: "3rem" }}>
          <div className="searchField-title">
            <span>
              {searchData.total_results} Results found For:&nbsp; {`${id}`}{" "}
            </span>
          </div>
          <div className="MovieList-Wrapper">
            {searchData.results.length > 0 &&
              searchData.results.map((item, i) => {
                return (
                  <div className="MovieCard">
                    <div className="MovieCard__container">
                      {item.poster_path == null ? (
                        <div className="MovieCard--wrapper">
                          <div className="card__img">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                fill="#999"
                              >
                                <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={{
                            pathname: `/MovieDetails/${item.id}`,
                            state: {
                              imgURL: imgURL,
                              key: item.id,
                              movie: item,
                            },
                          }}
                        >
                          <div className="MovieCard--wrapper alternative-image">
                            {" "}
                            <img
                              className="searched-image"
                              src={`http://image.tmdb.org/t/p/w342${item.poster_path}`}
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                        </Link>
                      )}
                    </div>
                    <dd className="ml0 fw9 title">{id}</dd>
                    <dd className="ml0 gray star-rating">
                      {this.truncateTitle(item.original_title)}
                    </dd>
                  </div>
                );
              })}
          </div>
        </div>

        {searchData.results.length && (
          <div class="buttons-search" id="buttons-search">
            <button
              class="previous"
              id="previous"
              onClick={() =>
                this.fetchNewMovies(this.state.page === 1 ? "0" : "-1")
              }
              style={{
                backgroundColor: state.page !== 1 ? "#eb4e7a" : "",
                color: state.page !== 1 ? "#fff" : "",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{
                  fill: state.page !== 1 ? "white" : "black",
                  width: "20px",
                }}
              >
                <path d="M320 128L192 256l128 128z"></path>
              </svg>
              Previous
            </button>
            <button
              onClick={() =>
                this.fetchNewMovies(this.state.page === limit ? "0" : "1")
              }
              class="next-search"
              id="next-search"
              style={{
                backgroundColor: this.state.page === limit ? "#fff" : "",
                color: this.state.page === limit ? "black" : "",
              }}
            >
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ width: "20px", fill: "white" }}
                style={{
                  fill: this.state.page === limit ? "black" : "white",
                  width: "20px",
                }}
              >
                <path d="M192 128l128 128-128 128z"></path>
              </svg>
            </button>
          </div>
        )}
        <footer className="footer">
          <div className="footer--info">
            © 2019 Alexander Govea. All rights reserved. <br />
            Designed and built using data provided by TMDb.
          </div>
          <div className="footer--info__socialmedia">
            <i className="github icon "></i>
            <i className="linkedin icon justify"></i>
            <i className="twitter icon justify"></i>
            <i className="envelope outline icon justify"></i>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchDataResults: state.searchData,
});

const mapDispatchToProps = (dispatch) => ({
  searchData: (url) => dispatch(searchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
