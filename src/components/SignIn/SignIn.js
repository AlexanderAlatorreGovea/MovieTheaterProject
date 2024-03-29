import React, { Component } from "react";
import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSignIn: false,
    };
  }

  toggleSignInView = () =>
    this.setState({ toggleSignIn: !this.state.toggleSignIn });

  render() {
    return (
      <div className="SignIn">
        <h1 className="main-title">Sign In / Sign Up</h1>
        <div
          className={`container ${
            this.state.toggleSignIn ? "right-panel-active" : ""
          }`}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form>
              <h1 className="form-title">Create Account</h1>
              <div className="social-container">
                <a className="social">
                  <i className="facebook f icon"></i>
                </a>
                <a className="social">
                  <i className="google plus g icon"></i>{" "}
                </a>
                <a className="social">
                  <i className="linkedin icon"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className="btn">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form>
              <h1>Sign in</h1>
              <div className="social-container">
                <a className="social">
                  <i className="facebook f icon"></i>
                </a>
                <a className="social">
                  <i className="google plus g icon"></i>{" "}
                </a>
                <a className="social">
                  <i className="linkedin icon"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a>Forgot your password?</a>
              <button className="btn">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p className="sign-paragraph">
                  To keep connected with us please login with your personal
                  account
                </p>
                <button
                  onClick={this.toggleSignInView}
                  className="btn ghost"
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p className="sign-paragraph">
                  Discover more awesome content by signing up!{" "}
                </p>
                <button
                  onClick={this.toggleSignInView}
                  className="btn ghost"
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer id="sign-in-footer" className="footer">
          <div className="footer--info">
            © 2019 Alexander Govea. All rights reserved. <br />
            Designed and built using data provided by TMDb.
          </div>
          <div className="footer--info__socialmedia">
            <i className="github icon "></i>
            <i className="linkedin icon justify"></i>
            <i className="twitter icon justify"></i>
            <i className="envelope outline icon justify"></i>
          </div>
        </footer>
      </div>
    );
  }
}

export default SignIn;
