import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { topHotels } from './HotelsData';
import './DetailHotel.css';


const DetailHotel = () => {
    const { id } = useParams(); // Get the id from the route
    const theHotel = topHotels.find((hotel) => hotel.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    if (!theHotel) {
        return (
            <div className="not-found">
            <h2>Oops! Hotel not found.</h2>
        <p>Return to the <a href="/">homepage</a> to explore other attractions.</p>
    </div>
    );
    }


    const sliderContent = theHotel.gallery;


    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === sliderContent.length - 1 ? 0 : prevIndex + 1
        );
    };


    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? sliderContent.length - 1 : prevIndex - 1
        );
    };


    return (
        <div className="details-container">
            <h1 className="title">{theHotel.name}</h1>


            <div className="slider">
                <button onClick={handlePreviousImage} className="slider-button prev-button">
                    ◀
                </button>


                <img
                    src={sliderContent[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="slider-image"
                />


                <button onClick={handleNextImage} className="slider-button next-button">
                    ▶
                </button>
            </div>


            <div className="details">
                <p className="description">{theHotel.intro}</p>
                <p className="description">{theHotel.longDescription.paragraph1}</p>
                <p className="description">{theHotel.longDescription.paragraph2}</p>
                <ul className="info-list">
                    <li><strong>Address:</strong> {theHotel.address}</li>
                </ul>


                {theHotel.websiteLink && (
                    <div className="website-link">
                        <a href={theHotel.websiteLink} target="_blank" rel="noopener noreferrer">
                            🌐 Visit Official Website
                        </a>
                    </div>
                )}
            </div>


            <div className="map-link">
                <button
                    onClick={() => window.open(theHotel.mapLink, "_blank")}
                    className="map-link-button"
                >
                    🗺 View on Google Maps
                </button>
            </div>
        </div>
    );
};


export default DetailHotel;
