import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailsHotel.css';

const DetailsHotel = () => {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        // Example API call to fetch hotel details based on hotelId
        fetch(`https://api.example.com/hotels/${hotelId}`)
            .then(response => response.json())
            .then(data => setHotel(data))
            .catch(error => console.error('Error fetching hotel data:', error));
    }, [hotelId]);

    if (!hotel) return <p>Loading...</p>;

    return (
        <div className="details-page">
            <h1>{hotel.name}</h1>
            <p>Location: {hotel.location}</p>
            <p>Price: RM {hotel.price} per night</p>
            <p>Rating: {'⭐'.repeat(hotel.rating)}</p>
            <p>Description: {hotel.description}</p>
            <Link to="/">Back to Hotels</Link>
        </div>
    );
};

export default DetailsHotel;
