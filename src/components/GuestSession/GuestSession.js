import React from 'react'
import { showAlert } from '../../utils/alerts'; 

import './GuestSession.scss';

const GuestSession = () => { 

    const logOut = () => {
        showAlert('success', 'You are now logged out');
        window.location.assign('/')
    }
    
    return (
        <div className="guest-session">
            <div className="ratings">
                <div className="ratings-container">
                    <svg class="user-profile-container-main-info-item__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z"></path></svg>
                    <span className="ratings-container-title">Favorite Movies</span>
                </div>
                <div className="ratings-container">
                    <svg class="user-profile-container-main-info-item__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z"></path></svg>
                    <span className="ratings-container-title">Favorite Shows</span>
                </div>
                <div className="ratings-container">
                    <svg class="user-profile-container-main-info-item__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
                    <span className="ratings-container-title">Rated Movies</span>
                </div>
                <div className="ratings-container">
                    <svg class="user-profile-container-main-info-item__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
                    <span className="ratings-container-title">Rated Movies</span>
                </div>
            </div>
            <div className="profile-ratings">
                <aside>
                    <div className="profile">
                        <img 
                            style={{ opacity: '1' }}
                            key="image"
                            alt="makeuseof"
                            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                    </div>
                    <h1>Welcome</h1>
                    <h2>Guest</h2>
                    <button onClick={logOut} className="log-out-btn">
                        LOG OUT
                    </button>
                </aside>
                <div className="ratings-favorite">
                    <div className="favorite">
                        <div className="favorite-container">
                            <h1>FAVORITE MOVIES</h1>
                            <hr />
                            <h4>No favorite movies found</h4>
                        </div>
                        <div className="favorite-container">
                            <h1>TV SHOWS</h1>
                            <hr />
                            <h4>No favorite tv shows found</h4>
                        </div>
                        <div className="favorite-container">
                            <h1>MOVIES RATED</h1>
                            <hr />
                            <h4>No rated movies found</h4>
                        </div>
                        <div className="favorite-container">
                            <h1>TV SHOWS RATED</h1>
                            <hr />
                            <h4>No rated tv shows found</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestSession;
