import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroCarousel.scss';
import  { connect  } from 'react-redux';
import { fetchNowplayingMovies } from '/Users/test/movietheaterprojectmaster/src/actions/index.js';
import { Link } from 'react-router-dom';
import Upcoming from '../Upcoming/Upcoming';
import PopularCarousel from '../PopularCarousel/PopularCarousel'
import TopRated from '../TopRated/TopRated';
import Footer from '../Footer/Footer';

function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className={`alternative--arrow ${className}`} 
       style={{ ...style, display: "block", background: "rgba(0,0,0,.5)", position: 'absolute' }}
       onClick={onClick}>
          <svg className='left--arrow__home' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.1 23.2L17.9 12 6.1.8"></path></svg>
       </div>
   );
 }
 
 function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className={className}
       style={{ ...style, display: "block", background: "rgba(0,0,0,.5)" }}
       onClick={onClick}>
      <svg className='right--arrow__home' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M17.9 23.2L6.1 12 17.9.8"></path></svg>
   </div>
   );
 }

class HeroCarousel extends React.Component {
    constructor(props) {
       super(props);
       this.state = {};
    }
    componentWillMount(){
      console.log(this.props.fetchNowplayingMovies())
   }

    render() { 
      const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 7,
          slidesToScroll: 3,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
             {
                breakpoint: 1800,
                settings: {
                   slidesToShow: 6,
                   slidesToScroll: 4,
                   infinite: true,
                   dots: false
                }
             },
             {
                breakpoint: 1440,
                settings: {
                   slidesToShow: 5,
                   slidesToScroll: 4,
                   infinite: true,
                   dots: false
                }
             },
             {
                breakpoint: 1024,
                settings: {
                   slidesToShow: 5,
                   slidesToScroll: 4,
                   infinite: true,
                   dots: false
                }
             },
             {
                breakpoint: 600,
                settings: {
                   slidesToShow: 4,
                   slidesToScroll: 2,
                   initialSlide: 1,
                   infinite: true,
                   dots: false
                }
             },
             {
                breakpoint: 480,
                settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
                   initialSlide: 0,
                   infinite: true,
                   dots: false
                }
             }
          ]
       };

      const imgURL= 'http://image.tmdb.org/t/p/';
       return (
          <div >
             <section className="slider-divider">
                <div className="movie--category">
                  <span className="movie--category__title">
                     Now Playing 
                  </span>
                  <span className="movie--category__explore">
                  &nbsp;Explore All
                  </span> 
                </div>
                  <Slider {...settings}>
                     {this.props.nowPlayingMovies.map((movie, index)=> {
                        this.props.nowPlayingMovies.filter((i) => {return i = 10 })
                        if( index < 10) {
                        return(
                           <Link 
                              to={{
                                 pathname: `/MovieDetails/${movie.id}`,
                                 state: {
                                    imgURL: imgURL,
                                    key: movie.id,
                                    movie: movie
                                 } 
                              }}
                           >
                               <div className="movie-details--home">
                                 <div className="movie-details--star__ratings">
                                    <div className="movie-details--home__star">
                                      <svg className="stars-rating-header__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
                                    </div>
                                    <div className="movie-details--home__rating-num">
                                      {movie.vote_average}
                                    </div>
                                 </div>
                               </div>
                              <div className='image'>
                                 <img id="image" 
                                       key={ movie.id }  src={ imgURL + 'w300' + movie.poster_path  } 
                                       alt='movie poster'
                                 />
                              </div>
                           </Link>
                        )}})}
               </Slider>
           </section>
            <TopRated />
            <PopularCarousel />
            <Upcoming />
            <Footer />
          </div>
       );
    }
 }

 const mapStateToProps = (state) => {
    return { 
         nowPlayingMovies: state.nowPlayingMovies
}}

export default connect(mapStateToProps, { fetchNowplayingMovies }
)(HeroCarousel);



