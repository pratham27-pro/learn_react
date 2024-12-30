import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const PopUpNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50 flex items-center justify-between"
      role="alert"
      aria-live="polite"
    >
      <span className="font-semibold">Matched</span>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close notification"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default PopUpNotification;
