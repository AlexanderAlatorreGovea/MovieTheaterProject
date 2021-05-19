import React from "react";
import ReactDOM from "react-dom";
import "./VideoModal.scss";

const modalRoot = document.getElementById("modal-root");

class VideoModal extends React.Component {
  el = document.createElement("div");
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { videoCofing, onClose } = this.props;
    return ReactDOM.createPortal(
      <React.Fragment>
        <div
          style={{
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: "100",
            height: "100vh",
            cursor: "pointer",
            padding: "7%",
          }}
          onClick={onClose}
        >
          <svg
            onClick={onClose}
            className="x"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
          >
            <g
              style={{ cursor: "pointer" }}
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="1.5"
            >
              <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path>
            </g>
          </svg>

          <iframe
            style={{
              background: "#fff",
              borderRadius: "2px",
              display: "block",
              marginTop: "15rem",
              margin: "1rem",
              position: "relative",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              justifySelf: "center",
              zIndex: "100",
              width: "100%",
              height: "70%",
            }}
            className="video"
            allowfullscreen
            src={` https://www.youtube.com/embed/${videoCofing.key}`}
          ></iframe>
        </div>
      </React.Fragment>,
      this.el
    );
  }
}

export default VideoModal;
