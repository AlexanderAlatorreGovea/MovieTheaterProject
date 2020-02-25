import React from 'react';
import MovieList from '../MovieList/MovieList';
import { Link } from 'react-router-dom';
import { searchData } from '../../actions/index';
import { connect } from 'react-redux';
import './SearchField.scss';

const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const language = "&language=en-US";
const query = "&query=";

class SearchField extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           movies: [], 
           page_num: 1,
           total_pages: null,
           query: null
       };
       this.myRef = React.createRef() 
       this.apiKey = '745fff882d6434c78ae4843ae559ef06'
    }

    fetchMovies(search) {
        fetch(URL + `${this.apiKey}` + language + query + search + "&page=" + this.state.page_num)
            .then(res => res.json())
            .then(json => this.setState({ movies: json.results, total_pages: json.total_pages, query: this.props.match.params.id }));
    }

    filterSearch = event => {
        this.fetchMovies(this.props.match.params.id)
    };
 
    nextPage = () => {
        if (this.state.movies && this.state.page_num < this.state.total_pages) {
            this.setState({
                page_num: this.state.page_num += 1
            }, () => this.fetchMovies(this.props.match.params.id))
        }
    }

    previousPage = () => {
        if (this.state.movies && this.state.page_num !== 1) {
            this.setState({
                page_num: this.state.page_num -= 1
            }, () => this.fetchMovies(this.props.match.params.id))
        }
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
        this.forceUpdate();
    }

    componentWillUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevState.query ) {
            this.filterSearch();
        }
    }

    truncateTitle = (title, limit = 20) => {
        const newTitle = [];
        if (title.length > limit) {
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
    
            return `${newTitle.join(' ')} ...`;
        }
        return title;
      }
    
   render() {
       this.props.searchData(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.props.match.params.id}`);
       const imgURL = 'http://image.tmdb.org/t/p/';
       return (
        <div className="SearchField" >
            <div className="MovieList" style={{paddingLeft: '3rem'}}>
                <div className="searchField-title">
                    <span>Results For:&nbsp; {`${this.props.match.params.id}`} </span>
                </div>
                <div className="MovieList-Wrapper">
                    {this.state.movies.length > 0 && this.state.movies.map((item, i) => {
                        return (
                            <div className="MovieCard" style={{ margin: '0', padding: '0' }}>
                                <div className="MovieCard__container">
                                    <Link
                                        activeClassName="selected"
                                        to={{
                                            pathname: `/MovieDetails/${item.id}`,
                                            state: {
                                                imgURL: imgURL,
                                                key: item.id,
                                                movie: item
                                            }
                                        }}
                                    >
                                        {item.poster_path == null ?
                                            <div className="MovieCard--wrapper">
                                                <div class="card__img"><span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" fill="#999"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"></path></svg></span></div>
                                            </div> : <div className="MovieCard--wrapper alternative-image">   <img className="searched-image" alt="img" src={`http://image.tmdb.org/t/p/w342${item.poster_path}`} style={{ width: '100%', height: '100%' }} /></div>
                                        }
                                    </Link>
                                </div>
                                <dd className="ml0 fw9 title">{this.props.match.params.id}</dd>
                                <dd className="ml0 gray star-rating">{this.truncateTitle(item.original_title)}</dd>
                            </div>
                        )
                    })}
                </div>
                   <div className="buttons-search" id="buttons-search">
                       <button onClick={() => { this.previousPage(); this.scrollToTop(); }} style={{ marginRight: '20px' }}  className="previous" id="previous">
                           <svg style={{ width: '20px', fill: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 128L192 256l128 128z" /></svg>
                           Previous
                        </button>
                       <button onClick={() => { this.nextPage(); this.scrollToTop();}} className="next-search" id="next-search">
                           Next
                           <svg style={{ width: '20px', fill: 'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z" /></svg>
                        </button>
                   </div>  
            </div>
            <footer id="search-fiedl-footer" className="footer">
                  <div className="footer--info">
                  © 2019 Alexander Govea. All rights reserved. <br />
                  Designed and built using data provided by TMDb.
                  </div>
                  <div className="footer--info__socialmedia">
                     <a href="https://github.com/AlexanderAlatorreGovea/MovieTheaterProject" target="_blank"><i class="github icon "></i></a>
                     <a href="https://www.linkedin.com/in/alexander-govea-735774107/" target="_blank"><i class="linkedin icon justify"></i></a>
                     <a href="https://github.com/AlexanderAlatorreGovea/MovieTheaterProject" target="_blank"><i class="twitter icon justify"></i></a>
                     <a href="mailto:alexander_alatorre1993@hotmail.com"><i class="envelope outline icon justify"></i></a>
                  </div>
            </footer>
        </div>
       );
   }
}

const mapStateToProps = state => ({
    searchDataResults: state.searchData,
});
  
const mapDispatchToProps = dispatch => ({
    searchData: url => dispatch(searchData(url)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
