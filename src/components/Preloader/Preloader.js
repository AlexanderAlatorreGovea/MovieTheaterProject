import React from "react";
import "./Preloader.scss";

class Preloader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      document.querySelector(".loader-container").style.transition =
        "opacity 5s";
      document.querySelector(".loader-container").style.opacity = "0";

      setTimeout(() => {
        document.querySelector(".loader-container").remove();
      }, 1000);
    }, 2000);
  }

  render() {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      </div>
    );
  }
}

export default Preloader;
