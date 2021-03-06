import React from 'react';
import Home from '/Users/test/movietheaterprojectmaster/src/components/Home/Home.js'
import SearchField from '../SearchField/SearchField';
import MovieDetails from '../MovieDetails/MovieDetails';
import PeopleModal from '../PeopleModal/PeopleModal';
import SignIn from '../SignIn/SignIn';
import MovieDetailsDefault from '../MovieDetailsDefault/MovieDetailsDefault';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './App.scss';

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect  
} from 'react-router-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        toggleSearchBar: false,
        movies: [],
        searchQuery: '',
        toDashBoard: false,
        toggleSearchBar: true,
    }
    this.apiKey = '745fff882d6434c78ae4843ae559ef06';
 }



  handleChange = (e) => {
      e.preventDefault();
      this.setState({ searchQuery: e.target.value 
  })}

  closeSearchBar  = () => this.setState({toggleSearchBar: true})

  toggleSearchBar  = () => this.setState({toggleSearchBar: !this.state.toggleSearchBar})

  render(){
    console.log(this.state.movies)
    console.log(this.state.movies.lenght)
    console.log(this.state)
    return (
      <Router >
          <ScrollToTop>
            <Route exact path="/MovieDetailsDefault" component={ MovieDetailsDefault } />
            <Route exact path="/" component={ Home } />
            <Route exact path="/SignIn" component={ SignIn } />
            <Route exact path="/MovieDetails/:movieId" component={ MovieDetails } />
            <Route exact path="/Discover/:id" component={ SearchField } />
            <Route exact path="/PeopleModal" component={ PeopleModal } />
          </ScrollToTop>
          <div className="search-item">
                <form style={{zIndex: '300000'}} class={`pa ${this.state.toggleSearchBar ? 'hide' : 'show'}`}>
                    <div class="measure__ ">
                        <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="search" 
                            placeholder='search for movies...'
                            onChange={this.handleChange}
                            aria-describedby="name-desc" />
                        <Link
                           to={{
                            pathname: `/Discover/${this.state.searchQuery}`,
                            state: {
                              searchQuery: this.state.searchQuery
                            }}}>
                          <button type="submit" className="main-nav-search-form__button">
                            <i class="white large search icon svg"></i>
                          </button>
                        </Link>
                    </div>
                </form>
            </div>
        <nav className="main-nav">
          <ul className="main-nav__icons" style={{display: 'flex', listStyleType: 'none'}}>
            <li className="main-nav__icon" onClick={this.closeSearchBar} ><Link to={{pathname: "/", state: {displaySingIn: this.state.displaySingIn }}}><i className="white big home icon"></i></Link></li>
            <li className="main-nav__icon" onClick={this.closeSearchBar} ><Link to={{pathname: "/MovieDetailsDefault", state: {displaySingIn: this.state.displaySingIn }}}><i class="big white film icon"></i> </Link></li>
            <li className="main-nav__icon" onClick={this.toggleSearchBar} ><i className="big white search icon"></i></li>
            <li className="main-nav__icon" ><Link to="/SignIn"><i class="big white users icon"></i></Link></li>
          </ul>
        </nav>
      </Router>
    );
  }
}

export default App;



