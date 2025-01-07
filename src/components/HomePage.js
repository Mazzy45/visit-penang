// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Custom stylesheet for homepage

const HomePage = () => {
    return (
        <div>
            {/* Main Banner */}
            <section className="main-banner">
                <h1>Welcome to Visit Penang</h1>
                <p>Discover the beauty of Penang, Malaysia</p>
                <img src="path-to-banner-image.jpg" alt="Penang Landscape" />
            </section>

            {/* Introduction Section */}
            <section className="introduction">
                <h2>About Penang</h2>
                <p>Penang, known as the "Pearl of the Orient", is a must-visit destination for its rich culture, amazing food, and beautiful landscapes. Whether you want to explore nature, indulge in local delicacies, or enjoy family-friendly activities, Penang has something for everyone.</p>
            </section>

            {/* Featured Sections */}
            <section className="featured">
                <div className="featured-item">
                    <h3>Hotels</h3>
                    <p>Find the best hotels in Penang.</p>
                    <Link to="/hotels" className="explore-btn">Explore More</Link>
                </div>
                <div className="featured-item">
                    <h3>Food</h3>
                    <p>Indulge in Penang’s world-famous cuisine.</p>
                    <Link to="/food" className="explore-btn">Explore More</Link>
                </div>
                <div className="featured-item">
                    <h3>Shopping</h3>
                    <p>Shop for unique items and souvenirs.</p>
                    <Link to="/shopping" className="explore-btn">Explore More</Link>
                </div>
                <div className="featured-item">
                    <h3>Tourist Spots</h3>
                    <p>Visit the top attractions in Penang.</p>
                    <Link to="/tourist-spots" className="explore-btn">Explore More</Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
