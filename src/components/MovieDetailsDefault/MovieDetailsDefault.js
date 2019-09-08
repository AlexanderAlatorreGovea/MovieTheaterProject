import React from 'react';
import { 
    apiKey,
    global,
    baseUrl,
    baseUrlKey,
    appendToResponse 
    } from '../../apis/apiKey';

import axios from 'axios';
import PeopleCarrousel from '../PeopleCarrousel/PeopleCarrousel';
import VideoModal from '../VideoModal/VideoModal';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

class MovieDetailsDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            backDrop: ''
        };
        this.apiKey = '745fff882d6434c78ae4843ae559ef06'
     }

    handleShowModal = () => this.setState({showModal: true})
     
    handleCloseModal = () => this.setState({showModal: false})

    

    componentWillMount() {
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
                backDrop: res.data.backdrop_path
            })
        })
    }

    format = (n) => {
        let num = this.state.additionalDetails.runtime;
        let hours = (num / 60);
        const rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return  rhours + "h"  + ('  ') + rminutes + "min";
    }



    setRating = rating => {
        rating = Math.round(rating / 2);
    
        document.querySelectorAll('.star-rating-container__item').forEach((node, i) => {
          if (i < rating) {
            node.classList.add("star-rating-container__item--active");
          }
        });
      };



    render() {
    const secondaryImage = this.state.posters.file_path;
    const ratings = this.state.rating;
    const movieGenres = this.state.details;
    const movieRatings = Math.round(this.state.popularity)
    //const MovieDetailsConfig = this.props.location.state
    this.setRating(this.state.vote)

        return (
          <div className="MovieDetails" style={{background: 'white'}}>
            <Preloader />
            <div className="movie-card" style={{background: 'white'}}>
              <div className="container">
                <div className="container-wrapper">
                    <div className="secondary__image--video">
                        <div className="secondary__image">
                            <div className="secondary__image--wrapper">
                                <img src={`http://image.tmdb.org/t/p/w780${secondaryImage}`} alt="cover" className="cover"
                                onClick={this.handleShowModal}/>   
                            </div> 
                                <div className="video" onClick={this.handleShowModal}>
                                    <img className="play_AfXd1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/120px-YouTube_full-color_icon_%282017%29.svg.png" decoding="async" width="120" height="85" srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/180px-YouTube_full-color_icon_%282017%29.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/240px-YouTube_full-color_icon_%282017%29.svg.png 2x" data-file-width="71" data-file-height="50" />
                                </div>
                            
                        </div>
                    </div>
                    <div className="hero" 
                    style={{background:`url(http://image.tmdb.org/t/p/w1280/${this.state.img})`}}>
                            
                    <div className="details">
                        <div className="title__and--ratings">
                            <div className="title1">{`${this.state.title}`}
                            { ratings === false  && <span className="rated__pg">PG-13</span> } 
                            { ratings === true  && <span className="rated__R">R</span> }
                        </div>
                        </div>
                        <div className="title2">1,119 Reviews<span className="break">
                        {new Date(this.state.additionalDetails.release_date).getFullYear()}</span>
                        <span className="break">{this.format()}</span> </div>    
                        {this.handlePopularity
                        }


                        <div className="rating">
                            <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
                            <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
                            <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
                            <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
                            <svg className="star-rating-container__item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
                            <span className="likes"><i className="red small heart icon"></i>{movieRatings} likes</span>
                        </div>
                        
                        
                    </div> {/* <!-- end details -->    */}
                    
                    </div> {/* <!-- end hero -->      */} 
                    
                    <div className="description">
                    
                    <div className="column1">
                        <span className="tag">{ movieGenres[0]  && movieGenres[0].name }</span> 
                        <span className="tag">{ movieGenres[1]  && movieGenres[1].name }</span>
                        <span className="tag">{ movieGenres[3] ? movieGenres[3].name : 'Thriller' }</span>
                    </div>  {/* <!-- end column1 -->      */} 
                    

                    <div className="column2">
                        
                        <p>{`${this.state.overview}`}<span style={{paddingLeft: '4px'}}></span> <a >read more...</a></p>
                        
                        <div className="avatars">
                

                        
                        </div> {/* <!-- end avatars -->      */} 
                        <span class="qB1pae"></span>
    
                        
                    </div> {/* <!-- end column2 -->   */} 
                    
                    <section className="production__info--section">
                        <div className="production__info">
                        <div className="production__info--wrapper">
                            <div className="production__info--left">
                                <div className="info__left--placeholder">
                                    <span>Released</span>
                                    <span>Director</span>
                                    <span>Revenue</span>
                                    <span>Status</span>
                                    <span>Production</span>
                                </div>
                                <div className="info__left--data">
                                    <span> {new Date(this.state.additionalDetails.release_date).getFullYear()}</span>
                                    <span>Ryan Fleck, Anna Boden</span>
                                    <span>${this.state.additionalDetails.revenue}</span>
                                    <span>{this.state.additionalDetails.status}</span>
                                    <span>Marvel Studios, Walt Disney Pictures</span>
                                </div>
                            </div>

                            <div className="production__info--right">
                                <div className="info__right--placeholder">
                                    <span>Runtime</span>
                                    <span>Budget</span>
                                    <span>Genre</span>
                                    <span>Language</span>
                                </div>
                                <div className="info__right--data">
                                    <span>{this.format()}</span>
                                    <span>${this.state.additionalDetails.budget}</span>
                                    <span>
                                    { movieGenres[0]  && movieGenres[0].name }, { movieGenres[1]  && movieGenres[1].name }, { movieGenres[3]  && movieGenres[3].name }</span>
                                    <span>English</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="production__info--media">
                            <ul id="icons" style={{ display: 'flex' }}>
                                <li><i id="icon" class="twitter icon"></i></li>
                                <li><i id="icon"  class="facebook f icon"></i></li>
                                <li><i id="icon"  class="instagram icon"></i></li>
                                <li><svg className="tmdb" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.165.062-.104.095-.405.095-.885v-2.866c0-.33-.004-.54-.033-.63a.292.292 0 0 0-.14-.204z"></path><path d="M22.416 0H1.62C.742.06.06.744 0 1.596V22.38c.06.874.712 1.542 1.555 1.617.015.003.03.003.045.003h20.845A1.727 1.727 0 0 0 24 22.29V1.71C24 .82 23.305.07 22.416 0zM4.792 15.626H2.887V8.26h1.905v7.366zm6.54-.002H9.67v-4.97L9 15.623H7.812l-.698-4.86-.007 4.86H5.44V8.26h2.468c.083.523.16 1.048.23 1.574l.27 1.87.442-3.444h2.483v7.364zm4.977-2.18c0 .655-.044 1.094-.104 1.32-.062.22-.17.4-.326.52-.15.13-.34.218-.57.266-.223.045-.57.075-1.02.075l-.004-.002H11.98V8.26h1.426c.914 0 1.45.047 1.77.128.325.09.575.225.745.42.165.18.273.404.313.645.05.235.076.705.076 1.402v2.588zm4.944.475c0 .45-.045.764-.09.99-.06.224-.195.404-.405.568-.226.166-.48.24-.78.24-.22 0-.5-.06-.68-.136a1.586 1.586 0 0 1-.515-.427l-.116.47H16.95V8.26l-.02-.003h1.8v2.4c.15-.175.315-.31.51-.4.196-.083.466-.127.69-.127.226-.003.45.036.66.115.17.07.32.185.436.33.09.125.15.27.18.42.03.138.044.43.044.87v2.054z"></path><path d="M19.08 11.205c-.12 0-.194.04-.225.12-.03.08-.06.29-.06.624v1.946c0 .324.03.533.06.623.04.086.13.14.226.134.12 0 .272-.047.3-.14.03-.097.046-.32.046-.674l.03-.002v-1.89c0-.303-.015-.508-.06-.603-.044-.1-.195-.14-.315-.14z"></path></svg></li>
                                <li><i id="icon"  class="linkify icon"></i></li>
                            </ul>
                        </div> 
                    </section>
                    {this.state.showModal &&
                        <VideoModal 
                        onClose={this.handleCloseModal}
                        videoCofing={this.state.videos[0]}/>
                    }
                    <Footer />
                    <div className="people-carrousel" style={{background: 'black'}}>
                                <PeopleCarrousel 
                                time={this.format()}
                                backDrop={this.state.posters.file_path}
                                movie_id={301528}/>      
                    </div>

                    </div> {/* <!-- end description -->      */} 
                    
                </div>  {/*  <!-- end container -->     */} 
                 {/* begining of secondary section */}
                </div>
 
                </div> {/* <!-- end movie-card -->      */} 
          </div>
      )
    }
  }

  export default MovieDetailsDefault;