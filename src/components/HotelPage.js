import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HotelPage.css';

const HotelPage = () => {
    const [search, setSearch] = useState('');
    const handleSearch = () => {
        // Implement search logic
    };

    return (
        <div className="hotels-page">
            <header className="search-bar">
                <input
                    type="text"
                    placeholder="Search for hotels"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </header>
            <div className="hotel-list">
                <Link to="/details/1" className="hotel-card">
                    <h2>Sample Hotel</h2>
                    <p>Location: Sample Location</p>
                    <button>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default HotelPage;
