import React from 'react';
import HeroCarousel from '../HeroCarrousel/HeroCarousel';
import MovieSlider from '../MovieSlider/MovieSlider';
import Preloader from '../Preloader/Preloader';
import './Home.scss'
class Home extends React.Component {
    render() {
      return (
          <div className="Home">
            <Preloader />
            <MovieSlider />
            <HeroCarousel />
          </div>
      )
    }
  }

  export default Home;