import React, { useState } from 'react';
import './DetailsFood.css';

function DetailsFood() {
    const [selectedCategory, setSelectedCategory] = useState("food");

    const items = [
        {
            name: "Char Kway Teow",
            image: "/images/char_kway_teow.jpg",
            description: "A popular Penang street food with flat noodles stir-fried with prawns, cockles, and bean sprouts.",
            price: "RM7.50",
            address: "Lebuh Kimberley, George Town",
            category: "food"
        },
        {
            name: "Chendol",
            image: "/images/chendol.jpg",
            description: "A refreshing dessert with shaved ice, coconut milk, and green pandan noodles.",
            price: "RM3.00",
            address: "Jalan Penang, George Town",
            category: "dessert"
        },
        {
            name: "Nutmeg Juice",
            image: "/images/nutmeg_juice.jpg",
            description: "A unique Penang drink made from nutmeg fruit, known for its cooling properties.",
            price: "RM5.00",
            address: "Batu Ferringhi Night Market",
            category: "drinks"
        }
    ];

    const filteredItems = items.filter((item) => item.category === selectedCategory);

    return (
        <div>
            <header className="food-header">
                <h1>Food & Beverage in Penang</h1>
                <p>Discover the diverse tastes of Penang, one bite and sip at a time!</p>
            </header>
            <section className="filter-options">
                <button onClick={() => setSelectedCategory("food")}>Food</button>
                <button onClick={() => setSelectedCategory("dessert")}>Dessert</button>
                <button onClick={() => setSelectedCategory("drinks")}>Drinks</button>
            </section>
            <section id="food-categories">
                {filteredItems.map((item, index) => (
                    <article key={index} className="food-item">
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name} />
                        <p>{item.description}</p>
                        <p><strong>Price:</strong> {item.price}</p>
                        <p><strong>Address:</strong> {item.address}</p>
                    </article>
                ))}
            </section>
        </div>
    );
}

export default DetailsFood;