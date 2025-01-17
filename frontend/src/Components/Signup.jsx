"use client"
import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import img from "../Images/logo.jpg"
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function login() {
      navigate("/login");
  }

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Signup failed:", errorData);
        alert(`Signup failed: ${errorData.message || "Unknown error"}`);
        return;
      }

      const data = await res.json();
      console.log("Signup successful:", data);
      alert("Signup successful!");
  
    } catch (error) {
      console.error("An error occurred during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }

    


    const data = await res.json();
    console.log(data, {message: "User signup successfull in the backend too!!"});
    

    const newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    if (!username) {
      newErrors.username = 'Username is required';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted');
    }
  };

  const getPasswordStrength = (password) => {
    if (password.length < 8) return 'Weak';
    if (password.length < 12) return 'Medium';
    return 'Strong';
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-lg p-6 sm:p-10">
    
    <div>
      <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
        Create your account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or{' '}
        <button
          onClick={login}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign in to your account
        </button>
      </p>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
        <div>
            <input
              id="username"
              type="text"
              autoComplete="username"
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                errors.username ? 'border-red-300' : 'border-gray-300'
              } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder="Email address"
              onChange={handleChange}
            />
          </div>
                
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                errors.password ? 'border-red-300' : 'border-gray-300'
              } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
              placeholder="Password"
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-sm leading-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign up
          </button>
        </div>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div>
            <a
              href="#"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FaGoogle className="mr-2" />
              Google
            </a>
          </div>
          <div>
            <a
              href="#"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="hidden lg:block">
      <img src={img} alt="Sign Up Illustration" className="w-full h-auto rounded-xl shadow-lg" />
    </div>
  </div>
</div>


  );
};

export default Signup;
