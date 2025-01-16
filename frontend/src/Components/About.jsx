'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import img from "../Images/logo.jpg"
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
// import Chatbot from './Chatbot.jsx'

import React, { useState } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const teamMembers = [
    {
      name: 'Pratham Jain',
      position: 'General Manager',
      bio: 'Pratham is a Student at MSIT',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Priyanshi Sharma',
      position: 'CEO',
      bio: 'Priyanshi is a Student at MSIT',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    },
    {
      name: 'Simrat Oberoi',
      position: 'Events Coordinator',
      bio: 'Simrat is a Student at MSIT',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav/>
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Welcome to EazyPG</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
          At EazyPG, we understand that finding a place to call home away from home can be a challenging journey. Our mission is to transform your stay into an experience of warmth, security, and community.
          </p>
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="Hotel Exterior" className="w-full h-96 object-cover rounded-lg shadow-md" />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="flex flex-cols-1 md:flex-cols-2 lg:flex-cols-4 gap-8 justify-center items-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.position}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                      <FaLinkedin size={24} />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-2">Email: info@eazy.com</p>
              <p className="text-gray-600 mb-2">Phone: 9876543210</p>
              <p className="text-gray-600 mb-4">Address: 123 Luxury Lane, Happy, State 12345</p>
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80" alt="Hotel Reception" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default About;
