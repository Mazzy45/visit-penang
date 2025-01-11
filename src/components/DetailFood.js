import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import './DetailFood.css';

function DetailFood({ items }) {
    const { name } = useParams();
    const navigate = useNavigate();
    const food = items.find((item) => item.name === name);


    if (!food) {
        return <p>Food not found! 🍽️</p>;
    }


    return (
        <div className="food-detail-page">
            {/* Item Name */}
            <header className="food-detail-header">
                <h1>{food.name}</h1>
            </header>


            {/* Image Slider */}
            <section className="food-detail-slider">
                <Swiper spaceBetween={10} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }} modules={[Autoplay]}>
                    {food.images.map((imgSrc, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider-image">
                                <img src={`${process.env.PUBLIC_URL}/${imgSrc}`} alt={`Slide ${index + 1}`}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>


            {/* Description and Details */}
            <section className="food-detail-card">
                <div className="description">
                    <h3>Description:</h3>
                    <p>{food.description}</p>
                </div>


                <div className="locations">
                    <h3>Most Popular Place</h3>
                    {food.locations && food.locations.length > 0 && (
                        <div className="location">
                            {food.locations.map((location, index) => (
                                <div key={index}>
                                    <strong>Stall Name:</strong>
                                    <p>{location.stallName}</p>
                                    <strong>Price: </strong>
                                    <p>{location.price}</p>
                                    <strong>Address:</strong>
                                    <p>{location.address}</p>
                                    <strong>Operating Hours:</strong>
                                    <p>{location.operatingHours}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>


            {/* Buttons */}
            <div className="food-detail-buttons">
                <button className="more-choices" onClick={() => window.open(food.moreInfoLink, "_blank")}>
                    Other Locations
                </button>
                <button className="back" onClick={() => navigate("/food")}>
                    Back to Food List
                </button>
            </div>
        </div>
    );
}


export default DetailFood;