import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HotelPage from './components/HotelPage';
import FoodPage from './components/FoodPage';
import ShoppingPage from './components/ShoppingPage';
import SpotsPage from './components/SpotsPage';
import DetailsHotel from './components/DetailsHotel';
import DetailsFood from './components/DetailsFood';
import DetailsShopping from './components/DetailsShopping';
import DetailsSpots from './components/DetailsSpots';

function App() {
  return (
      <Router>
        <div>
          {/* Header */}
          <header>
            <h1>Visit Penang</h1>
            <nav>
              <ul>
                <li><Link to="/hotels">Hotels</Link></li>
                <li><Link to="/food">Food</Link></li>
                <li><Link to="/shopping">Shopping</Link></li>
                <li><Link to="/spots">Tourist Spots</Link></li>
              </ul>
            </nav>
          </header>

          {/* Main content */}
          <Routes>
            <Route path="/" element={<HotelPage />} />
            <Route path="/hotels" element={<HotelPage />} />
            <Route path="/food" element={<FoodPage />} />
            <Route path="/shopping" element={<ShoppingPage />} />
            <Route path="/spots" element={<SpotsPage />} />

            {/* Dynamic Details Routes */}
            <Route path="/details/hotel/:id" element={<DetailsHotel />} />
            <Route path="/details/food/:id" element={<DetailsFood />} />
            <Route path="/details/shopping/:id" element={<DetailsShopping />} />
            <Route path="/details/spots/:id" element={<DetailsSpots />} />
          </Routes>

          {/* Footer */}
          <footer>
            <p>&copy; 2025 Visit Penang. All Rights Reserved.</p>
          </footer>
        </div>
      </Router>
  );
}

export default App;
