import React from "react";
import PeopleModal from "../PeopleModal/PeopleModal";
import "./PeopleCarrousel.scss";

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

class PeopleCarrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      openModal: false,
      openPeopleModal: false,
      modalId: 0,
      personImage: "",
      name: "",
      character: "",
    };
  }

  componentDidMount() {
    axios
      .get(`${baseUrl}${this.props.movie_id}/credits?api_key=${apiKey}`)
      .then((res) => {
        this.setState({
          people: res.data.cast,
        });
      });
  }

  showModal = (person) =>
    this.setState({
      openModal: true,
      modalId: person.id,
      personImage: person.profile_path,
      name: person.name,
      character: person.character,
    });

  closeModal = () => this.setState({ openModal: false });

  render() {
    const { movie_id } = this.props;
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
    return (
      <div className="PeopleCarrousel" style={{ background: "white" }}>
        <h1 className="people__carousel--title">Cast</h1>
        <Slider {...settings}>
          {this.state.people.map((person, index) => {
            if (index <= 10) {
              return (
                <div key={index}>
                  <div className="people__info">
                    {" "}
                    <img
                      dataSet={index}
                      onClick={this.showModal.bind(null, person)}
                      className="people__info--image"
                      style={{ opacity: "1", cursor: "pointer" }}
                      src={`https:/image.tmdb.org/t/p/w370_and_h556_bestv2${
                        person.profile_path
                          ? person.profile_path
                          : "fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg"
                      }`}
                      alt="movie poster"
                    />
                  </div>
                  <h3 className="people__info--name">
                    {person.name ? person.name : "Chris Geere"}
                  </h3>
                  <h4 className="people__info--title">
                    {person.character ? person.character : "Roger Clifford"}
                  </h4>
                </div>
              );
            }
          })}
        </Slider>
        {this.state.openModal && (
          <PeopleModal
            time={this.props.time}
            props={this.props}
            localState={this.state}
            backDrop={this.props.backDrop}
            id={
              this.state.modalId
                ? this.state.modalId
                : "5a7aaa950e0a26020c003ea3"
            }
            onClose={this.closeModal}
            personImage={
              this.state.personImage
                ? this.state.personImage
                : "/hYSoo0SAwr5vfh0jHU82JdBmP6V.jpg"
            }
            img={this.state.profile_path}
            name={this.state.name ? this.state.name : "Chris Geere"}
            character={
              this.state.character ? this.state.character : "Roger Clifford"
            }
            overview={this.props.overview}
          />
        )}
      </div>
    );
  }
}

export default PeopleCarrousel;
