import React from 'react';
import { Link } from 'react-router-dom';
import { topHotels } from './HotelsData';
import './HotelPage.css';


const HotelPage = () => {
    return (
        <main>
            <h2 className="section-title">Best Hotels in Penang</h2>
            <p className="add-section"> Experience the elegance of Penang’s finest hotels, your perfect getaway.</p>
            <div className="hotels-list">
                {topHotels.map((hotel) => (
                    <div key={hotel.id} className="hotel-card">
                        <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="hotel-image"
                        />
                        <div className="hotel-info">
                            <h3 className="hotel-title">{hotel.name}</h3>
                            <p className="hotel-description">{hotel.description}</p>
                            <Link to={`/hotels/${hotel.id}`} className="hotel-button">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};


export default HotelPage;
