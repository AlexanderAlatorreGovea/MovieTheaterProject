import React from "react";
import { Link } from "react-router-dom";
import { apiKey, baseUrl } from "../../apis/apiKey";
import axios from "axios";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    >
      <svg
        className="left--arrow__people"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M6.1 23.2L17.9 12 6.1.8"
        ></path>
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    >
      <svg
        className="right--arrow__people"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M17.9 23.2L6.1 12 17.9.8"
        ></path>
      </svg>
    </div>
  );
}

class RelatedCarrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedMovies: [],
      openModal: false,
      openPeopleModal: false,
      modalId: 0,
      personImage: "",
      name: "",
      character: "",
    };
  }
  componentDidMount() {
    const movie_id = this.props.movie_id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        this.setState({
          relatedMovies: res.data.results,
        });
      });
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const imgURL = "http://image.tmdb.org/t/p/";
    const state = this.state;
    return (
      <div
        onClick={() => window.location.reload()}
        className="PeopleCarrousel"
        style={{ background: "white", paddingTop: "25px" }}
      >
        <h1 className="people__carousel--title">Related Movies</h1>
        <Slider {...settings}>
          {state.relatedMovies.map((movie, index) => {
            if (index <= 10) {
              return (
                <div key={index}>
                  <div className="people__info">
                    {" "}
                    <Link
                      to={{
                        pathname: `/MovieDetails/${movie.id}`,
                        state: {
                          imgURL: imgURL,
                          key: movie.id,
                          movie: movie,
                        },
                      }}
                    >
                      <img
                        dataSet={index}
                        className="people__info--image"
                        style={{ opacity: "1", cursor: "pointer" }}
                        src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${
                          movie.poster_path
                            ? movie.poster_path
                            : "fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg"
                        }`}
                        alt="movie poster"
                      />
                    </Link>
                  </div>
                  <h3 className="people__info--name">
                    {movie.original_title ? movie.original_title : "Toy Story"}
                  </h3>
                </div>
              );
            }
          })}
        </Slider>
      </div>
    );
  }
}

export default RelatedCarrousel;
