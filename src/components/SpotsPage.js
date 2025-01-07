import React from 'react';
import { Link } from 'react-router-dom';
import { topTouristSpots } from './TouristSpotsData';
import './SpotsPage.css';

const SpotsPage = () => {
    return (
        <main>
            <h2 className="section-title">Top 5 Tourist Attractions in Penang</h2>
            <div className="spots-list">
                {topTouristSpots.map((spot) => (
                    <div key={spot.id} className="spot-card">
                        <img
                            src={spot.image}
                            alt={spot.name}
                            className="spot-image"
                        />
                        <div className="spot-info">
                            <h3 className="spot-title">{spot.name}</h3>
                            <p className="spot-description">{spot.shortDescription}</p>
                            <Link to={`/spots/${spot.id}`} className="learn-more-button">
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default SpotsPage;
