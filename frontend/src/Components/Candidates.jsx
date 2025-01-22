import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import img from "../Images/logo.jpg";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Nav from './Nav.jsx';
import Footer from './Footer.jsx'
import Button from 'react-bootstrap/Button';
// import Chatbot from './Chatbot.jsx'
import PopUpNotification from './Pop.jsx';
import ChatApp from './ChatUser.jsx';
import { createPortal } from 'react-dom';


import React, { useState, useEffect } from 'react';
import { FaComments } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Candidates = () => {
  const [currentProfile, setCurrentProfile] = useState(1);
  const [direction, setDirection] = useState(null);
  let [swipeCount, setSwipeCount] = useState(0); // Add a new state to count the right swipes
  const navigate = useNavigate();

  function chatting() {
    // window.location.href =  'http://localhost:3000';
    navigate("/chatting");
  }

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
      if (swipeDirection === 'right') {
        setSwipeCount(swipeCount + 1); // Increment the swipe count on right swipe
        console.log(swipeCount)
      }
    }, 300);
  };

  useEffect(() => {
    if (swipeCount >= 3) { // Check if the swipe count is 3 or more
      
      const popup = document.createElement('div');
      popup.className = 'fixed top-0 left-0 right-0 h-12 bg-green-500 text-white text-lg text-center py-2';
popup.innerHTML = 'Matched';

document.body.appendChild(popup);
      setTimeout(() => {
        popup.remove();
        setSwipeCount(1); // Reset the swipe count
      }, 3000);
      
    }
    
  }, [swipeCount]);

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
    <div className="bg-white pt-12">
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav/>
      </header>
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
                    onClick={chatting}
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
      {/* <Button onClick={() => loginWithRedirect()} variant="primary">Login To Access</Button> */}
      
    </div>
  );
};

export default Candidates;