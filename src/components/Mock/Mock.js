import React, { Component } from "react";

import "./Mock.scss";

class Mock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allImgs: "",
      currentImg: "",
      currentIndex: 0,
    };
  }

  componentDidMount() {
    const allImgs = [
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/yLsuU2P2SpDYFwtZQ7dtfVAf6TE.jpg",
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/f7pn0VD3QpEXH8sETFNUow4o7hz.jpg",
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/cALMd95TpJK04JnW32m7jN5pzSR.jpg",
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/gr2MrBOrYDLGuSdSPbDh58GlKD4.jpg",
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2/gr2MrBOrYDLGuSdSPbDh58GlKD4.jpg",
    ];
    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex],
    });
  }

  allImgsLoop = () => {
    return this.state.allImgs.map((item, index) => {
      return (
        <div
          onClick={this.clickedThumb.bind(null, index)}
          key={index}
          className="image-1"
          style={{
            backgroundImage: `url('${item}')`,
            height: "10vh",
            width: "150px",
          }}
        ></div>
      );
    });
  };

  nextBtn = () => {
    if (this.state.currentIndex != this.state.allImgs.lenght - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
    }
  };

  prevBtn = () => {
    if (this.state.currentIndex != 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
      });
    }
  };

  clickedThumb = (index) => {
    this.setState({
      currentIndex: index,
    });
  };

  render() {
    return (
      <div className="Mock" style={{ height: "100vh", background: "white" }}>
        <div className="slider">
          <div
            style={{ background: "black", marginLeft: "8rem", height: "30px" }}
            onClick={this.nextBtn}
          ></div>
          <div
            style={{ background: "red", marginLeft: "8rem", height: "30px" }}
            onClick={this.prevBtn}
          ></div>
          <div
            className="image-1"
            style={{
              background: `url('${
                this.state.allImgs[this.state.currentIndex]
              }')`,
              height: "30vh",
              width: "400px",
            }}
          ></div>
        </div>

        <div className="thumbnails">{this.allImgsLoop()}</div>
      </div>
    );
  }
}

export default Mock;
