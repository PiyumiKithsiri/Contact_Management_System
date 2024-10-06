// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../assets/css/dashboard.css'; // Optional: Import CSS for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="home-link">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
