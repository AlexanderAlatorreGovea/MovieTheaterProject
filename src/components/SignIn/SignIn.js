import React, { Component } from 'react';
import './SignIn.scss';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { showAlert } from '../../utils/alerts'; 

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleSignIn: false,
            name: '',
            email: '',
            password: '',
            token: null,
            signInEmail: '',
            signInPassword: ''
        }
        this.apiKey = '745fff882d6434c78ae4843ae559ef06';
    } 

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = async e => {
        e.preventDefault();

        const URL = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${this.apiKey}`

        const { name, email, password } = this.state;

        if (!name && !email && !password) return;

        try {
            const res = await axios({
                method: 'GET',
                url: URL
            });
            if (res.data.success == true) {
                showAlert('success', 'You are now signed up');
                window.location.assign('/GuestSession')
            }
        } catch (err) {
            if (err) {
                showAlert('error', 'Error signing up! Try again');
            }
        }
    };

    signIn = async e => {
        e.preventDefault();

        const URL = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${this.apiKey}`

        const { email, password, signInEmail, signInPassword } = this.state;

        if (email === signInEmail && password === signInPassword) {
            try {
                const res = await axios({
                    method: 'GET',
                    url: URL
                });
                if (res.data.success == true) {
                    showAlert('success', 'You are now signed in');
                    window.location.assign('/GuestSession')
                }
            } catch (err) {
                if (err) {
                    showAlert('error', 'Error logging in! Try again!');
                }
            }
        }
    };

    // componentDidUpdate(prevProps, prevState) {
    //     // if (this.state.token !== null) {
    //     //     window.location.assign(`https://www.themoviedb.org/authenticate/${this.state.token}`)
    //     // }
    //     console.log(prevState)
    // }
     
    toggleSignInView  = () => this.setState({ 
        toggleSignIn: !this.state.toggleSignIn 
    })

    render() {
        console.log(this.state.token)
        return (
                <div className="SignIn">
                        <h1 className="main-title">Sign In / Sign Up</h1>
                            <div className={`container ${this.state.toggleSignIn ? 'right-panel-active' : '' }`} id="container">
                                <div className="form-container sign-up-container">
                                    <form onSubmit={this.onSubmit}>
                                        <h1 className="form-title">Create Account</h1>
                                        <div className="social-container">
                                            <a className="social"><i class="facebook f icon"></i></a>
                                            <a className="social"><i class="google plus g icon"></i> </a>
                                            <a className="social"><i class="linkedin icon"></i></a>
                                        </div>
                                        <span>or use your email for registration</span>
                                        <input onChange={this.onChange} type="name" name="name" placeholder="Name" />
                                        <input onChange={this.onChange} type="email" name="email" placeholder="Email" />
                                        <input onChange={this.onChange} type="password" name="password" placeholder="Password" />
                                        <button className="btn">Sign Up</button>
                                    </form>
                                </div>
                                <div className="form-container sign-in-container">
                                    <form >
                                        <h1>Sign in</h1>
                                        <div className="social-container">
                                            <a className="social"><i class="facebook f icon"></i></a>
                                            <a className="social"><i class="google plus g icon"></i> </a>
                                            <a className="social"><i class="linkedin icon"></i></a>
                                        </div>
                                        <span>or use your account</span>
                                        <input onChange={this.onChange} name="signInEmail" type="email" placeholder="Email" />
                                        <input onChange={this.onChange} name="signInPassword" type="password" placeholder="Password" />
                                        <a>Forgot your password?</a>
                                        <button onClick={this.signIn} className="btn">Sign In</button>
                                    </form> 
                                </div>
                                <div className="overlay-container">
                                    <div className="overlay">
                                        <div className="overlay-panel overlay-left">
                                            <h1>Welcome Back!</h1>
                                            <p className="sign-paragraph">To keep connected with us please login with your personal account</p>
                                            <button onClick={this.toggleSignInView} className="btn ghost" id="signIn">Sign In</button>
                                        </div>
                                        <div className="overlay-panel overlay-right">
                                            <h1>Hello, Friend!</h1>
                                            <p className="sign-paragraph">Discover more awesome content by signing up! </p>
                                            <button onClick={this.toggleSignInView} className="btn ghost" id="signUp">Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    <footer id="sign-in-footer" className="footer" >
                        <div className="footer--info">
                        © 2019 Alexander Govea. All rights reserved. <br />
                        Designed and built using data provided by TMDb.
                        </div>
                        <div className="footer--info__socialmedia">
                            <i class="github icon "><a href="https://github.com/AlexanderAlatorreGovea/MovieTheaterProject" target="_blank"></a></i>
                            <i class="linkedin icon justify"><a href="https://www.linkedin.com/in/alexander-govea-735774107/" target="_blank"></a></i>
                            <i class="twitter icon justify"><a href="https://www.linkedin.com/in/alexander-govea-735774107/" target="_blank"></a></i>
                            <i class="envelope outline icon justify"><a href="mailto:alexander_alatorre1993@hotmail.com"></a></i>
                        </div>
                    </footer>
                </div>
        );
    }
}

export default SignIn;
