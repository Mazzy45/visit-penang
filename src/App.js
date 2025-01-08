import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import your CSS styles

// Import components
import HomePage from './components/HomePage';
import HotelPage from './components/HotelPage';
import FoodPage from './components/FoodPage';
import ShoppingPage from './components/ShoppingPage';
import SpotsPage from './components/SpotsPage';
import DetailsHotel from './components/DetailsHotel';  // Hotel detail page
import DetailsFood from './components/DetailsFood';    // Food detail page
import DetailsShopping from './components/DetailsShopping';  // Shopping detail page
import DetailsSpots from './components/DetailsSpots';  // Tourist Spots detail page

function App() {
  return (
      <Router>
        <div>
          {/* Navigation Bar */}
          <header className="navbar">
            <nav>
              <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/logo-visit-penang.png`} alt="Visit Penang Logo"/>
              </div>
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hotels">Hotels</Link></li>
                <li><Link to="/food">Food</Link></li>
                <li><Link to="/shopping">Shopping</Link></li>
                <li><Link to="/tourist-spots">Tourist Spots</Link></li>
              </ul>
            </nav>
          </header>


          {/* Routes for different pages */}
          <Routes>
            {/* HomePage */}
            <Route path="/" element={<HomePage/>}/>

            {/* Detailed Pages */}
            <Route path="/hotels" element={<HotelPage/>}/>
            <Route path="/food" element={<FoodPage/>}/>
            <Route path="/shopping" element={<ShoppingPage/>}/>
            <Route path="/tourist-spots" element={<SpotsPage/>}/>

            {/* Detail Pages */}
            <Route path="/hotels/:hotelId" element={<DetailsHotel/>}/> {/* Dynamic route for Hotel */}
            <Route path="/food/:foodId" element={<DetailsFood/>}/> {/* Dynamic route for Food */}
            <Route path="/shopping/:mallId" element={<DetailsShopping/>}/> {/* Dynamic route for Shopping */}
            <Route path="/spots/:id" element={<DetailsSpots/>}/> {/* Dynamic route for Tourist Spots */}
          </Routes>

          {/* Footer */}
          <footer>
            <div className="footer-container">
              <div className="footer-left">
                <p>About Us</p>
              </div>
              <div className="footer-right">
                <p>Contact Us</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 True Colors of Penang. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
  );
}

export default App;
