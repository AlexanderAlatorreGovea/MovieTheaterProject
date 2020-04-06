import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fetchUpcomingMovies } from '/Users/test/movietheaterprojectmaster/src/actions/index.js';
import  { connect  } from 'react-redux';
import VideoModal from '../VideoModal/VideoModal';
import axios from 'axios';

import { 
  apiKey,
  global,
  baseUrl,
  baseUrlKey,
  appendToResponse 
  } from '../../apis/apiKey';

import './MovieSlider.scss';

 

class MovieSlider extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          displayModal: false,
          moviesData: [],
          videos: [],
          details: [],
          posters: [],
          rating: '',
          showModal: false,
          additionalDetails: [],
          popularity: '',
          vote: '',
          title: '',
          overview: '',
          backDrop: '',
          date: []
        };
    }
    
    componentDidMount() {
      axios.get(`${baseUrl}301528?api_key=${apiKey}&append_to_response=videos,details,images,movie_id`).then(res => {
          this.setState({ 
              details: res.data.genres,
              videos: res.data.videos.results,
              posters: res.data.images.posters[2],
              rating: res.data.adult,
              additionalDetails: res.data,
              popularity: res.data.popularity,
              vote: res.data.vote_average,
              img: res.data.poster_path, 
              title: res.data.original_title,
              overview: res.data.overview,
              backDrop: res.data.backdrop_path,
              date: res.data.release_date
          })
      })
  }

  handleShowModal = () => this.setState({showModal: true})
     
  handleCloseModal = () => this.setState({showModal: false})

     
   render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1
    }

  const imgURL= 'http://image.tmdb.org/t/p/w780';
   return (
      <div className="home-swiper-container">
        <div className="opacity-wrapper">
        <div className="swiper-wrapper">
          <aside className="side-container">
          </aside>
            <div 
                style={{background: `linear-gradient(90deg,#000 0,transparent 50%,transparent) center center no-repeat, #fff url("${imgURL}${this.state.backDrop}") center top no-repeat`, backgroundSize: 'cover, cover'}}
                className="swiper-slide">
                <div className="header-info">
                <h1 className="header-title">{this.state.title}</h1>
                <div className="star-rating-and__info">
                  <div className="star-rating">
                    <i class="star icon"></i>
                    <i class="star icon"></i>
                    <i class="star icon"></i>
                    <i class="star outline icon"></i>
                    <i class="star outline icon"></i>
                  </div>
                  {this.state.showModal &&
                    <VideoModal 
                    onClose={this.handleCloseModal}
                    videoCofing={this.state.videos[0]}/>
                    } 
                  <div className="info">
                    <span className="header-reviews">1,559 Reviews&nbsp; </span>
                    <span className="header-year">{new Date(this.state.date).getFullYear()} &nbsp;</span>
                    <span className="run-time">2h 11min</span>
                  </div>
                </div>
                <p className="synopsis">
                    {this.state.overview}
                </p>
                <div className="watch--trailer" style={{cursor: 'pointer'}} onClick={this.handleShowModal}>
                  <div className="watch--trailer__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#fff"><path d="M3 22v-20l18 10-18 10z"></path></svg>
                  </div>
                  <div className="watch--trailer__title">
                    Watch Trailer
                  </div>
                </div>
              </div>
            </div>     
          </div>
        </div>
      </div>
       );
    }
   }

 const mapStateToProps = (state) => {
  return { 
    upcomingMovies: state.upcomingMovies
  }}


  export default connect(mapStateToProps, { fetchUpcomingMovies })(MovieSlider);

