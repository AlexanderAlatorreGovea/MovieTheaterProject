/*
import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBarModal.scss';

import { Link } from 'react-router-dom'

const SearchBar = document.getElementById('SearchBarModal')

class SearchBarModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        }
     }
    
     handleSubmit = (e) => {
        e.preventDefault();
    
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchQuery}`)
        .then(data => data.json())
        .then(data => {
            this.setState({ 
                movies: [...data.results.results] 
            })
        })
        }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ searchQuery: e.target.value 
    })}



  el = document.createElement('div')
  componentDidMount() {
    SearchBar.appendChild(this.el)
  }

  componentWillUnmount() {
    SearchBar.removeChild(this.el)
  }

  render() {
  const { videoCofing, onClose  } = this.props;
  return ReactDOM.createPortal(
        <div>
            <div className="SerachBar" >
                <div className="search-item">
                    <form class={`pa ${this.props.toggleSearchBar ? 'show' : 'hide'}`}
                     onSubmit={this.handleSubmit}
                    >
                        <div class="measure__">
                            <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" 
                                type="search" 
                                placeholder='search for movies...'
                                onChange={this.handleChange}
                                aria-describedby="name-desc" />
                            <Link to={
                            { pathname: `/Discover/${this.state.searchQuery}`,
                                state: { searchQuery: this.state.searchQuery }}}                      
                            >
                            <button type="submit" className="main-nav-search-form__button">
                                <i class="white large search icon svg"></i>
                            </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
          </div>,
      this.el
    )
  }
}

export default SearchBarModal;

