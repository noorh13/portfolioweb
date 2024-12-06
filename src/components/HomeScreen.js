import React from 'react';
import './HomeScreen.css';  // Import the CSS file for styling

function HomeScreen() {
    return (
        <div className="home-screen">
            {/* Logo */}
            <header className="header">
                <div className="logo">
                    <img src="public/logo.png" alt="logo" />  {/* Replace with the path to your logo */}
                </div>
                {/* Navigation */}
                <nav>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#portfolio">View Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main content */}
            <div className="main-content">
                <h1>HELLO, I'M <span className="name">NOOR</span>.</h1>
                <h2>I'M A COMPUTATIONAL MEDIA MAJOR.</h2>
                <p>Also, I like making websites.</p>
            </div>

            {/* Buttons */}
            <div className="buttons">
                <a href="#about" className="button about">About Me</a>
                <a href="#portfolio" className="button view-portfolio">View Portfolio</a>
                <a href="#contact" className="button contact">Contact</a>
            </div>
        </div>
    );
}

export default HomeScreen;
