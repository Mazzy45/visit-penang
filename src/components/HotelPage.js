import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HotelPage.css';

const HotelPage = () => {
    const [search, setSearch] = useState('');
    const [hotels] = useState([
        { id: 1, name: 'Sample Hotel', location: 'Sample Location' },
        { id: 2, name: 'Luxury Hotel', location: 'Luxury Location' },
        { id: 3, name: 'Budget Inn', location: 'Budget Location' },
        // Add more hotels here
    ]);

    const handleSearch = () => {
        // Implement search logic, the hotels list is already filtered on the fly
    };

    const filteredHotels = hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(search.toLowerCase()) ||
        hotel.location.toLowerCase().includes(search.toLowerCase())
    );

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
                {filteredHotels.map((hotel) => (
                    <Link to={`/details/${hotel.id}`} className="hotel-card" key={hotel.id}>
                        <h2>{hotel.name}</h2>
                        <p>Location: {hotel.location}</p>
                        <button>View Details</button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HotelPage;
