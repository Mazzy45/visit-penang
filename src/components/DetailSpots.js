import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";
import { topTouristSpots } from './TouristSpotsData';
import './DetailSpots.css';

const DetailSpots = () => {
    const { id } = useParams(); // Get the id from the route
    const touristSpot = topTouristSpots.find((spot) => spot.id === id);
    const swiperRef = useRef(null); // Create a ref for Swiper

    if (!touristSpot) {
        return (
            <div className="not-found">
                <h2>Oops! Tourist spot not found.</h2>
                <p>Return to the homepage to explore other attractions.</p>
            </div>
        );
    }

    const handleNextImage = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext(); // Move to the next slide
        }
    };

    const handlePreviousImage = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev(); // Move to the previous slide
        }
    };

    return (
        <div className="details-container">
            <h1 className="title">{touristSpot.name}</h1>

            {/* Image Slider with Auto and Manual Slide */}
            <section className="food-detail-slider">
                <button onClick={handlePreviousImage} className="slider-button">
                    ◀
                </button>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    modules={[Autoplay]}
                    ref={swiperRef} // Assign the ref
                >
                    {touristSpot.images.map((imgSrc, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider-image">
                                <img src={imgSrc} alt={`Slide ${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button onClick={handleNextImage} className="slider-button">
                    ▶
                </button>
            </section>

            <div className="details">
                <p className="description">{touristSpot.longDescription.paragraph1}</p>
                <p className="description">{touristSpot.longDescription.paragraph2}</p>

                <ul className="info-list">
                    <li><strong>Ticket Info:</strong></li>
                    <ul>
                        {touristSpot.ticketInfo.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))}
                    </ul>
                    <li><strong>Operating Days:</strong> {touristSpot.operatingDays}</li>
                    <li><strong>Operating Hours:</strong> {touristSpot.operatingHours}</li>
                    {touristSpot.contactNumber && (
                        <li><strong>Contact Number:</strong> {touristSpot.contactNumber}</li>
                    )}
                    <li><strong>Address:</strong> {touristSpot.address}</li>
                </ul>

                {touristSpot.websiteLink && (
                    <div className="website-link">
                        <a href={touristSpot.websiteLink} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailSpots;
