'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import img from "../Images/logo.jpg"
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import { useAuth0 } from '@auth0/auth0-react'
import Button from 'react-bootstrap/Button';
import Chatbot from './Chatbot.jsx'


import React, { useState, useEffect } from 'react';
import { FaComments } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Candidates = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  const [direction, setDirection] = useState(null);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const profiles = [
    {
      id: 1,
      name: 'Sarah Johnson',
      description: 'Adventure seeker and coffee enthusiast. Love to travel and explore new cultures.',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      description: 'Tech geek and foodie. Always up for trying new restaurants and cooking experiments.',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      description: 'Yoga instructor and nature lover. Passionate about mindfulness and sustainable living.',
      photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }
  ];

  const handleSwipe = (swipeDirection) => {
    setDirection(swipeDirection);
    setTimeout(() => {
      setCurrentProfile((prevProfile) => (prevProfile + 1) % profiles.length);
      setDirection(null);
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handleSwipe('left');
      } else if (e.key === 'ArrowRight') {
        handleSwipe('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const profile = profiles[currentProfile];

  return (
    <div>
    <Nav/>
    <Chatbot/>
    {isAuthenticated ? (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <AnimatePresence>
            <motion.div
              key={profile.id}
              initial={{ x: direction === 'right' ? -300 : direction === 'left' ? 300 : 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              aria-live="polite"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2" tabIndex="0">
                  {profile.name}
                </h2>
                <p className="text-gray-600 mb-4" tabIndex="0">
                  {profile.description}
                </p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                  aria-label={`Chat with ${profile.name}`}
                >
                  <FaComments className="mr-2" />
                  Chat
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => handleSwipe('left')}
              className="bg-red-500 text-white px-6 py-3 rounded-full mr-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
              aria-label="Swipe left"
            >
              Swipe Left
            </button>
            <button
              onClick={() => handleSwipe('right')}
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
              aria-label="Swipe right"
            >
              Swipe Right
            </button>
          </div>
        </div>
      </div>
    ) : (<Button onClick={() => loginWithRedirect()} variant="primary">Login To Access</Button>)}
      
    </div>
  );
};

export default Candidates;
