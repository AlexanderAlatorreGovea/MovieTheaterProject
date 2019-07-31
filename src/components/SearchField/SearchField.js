
import React from 'react';
import MovieList from '../MovieList/MovieList';
import { searchData } from '../../actions/index';
import { connect } from 'react-redux';
import './SearchField.scss';

class SearchField extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           movies: [],
       };
       this.apiKey = '745fff882d6434c78ae4843ae559ef06'
    }

    UNSAFE_componentWillReceiveProps() {
        this.props.searchData(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.props.match.params.id}`)
    }

    componentDidMount() {
        this.props.searchData(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.props.match.params.id}`)
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
    
            // return the result
            return `${newTitle.join(' ')} ...`;
        }
        return title;
      }
    
   render() {
   console.log(this.props.location.state)
   console.log(this.props)
   console.log(this.props.location.state.handleChange)
   console.log(this.props.match.params.id)
   return (
        <div className="SearchField" >
            <div className="MovieList" style={{paddingLeft: '3rem'}}>
                <div className="searchField-title">
                    <span>Results For:&nbsp; {`${this.props.match.params.id}`} </span>
                </div>
                <div className="MovieList-Wrapper">
                    {
                    this.props.searchDataResults.results.length > 0 && this.props.searchDataResults.results.map((item, i)=> {
                    return(
                        <div className="MovieCard" style={{margin: '0', padding: '0'}}>
            
                        <div className="MovieCard__container">
                             { item.poster_path == null ? 
                                <div className="MovieCard--wrapper">
                                <div class="card__img"><span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" fill="#999"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"></path></svg></span></div>
                                </div> :  <div className="MovieCard--wrapper alternative-image">   <img className="searched-image" src={`http://image.tmdb.org/t/p/w342${item.poster_path}`} style={{width: '100%', height: '100%' }}
                                /></div>
                            } 
                        </div>
                        <dd className="ml0 fw9 title">{this.props.match.params.id}</dd>
                        <dd className="ml0 gray star-rating">{this.truncateTitle(item.original_title)}</dd>
                     </div>
                    )
                    })}
                </div>
            </div>
            <footer id="search-fiedl-footer" className="footer">
                  <div className="footer--info">
                  © 2019 Alexander Govea. All rights reserved. <br />
                  Designed and built using data provided by TMDb.
                  </div>
                  <div className="footer--info__socialmedia">
                     <i class="github icon "></i>
                     <i class="linkedin icon justify"></i>
                     <i class="twitter icon justify"></i>
                     <i class="envelope outline icon justify"></i>
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
