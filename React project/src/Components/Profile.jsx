'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import img from "../Images/logo.jpg"
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Chatbot from './Chatbot.jsx'
import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react';
import { FaUser, FaPhone, FaLanguage, FaUtensils, FaPen } from 'react-icons/fa';
import { MdCake } from 'react-icons/md';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    contactNumber: '',
    motherTongue: '',
    foodPreference: '',
    wake: '',
    description: ''
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.age || formData.age < 18 || formData.age > 100) newErrors.age = 'Age must be between 18 and 100';
    if (!/^[6-9]\d{9}$/.test(formData.contactNumber)) newErrors.contactNumber = 'Invalid Indian contact number';
    if (!formData.motherTongue.trim()) newErrors.motherTongue = 'Mother tongue is required';
    if (!formData.foodPreference) newErrors.foodPreference = 'Food preference is required';
    if (!formData.wake) newErrors.wake = 'This field is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulating API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        // Reset form after successful submission
        handleReset();
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      gender: '',
      age: '',
      contactNumber: '',
      motherTongue: '',
      foodPreference: '',
      wake: '',
      description: ''
    });
    setProfilePicture(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Create User Profile</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Enter your details for roommate matching</p>
              </div>
            </div>
            <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex justify-center">
                  <div className="relative w-32 h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    {profilePicture ? (
                      <img src={profilePicture} alt="Profile" className="absolute w-32 h-32 text-gray-400 -left-1" />
                    ) : (
                      <svg className="absolute w-34 h-34 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    )}
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <label htmlFor="profile-picture" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                    Upload Picture
                    <input
                      type="file"
                      id="profile-picture"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                  {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                </div>
                <div className="relative">
                  <select
                    id="gender"
                    name="gender"
                    className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 ${errors.gender ? 'border-red-500' : ''}`}
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender}</p>}
                </div>
                <div className="relative">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 ${errors.age ? 'border-red-500' : ''}`}
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="age" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Age</label>
                  {errors.age && <p className="text-red-500 text-xs italic">{errors.age}</p>}
                </div>
                <div className="relative">
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 ${errors.contactNumber ? 'border-red-500' : ''}`}
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="contactNumber" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Contact Number (India)</label>
                  {errors.contactNumber && <p className="text-red-500 text-xs italic">{errors.contactNumber}</p>}
                </div>
                <div className="relative">
                  <input
                    id="motherTongue"
                    name="motherTongue"
                    type="text"
                    className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 ${errors.motherTongue ? 'border-red-500' : ''}`}
                    placeholder="Mother Tongue"
                    value={formData.motherTongue}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="motherTongue" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mother Tongue</label>
                  {errors.motherTongue && <p className="text-red-500 text-xs italic">{errors.motherTongue}</p>}
                </div>
                <div className="relative">
                  <fieldset>
                    <legend className="text-sm font-semibold text-gray-700 mb-2">Food Preferences</legend>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="foodPreference"
                          value="veg"
                          checked={formData.foodPreference === 'veg'}
                          onChange={handleInputChange}
                          className="form-radio text-green-500"
                        />
                        <span className="ml-2">Veg</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="foodPreference"
                          value="non-veg"
                          checked={formData.foodPreference === 'non-veg'}
                          onChange={handleInputChange}
                          className="form-radio text-red-500"
                        />
                        <span className="ml-2">Non-Veg</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="foodPreference"
                          value="both"
                          checked={formData.foodPreference === 'both'}
                          onChange={handleInputChange}
                          className="form-radio text-yellow-500"
                        />
                        <span className="ml-2">Both</span>
                      </label>
                    </div>
                  </fieldset>
                  {errors.foodPreference && <p className="text-red-500 text-xs italic">{errors.foodPreference}</p>}
                </div>
                <div className="relative">
                  <fieldset>
                    <legend className="text-sm font-semibold text-gray-700 mb-2">Waking Preferences</legend>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="wake"
                          value="veg"
                          checked={formData.wake === 'night'}
                          onChange={handleInputChange}
                          className="form-radio text-green-500"
                        />
                        <span className="ml-2">Night Owl</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="foodPreference"
                          value="early"
                          checked={formData.wake === 'early'}
                          onChange={handleInputChange}
                          className="form-radio text-red-500"
                        />
                        <span className="ml-2">Early Bird</span>
                      </label>
                      {/* <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="foodPreference"
                          value="both"
                          checked={formData.foodPreference === 'both'}
                          onChange={handleInputChange}
                          className="form-radio text-yellow-500"
                        />
                        <span className="ml-2">Both</span>
                      </label> */}
                    </div>
                  </fieldset>
                  {errors.wake && <p className="text-red-500 text-xs italic">{errors.wake}</p>}
                </div>
                <div className="relative">
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    className="peer placeholder-transparent h-auto w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Additional Information"
                    value={formData.description}
                    onChange={handleInputChange}
                  ></textarea>
                  <label htmlFor="description" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Additional Information</label>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 flex justify-center items-center w-full text-gray-700 px-4 py-3 rounded-md focus:outline-none hover:bg-gray-400 transition duration-300"
                  onClick={handleReset}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
