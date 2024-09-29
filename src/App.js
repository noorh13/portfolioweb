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
                    Hello! I'm Noor Hasan, a passionate computational media major with a love for front end design and UI/UX.
                    With experience in multiple projects across web design and development,
                    I bring creativity and dedication to every project I work on.
                </p>
                <p>
                    I have a background in <strong>front end design</strong> and <strong>UI/UX</strong>, and I am always exploring new ways
                    to enhance user experiences. Outside of my projects, I enjoy spending time with family and friends.
                </p>
                <p>
                    In my free time, you can find me working on personal creative projects, enjoying the outdoors, or
                    spending time with my cat.
                </p>
            </div>

            {/* Portfolio section */}
            <div id="portfolio" className="portfolio-section">
                <h2>My Portfolio</h2>
                <p>Here are some of the projects I've worked on:</p>

                <div className="portfolio-items">
                    <div className="portfolio-item">
                        <h3>Parsing and Analyzing Historical English Texts (1500-1700)</h3>
                        <p>I helped developed a workflow to parse and analyze historical English texts (from the 1500s to
                            1700s) using the PACE ICE (Parsed Corpus of Early English Correspondence) framework. The
                            goal was to extract raw text from XML files containing structured linguistic data and then
                            apply the Levenshtein distance algorithm to compare textual differences and analyze language
                            variation over time. This project showcases my expertise in data parsing, natural language
                            processing (NLP), and the application of algorithmic techniques such as Levenshtein distance
                            for linguistic analysis.</p>
                        <p>Skilled used: Python, PACE ICE, Pandas, BeautifulSoup</p>
                    </div>
                    <div className="portfolio-item">
                        <h3>Atlanta Food Finder</h3>
                        <p>Atlanta Food Finder is a web application designed to help citizens of Atlanta find restaurants
                            and places to eat in their area. Built using Django and Google Maps, this application allows
                            users to search for restaurants based on location, view them on a map, read reviews, and get
                            directions. The application serves as a portfolio piece that showcases proficiency in web
                            development, API integration, and user-centered design.
                        </p>
                        <p>Skills used: Python, HTML, Javascript, CSS, DJango, Git, GitHub</p>
                    </div>
                    <div className="portfolio-item">
                        <h3>Portfolio Website</h3>
                        <p>I designed and developed a personal portfolio website to showcase my skills, experience, and
                            creative work. The website is fully responsive, ensuring a smooth user experience across
                            various devices, from desktops to mobile phones.The site is built using React.js, with
                            styling powered by CSS and deployed on GitHub Pages. This project demonstrates my
                            proficiency in front-end web development, including responsive design, UI/UX principles,
                            and component-based architecture.
                        </p>
                        <p>Skils used: Javascript, CSS, HTML, React, Git, GitHub</p>
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
