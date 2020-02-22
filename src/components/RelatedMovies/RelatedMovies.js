import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './RelatedMovies.scss';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            id='left--arrow__people'
            className={className}
            style={{ ...style, display: "block", background: "none" }}
            onClick={onClick}>
            <svg id="arrow__people" className='left--arrow__people' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M6.1 23.2L17.9 12 6.1.8"></path></svg>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "none" }}
            onClick={onClick}>
            <svg id="arrow__people" className='right--arrow__people' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M17.9 23.2L6.1 12 17.9.8"></path></svg>
        </div>
    );
}

class RelatedMovies extends Component {
    state = {
        loading: false
    }

    handleOnClick = () => {
        this.setState({ redirect: true });
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 3,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const imgURL = 'http://image.tmdb.org/t/p/';
        return (
            <div className="related-movies">
                <h1 className="people__carousel--title">RelatedMovies</h1>
                <Slider {...settings}>
                    {this.props.relatedMovies.map((item, idx) => {
                        if (idx <= 10) {
                            return ( 
                                <div onClick={this.handleOnClick}> 
                                    <Link
                                        to={{
                                            pathname: `/RelatedMovies/${item.id}`,
                                            state: {
                                                imgURL: imgURL,
                                                key: item.id,
                                                movie: item
                                            }
                                        }}
                                    >
                                        <img
                                            dataSet={idx}
                                            className='people__info--image' style={{ opacity: '1', cursor: 'pointer' }}
                                            src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster_path ? item.poster_path : "/hYSoo0SAwr5vfh0jHU82JdBmP6V.jpg"}`}
                                            alt='movie poster'
                                        />
                                    </Link>
                                        <h3 className='people__info--name'>{item.title ? item.title : "Toy Story"}</h3>
                                </div>
                            )
                        }
                    })}
                </Slider>
            </div>
        )
    }
}

export default RelatedMovies;