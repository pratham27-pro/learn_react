'use client'

import React, { useState } from 'react';
import { FaSearch, FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

const PGComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const pgData = [
    {
      id: 1,
      name: 'Sunshine PG',
      location: '123 Main Street, Silicon Valley, CA',
      rating: 4.8,
      reviews: 42,
      description:
        'A modern PG offering fully furnished rooms with essential amenities. Located near public transport and major landmarks.',
      price: { monthlyRent: 8000, securityDeposit: 10000 },

      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Greenfield Residency',
      location: '456 Elm Street, Bangalore, India',
      rating: 4.5,
      reviews: 30,
      description:
        'Greenfield Residency offers spacious rooms, free WiFi, and convenient access to shopping areas and parks.',
      price: { monthlyRent: 7500, securityDeposit: 8000 }, image: 'https://plus.unsplash.com/premium_photo-1683120852623-143817d6400b?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Urban Heights PG',
      location: '789 Maple Avenue, New York, USA',
      rating: 4.7,
      reviews: 50,
      description:
        'Premium PG with a modern vibe, offering a gym, free WiFi, and proximity to educational institutions and transit hubs.',
      price: { monthlyRent: 9000, securityDeposit: 12000 }, image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Serene Stay PG',
      location: '567 Pine Road, Pune, India',
      rating: 4.6,
      reviews: 38,
      description:
        'Experience a peaceful and homely environment at Serene Stay PG. Fully furnished rooms with round-the-clock security and easy access to IT hubs.',
      price: { monthlyRent: 8500, securityDeposit: 10000 }, image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=3058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Blue Horizon PG',
      location: '789 Ocean Drive, Miami, USA',
      rating: 4.9,
      reviews: 65,
      description:
        'Blue Horizon PG is the ideal choice for a coastal living experience. Enjoy ocean views, premium amenities, and a relaxing ambiance close to the beach.',
      price: { monthlyRent: 9500, securityDeposit: 12000 }, image: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      name: 'Metro Living PG',
      location: '321 High Street, Delhi, India',
      rating: 4.4,
      reviews: 29,
      description:
        'Metro Living PG offers affordable comfort in the bustling heart of Delhi. Ideal for students and professionals looking for convenience and connectivity.',
      price: { monthlyRent: 7000, securityDeposit: 9000 }, image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const filteredPGs = pgData.filter((pg) =>
    pg.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setErrorMessage('');
    if (term && !filteredPGs.length) {
      setErrorMessage('No PGs found for the given location.');
    }
  };

  return (
    <div className="bg-white pt-12">
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav/>
      </header>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">PG Finder</h1>

          <div className="mb-8 relative">
            <input
              type="text"
              placeholder="Search PGs by location"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              aria-label="Search PGs by location"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {errorMessage && (
            <div className="text-red-500 mb-4 text-center" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPGs.map((pg) => (
              <div
                key={pg.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={pg.image}
                  alt={pg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {pg.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{pg.description}</p>
                  <div className="flex items-center text-yellow-500 mb-2">
                    <FaStar className="mr-1" />
                    <span>{pg.rating} ({pg.reviews} reviews)</span>
                  </div>
                  <div className="text-gray-600 mb-2">
                    <strong>Rent:</strong> ₹{pg.price.monthlyRent} / month
                  </div>
                  <div className="text-gray-600 mb-4">
                    <strong>Security Deposit:</strong> ₹{pg.price.securityDeposit}
                  </div>
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaPhone className="mr-2" />
                    <span>{pg.contactNumber || 'N/A'}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{pg.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/details/${pg.id}`)}
                  className="w-full bg-blue-500 text-white py-3 font-semibold transition duration-300 hover:bg-blue-600"
                  aria-label={`Get more information about ${pg.name}`}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PGComponent;
