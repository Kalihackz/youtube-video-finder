import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="nav">
            <nav className="nav__container">
                <div className="nav__left">
                    <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="yt-icon"/>
                    <p>YouTube</p>
                </div>
                <div className="nav__center">
                    <div className="nav__menu">
                        <div className="nav__item">Home</div>  
                        <div className="nav__item">Videos</div>  
                        <div className="nav__item">Trends</div>  
                    </div>
                </div>
                <div className="nav__right">
                <p>Your Account</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;