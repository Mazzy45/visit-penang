import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Custom stylesheet for homepage

const HomePage = () => {
    return (
        <div className="homepage-container">
            {/* Main Banner */}
            <section className="main-banner">
                <div className="banner-content">
                    <h1>Discover Penang True Colors</h1>
                </div>
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/ohwZM54vHMA"
                        frameBorder="0"
                        /*allowFullScreen*/
                        title="YouTube Video: Penang Tourist Spot"
                    ></iframe>
                </div>
            </section>


            {/* Introduction Section */}
            <section className="introduction">
                <h2>About Penang</h2>
                <div className="text-box">
                    <p>Penang, also known as the "Pearl of the Orient", is a charming island that has something for
                        everyone. Famous for its delicious food, Penang offers a mix of flavors from various cultures –
                        Chinese, Malay, Indian, and more. Beyond food, Penang is full of history, with places like
                        George Town, a UNESCO World Heritage Site, showcasing beautiful old buildings and vibrant street
                        art.

                        Nature lovers can explore lush hills, stunning beaches, and tranquil parks, while those looking
                        for adventure can try hiking, water sports, and other outdoor activities. Whether you’re here to
                        enjoy the food, relax, or discover the culture, Penang’s unique charm will make you feel right
                        at home.</p>
                </div>
            </section>

            {/* Featured Sections */}
            <section className="featured">
                <div className="featured-item hotels">
                    <h3>Hotels</h3>
                    <Link to="/hotels" className="explore-btn">Explore More</Link>
                </div>
                <div className="featured-item food">
                    <h3>Food</h3>
                    <Link to="/food" className="explore-btn">Explore More</Link>
                </div>
                <div className="featured-item shopping">
                    <h3>Shopping</h3>
                    <Link to="/shopping" className="explore-btn">Explore More</Link>
                </div>
                <div className="featured-item tourist-spots">
                    <h3>Tourist Spots</h3>
                    <Link to="/tourist-spots" className="explore-btn">Explore More</Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
