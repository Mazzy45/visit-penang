import React, { useState } from "react";
import './FoodPage.css';

function FoodPage({ items }) {
    const [selectedCategory, setSelectedCategory] = useState("food");


    const filteredItems =
        selectedCategory === "favorites"
            ? items // Remove the filter for liked items
            : items.filter((item) => item.category === selectedCategory);


    return (
        <div className="food-page">
            {/* Header Section */}
            <header className="food-header">
                <h1>Food & Beverage in Penang</h1>
                <p>Discover the diverse tastes of Penang, one bite and sip at a time!</p>
            </header>


            {/* Filter Buttons */}
            <section className="filter-options">
                <button onClick={() => setSelectedCategory("food")}>Food</button>
                <button onClick={() => setSelectedCategory("dessert")}>Dessert</button>
                <button onClick={() => setSelectedCategory("drinks")}>Drinks</button>
            </section>


            {/* Food Cards Section */}
            <section className="food-categories">
                {filteredItems.map((item, index) => (
                    <article key={index} className="food-card">
                        <img src={item.image} alt={item.name} />
                        <div className="food-card-content">
                            <h3>{item.name}</h3>
                            <div className="food-card-buttons">
                                <button
                                    className="learn-more"
                                    onClick={() => (window.location.href = `/food/${item.name}`)}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}


export default FoodPage;
