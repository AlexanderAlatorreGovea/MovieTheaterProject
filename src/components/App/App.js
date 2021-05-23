import React from "react";

import {
  Route,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "../Home/Home.js";
import SearchField from "../SearchField/SearchField";
import MovieDetails from "../MovieDetails/MovieDetails";
import PeopleModal from "../PeopleModal/PeopleModal";
import SignIn from "../SignIn/SignIn";
import MovieDetailsDefault from "../MovieDetailsDefault/MovieDetailsDefault";
import ScrollToTop from "../ScrollToTop/ScrollToTop";


import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSearchBar: false,
      movies: [],
      searchQuery: "",
      toDashBoard: false,
      toggleSearchBar: true,
      idx: 0,
    };
    this.apiKey = "745fff882d6434c78ae4843ae559ef06";
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
  };

  closeSearchBar = () => this.setState({ toggleSearchBar: true });

  switchColor(index) {
    this.setState({
      idx: index,
    });
  }

  toggleSearchBar = () =>
    this.setState({ toggleSearchBar: !this.state.toggleSearchBar });

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Route
            exact
            path="/MovieDetailsDefault"
            component={MovieDetailsDefault}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/MovieDetails/:movieId" component={MovieDetails} />
          <Route exact path="/Discover/:id" component={SearchField} />
          <Route exact path="/PeopleModal" component={PeopleModal} />
        </ScrollToTop>
        <div className="search-item">
          <form
            style={{ zIndex: "300000" }}
            className={`pa ${this.state.toggleSearchBar ? "hide" : "show"}`}
          >
            <div className="measure__ ">
              <input
                id="name"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="search"
                placeholder="search for movies..."
                onChange={this.handleChange}
                aria-describedby="name-desc"
              />
              <Link
                to={{
                  pathname: `/Discover/${this.state.searchQuery}`,
                  state: {
                    searchQuery: this.state.searchQuery,
                  },
                }}
              >
                <button type="submit" className="main-nav-search-form__button">
                  <i
                    className="white large search icon svg"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "35%",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></i>
                </button>
              </Link>
            </div>
          </form>
        </div>
        <nav className="main-nav">
          <ul
            className="main-nav__icons"
            style={{ display: "flex", listStyleType: "none" }}
          >
            <li
              className="main-nav__icon"
              onClick={() => {
                this.closeSearchBar();
                this.switchColor(0);
              }}
            >
              <Link
                to={{
                  pathname: "/",
                  state: { displaySingIn: this.state.displaySingIn },
                }}
              >
                <i
                  style={{ color: this.state.idx === 0 ? "#2196f3" : "white" }}
                  className="white big home icon"
                ></i>
              </Link>
            </li>
            <li
              className="main-nav__icon"
              onClick={() => {
                this.closeSearchBar();
                this.switchColor(1);
              }}
            >
              <Link
                to={{
                  pathname: "/MovieDetailsDefault",
                  state: { displaySingIn: this.state.displaySingIn },
                }}
              >
                <i
                  style={{ color: this.state.idx === 1 ? "#2196f3" : "white" }}
                  className="big white film icon"
                ></i>{" "}
              </Link>
            </li>
            <li
              className="main-nav__icon"
              onClick={() => {
                this.toggleSearchBar();
                this.switchColor(3);
              }}
            >
              <i
                style={{ color: this.state.idx === 3 ? "#2196f3" : "white" }}
                className="big white search icon"
              ></i>
            </li>
            <li className="main-nav__icon">
              <Link
                onClick={() => {
                  this.closeSearchBar();
                  this.switchColor(2);
                }}
                to="/SignIn"
              >
                <i
                  style={{ color: this.state.idx === 2 ? "#2196f3" : "white" }}
                  className="big white users icon"
                ></i>
              </Link>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}

export default App;
