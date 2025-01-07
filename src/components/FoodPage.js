import React from 'react';
import { Link } from 'react-router-dom';
import './FoodPage.css';

function FoodPage() {
    return (
        <div>
            <section id="homepage-content">
                <div className="rectangle">
                    <Link to="/food">
                        <img src="/images/homepage_food.png" alt="Delicious Penang Food" />
                        <p>Food & Beverage</p>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default FoodPage;