'use client'

import React, { useState } from 'react';
import { FaSearch, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Chatbot from './Chatbot.jsx';


const PGComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = useNavigate()
  function seeCan() {
    navigate("/candidates")
  }

  const pgData = [
    {
      id: 1,
      name: 'Ekta Apartments',
      description: 'Offers private rooms exclusively for girls, Semi-furnished, All the basic amenities nearby',
      contactNumber: '267689089778',
      location: 'Saket, South Delhi, Delhi',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    },
    {
      id: 2,
      name: 'Jay Studio Apartments',
      description: 'Offers shared rooms for boys with a total capacity of 12 occupants, Fully Furnished,  Laundry service and housekeeping also available',
      contactNumber: '726887201',
      location: ' Block 3B, Dev Nagar, Central Delhi',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      name: 'Millionaire Heritage',
      description: 'Offers shared rooms for both girls and boys,  Rent includes food service, laundry, housekeeping, electricity, and Wi-Fi',
      contactNumber: '1654537718',
      location: 'Andheri West, Mumbai',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 4,
        name: 'SAM Ladies PG',
        description: 'Available for girls,  no set curfew time for residents',
        contactNumber: '6276487198',
        location: 'Indira Nagar, Bangalore East',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 5,
        name: 'Shapphire Lake Side',
        description: 'Offers private rooms for both girls and boys, All the basic amenities nearby',
        contactNumber: '9876543212',
        location: 'Powai, Mumbai',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        id: 6,
        name: 'Langford Town',
        description: 'Offers shared rooms with 3 beds per room; Laundry, housekeeping, electricity, water, DTH, and Wi-Fi are included in the rent',
        contactNumber: '7263587429',
        location: 'Langford Town, Bangalore South',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    }
      
  ];

  const filteredPGs = pgData.filter(pg =>
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
    
    <div>
    <Nav/>
    <Chatbot/>
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
            <div key={pg.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={pg.image} alt={pg.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{pg.name}</h2>
                <p className="text-gray-600 mb-4">{pg.description}</p>
                <div className="flex items-center text-gray-700 mb-2">
                  <FaPhone className="mr-2" />
                  <span>{pg.contactNumber}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{pg.location}</span>
                </div>
              </div>
              <button onClick={seeCan}
                className="w-full bg-blue-500 text-white py-3 font-semibold transition duration-300 hover:bg-blue-600"
                aria-label={`Get more information about ${pg.name}`}
              >
                See other Candidates
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default PGComponent;
