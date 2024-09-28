import React from 'react';
import HomeScreen from './components/HomeScreen';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* HomeScreen section */}
            <HomeScreen />

            {/* About Me section */}
            <div id="about" className="about-section">
                <h2>About Me</h2>
                <p>
                    Hello! I'm Taha, a passionate creative producer with a love for storytelling,
                    design, and visual arts. With experience in multiple projects across media
                    production, digital design, and content creation, I bring creativity and
                    dedication to every project I work on.
                </p>
                <p>
                    I have a background in <strong>design</strong> and <strong>creative production</strong>, and I am always exploring new ways
                    to enhance user experiences. Outside of work, I enjoy making people laugh with
                    jokes on Twitter and engaging with my community through various social media platforms.
                </p>
                <p>
                    In my free time, you can find me working on personal creative projects, enjoying the outdoors, or honing my skills in
                    web development and design.
                </p>
            </div>

            {/* Portfolio section */}
            <div id="portfolio" className="portfolio-section">
                <h2>My Portfolio</h2>
                <p>Here are some of the projects I've worked on:</p>

                <div className="portfolio-items">
                    <div className="portfolio-item">
                        <h3>Project 1</h3>
                        <p>Description of project 1</p>
                    </div>
                    <div className="portfolio-item">
                        <h3>Project 2</h3>
                        <p>Description of project 2</p>
                    </div>
                    <div className="portfolio-item">
                        <h3>Project 3</h3>
                        <p>Description of project 3</p>
                    </div>
                </div>
            </div>

            {/* Contact section */}
            <div id="contact" className="contact-section">
                <h2>Contact Me</h2>
                <p>If you'd like to get in touch, feel free to contact me via the form below:</p>
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default App;
