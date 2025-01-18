import React, { useState } from "react";
import { FaWifi, FaUtensils, FaTshirt, FaParking, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdSecurity, MdCleaningServices } from "react-icons/md";

const PGDetailsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pgData = {
    name: "Sunshine PG Accommodations",
    description: "Luxury PG accommodation with modern amenities and comfortable living spaces",
    price: "₹12,000/month",
    location: "123 Park Street, Bangalore",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
    ],
    amenities: [
      { icon: <FaWifi />, name: "High-Speed WiFi" },
      { icon: <FaUtensils />, name: "3 Times Meals" },
      { icon: <FaTshirt />, name: "Laundry Service" },
      { icon: <FaParking />, name: "Parking Available" },
      { icon: <MdSecurity />, name: "24/7 Security" },
      { icon: <MdCleaningServices />, name: "Room Cleaning" }
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === pgData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? pgData.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800">PG Finder</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">PGs</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{pgData.name}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={pgData.images[currentImageIndex]}
              alt={`PG Image ${currentImageIndex + 1}`}
              className="w-full h-[500px] object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af";
              }}
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <FaChevronLeft className="text-gray-800 text-xl" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <FaChevronRight className="text-gray-800 text-xl" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {pgData.images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    currentImageIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Details</h2>
              <p className="text-gray-600 mb-4">{pgData.description}</p>
              <p className="text-xl font-semibold text-gray-800">{pgData.price}</p>
              <p className="text-gray-600">{pgData.location}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Amenities</h2>
              <div className="grid grid-cols-2 gap-6">
                {pgData.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-blue-600 text-xl">{amenity.icon}</div>
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGDetailsPage;