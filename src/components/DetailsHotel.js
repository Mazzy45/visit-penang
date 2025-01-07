import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailsHotel.css';

const DetailsHotel = () => {
    const { hotelId } = useParams();

    return (
        <div className="details-page">
            <h1>Hotel Details for ID: {hotelId}</h1>
            <p>Hotel Name: Sample Hotel</p>
            <p>Location: Sample Location</p>
            <p>Price: RM XXX per night</p>
            <p>Rating: ⭐⭐⭐⭐</p>
            <p>Description: A sample hotel description goes here.</p>
            <Link to="/">Back to Hotels</Link>
        </div>
    );
};

export default DetailsHotel;
