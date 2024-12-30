"use client"
import React, { useState, useEffect } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { Routes, Route, useNavigate, Link } from "react-router-dom";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate Botpress integration
    const botpressScript = document.createElement('script');
    botpressScript.src = 'https://www.chatbase.co/chatbot-iframe/mAV9FWwJSjTaX3yPM6RXy';
    botpressScript.async = true;
    document.body.appendChild(botpressScript);

    return () => {
      document.body.removeChild(botpressScript);
    };
  }, []);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const goto = () => {
    window.location.href = "https://www.chatbase.co/chatbot-iframe/mAV9FWwJSjTaX3yPM6RXy";
  }

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      setIsTyping(true);

      // Simulate bot response
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'Welcome to EazyPG. How can I assist you further?', sender: 'bot' }
        ]);
      }, 1500);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={goto}
          className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 animate-bounce"
          aria-label="Open chat"
        >
          <FaRobot className="text-2xl" />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden">
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button
              onClick={handleIconClick}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-3/4 p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <BsThreeDots className="text-xl animate-pulse" />
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;