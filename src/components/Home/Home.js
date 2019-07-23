import React from 'react';
import HeroCarousel from '/Users/test/movietheaterprojectmaster/src/components/HeroCarrousel/HeroCarousel.js';
import MovieSlider from '../MovieSlider/MovieSlider';
import Preloader from '../Preloader/Preloader';

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