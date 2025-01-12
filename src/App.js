import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css'; // Import your CSS styles

// Import components
import HomePage from './components/HomePage';
import HotelPage from './components/HotelPage';
import FoodPage from './components/FoodPage';
import ShoppingPage from './components/ShoppingPage';
import SpotsPage from './components/SpotsPage';
import DetailHotel from './components/DetailHotel';  // Hotel detail page
import DetailFood from './components/DetailFood';    // Food detail page
import DetailShopping from './components/DetailShopping';  // Shopping detail page
import DetailSpots from './components/DetailSpots';  // Tourist Spots detail page
import foodData from './components/FoodData';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <Router>
        <ScrollToTop />
        <div>
          {/* Navigation Bar */}
          <header className="navbar">
            <nav>
              <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/logo-visit-penang.png`} alt="Visit Penang Logo" />
              </div>
              <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
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
            <Route path="/" element={<HomePage />} />
            <Route path="/hotels" element={<HotelPage />} />
            <Route path="/food" element={<FoodPage items={foodData} />} />
            <Route path="/shopping" element={<ShoppingPage />} />
            <Route path="/tourist-spots" element={<SpotsPage />} />
            <Route path="/hotels/:id" element={<DetailHotel/>}/>
            <Route path="/food/:name" element={<DetailFood items={foodData} />} />
            <Route path="/shopping/:mallId" element={<DetailShopping />} />
            <Route path="/spots/:id" element={<DetailSpots />} />
            <Route path="*" element={<HomePage />} /> {/* Catch-all route */}
          </Routes>

          {/* Footer */}
          <footer>
            <div className="footer-container">
              <div className="footer-left">
                <h4>About Us</h4>
                <p>At True Colours of Penang, we're passionate about showcasing the island’s vibrant culture, rich
                  heritage, and unique experiences. As a global tourism company, we collaborate with both local and
                  international partners to highlight Penang's multicultural identity and traditions. Our mission is to
                  help travelers explore the island’s hidden gems—from its historic streets and stunning architecture to
                  its natural beauty and delicious food scene.
                  Whether you're seeking adventure, relaxation, or cultural discovery, True Colours of Penang is
                  dedicated to providing unforgettable experiences and ensuring every visit leaves a lasting memory.</p>
              </div>
              <div className="footer-right">
                <h4>Contact Us</h4>
                <p><strong>True Colours of Penang</strong></p>
                <p>Level 3, Heritage Square, Jalan Warisan</p>
                <p>George Town, 10200 Penang, Malaysia</p>
                <p><strong>Phone:</strong> +604 987 6543</p>
                <p><strong>Fax:</strong> +604 987 1234</p>
                <p><strong>Email:</strong> <a
                    href="mailto:contact@truecoloursofpenang.com">contact@truecoloursofpenang.com</a></p>
                <p><strong>Operation Hours:</strong><br/>
                  Mon - Fri: 9:00 AM - 5:00 PM<br/>
                  Sat & Sun: Closed
                </p>
              </div>
              <img src={`${process.env.PUBLIC_URL}/logo-penang.png`} alt="Penang Logo" className="footer-logo"/>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 True Colours of Penang. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
  );
}

export default App;
