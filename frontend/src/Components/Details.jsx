import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaParking,
  FaUtensils,
  FaTv,
  FaSnowflake,
} from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdSecurity, MdCleaningServices, MdPets } from "react-icons/md";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";

const PGDetailsPage = () => {
  const { id } = useParams(); // Get PG ID from the URL
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  const pgData = [
    {
      id: "1",
      name: "Sunshine PG",
      location: "123 Main Street, Silicon Valley, CA",
      rating: 4.8,
      reviews: 42,
      description:
        "A modern and well-maintained PG offering fully furnished rooms with essential amenities. Located near public transport and major landmarks.",
      price: { monthlyRent: 8000, securityDeposit: 10000 },
      images: ["https://images.unsplash.com/photo-1600054648630-e10e710825f6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1586836930332-6a1e2cb08e78?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
      ],
      amenities: [
        { icon: <FaWifi />, label: "Free WiFi" },
        { icon: <FaParking />, label: "Parking" },
        { icon: <MdCleaningServices />, label: "Cleaning Services" },
      ],
    },
    {
      id: "2",
      name: "Greenfield Residency",
      location: "456 Elm Street, Bangalore, India",
      rating: 4.5,
      reviews: 30,
      description:
        "Greenfield Residency offers a tranquil environment with spacious rooms, free WiFi, and convenient access to shopping areas and parks.",
      price: { monthlyRent: 7500, securityDeposit: 8000 },
      images: ["https://images.unsplash.com/photo-1530629013299-6cb10d168419?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1600494448655-ae58f58bb945?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1576056377266-1513fa1bc0b1?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      amenities: [
        { icon: <FaSnowflake />, label: "Air Conditioning" },
        { icon: <MdPets />, label: "Pet Friendly" },
        { icon: <FaUtensils />, label: "In-House Dining" },
      ],
    },
    {
      id: "3",
      name: "Urban Heights PG",
      location: "789 Maple Avenue, New York, USA",
      rating: 4.7,
      reviews: 50,
      description:
        "Premium PG with a modern vibe, offering a gym, free WiFi, and proximity to educational institutions and transit hubs.",
      price: { monthlyRent: 9000, securityDeposit: 12000 },
      images: ["https://images.unsplash.com/photo-1612152605347-f93296cb657d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1463620910506-d0458143143e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1552558636-f6a8f071c2b3?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      amenities: [
        { icon: <FaTv />, label: "Smart TV" },
        { icon: <FaParking />, label: "Covered Parking" },
        { icon: <FaSnowflake />, label: "Air Conditioning" },
      ],
    },
    {
      id: "4",
      name: "Serene Stay PG",
      location: "567 Pine Road, Pune, India",
      rating: 4.6,
      reviews: 38,
      description:
        "Experience a peaceful and homely environment at Serene Stay PG. Fully furnished rooms with round-the-clock security and easy access to IT hubs.",
      price: { monthlyRent: 8500, securityDeposit: 10000 },
      images: ["https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1543490791-db8323d8e5b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      ],
      amenities: [
        { icon: <FaWifi />, label: "Free WiFi" },
        { icon: <MdSecurity />, label: "24/7 Security" },
        { icon: <MdPets />, label: "Pet Friendly" },
      ],
    },
    {
      id: "5",
      name: "Blue Horizon PG",
      location: "789 Ocean Drive, Miami, USA",
      rating: 4.9,
      reviews: 65,
      description:
        "Blue Horizon PG is the ideal choice for a coastal living experience. Enjoy ocean views, premium amenities, and a relaxing ambiance close to the beach.",
      price: { monthlyRent: 9500, securityDeposit: 12000 },
      images: ["https://images.unsplash.com/flagged/photo-1556438758-1d61c8c65409?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1503278501277-e50457741130?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1529518189823-e18dc00cfd0a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      amenities: [
        { icon: <FaUtensils />, label: "In-House Restaurant" },
        { icon: <FaWifi />, label: "Free WiFi" },
        { icon: <FaSnowflake />, label: "Ocean Breeze AC" },
      ],
    },
    {
      id: "6",
      name: "Metro Living PG",
      location: "321 High Street, Delhi, India",
      rating: 4.4,
      reviews: 29,
      description:
        "Metro Living PG offers affordable comfort in the bustling heart of Delhi. Ideal for students and professionals looking for convenience and connectivity.",
      price: { monthlyRent: 7000, securityDeposit: 9000 },
      images: [ "https://images.unsplash.com/photo-1524061614234-8449637d36ce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1462530260150-162092dbf011?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1522198428577-adf2d374b05b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      amenities: [
        { icon: <FaParking />, label: "Parking" },
        { icon: <MdCleaningServices />, label: "Weekly Cleaning" },
        { icon: <FaWifi />, label: "High-Speed WiFi" },
      ],
    },
  ];
  

  const pg = pgData.find((pg) => pg.id === id);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === (pg?.images.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? (pg?.images.length || 1) - 1 : prev - 1
    );
  };

  if (!pg) {
    return <div>PG not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="h-16 bg-white shadow-sm"></div>

      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carousel */}
          <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden">
            <div className="relative h-full">
              {pg.images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <BsChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <BsChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Details */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h1 className="text-3xl font-bold">{pg.name}</h1>
            <div className="flex items-center mt-2 text-gray-600">
              <FaMapMarkerAlt className="mr-2" />
              {pg.location}
            </div>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-400" />
              <span className="ml-1">{pg.rating}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-gray-600">{pg.reviews} reviews</span>
            </div>
            <p
              className={`mt-4 ${
                isDescExpanded ? "" : "line-clamp-3"
              } text-gray-600`}
            >
              {pg.description}
            </p>
            <button
              onClick={() => setIsDescExpanded(!isDescExpanded)}
              className="text-blue-600 mt-2 hover:underline"
            >
              {isDescExpanded ? "Show less" : "Read more"}
            </button>

            {/* Price Details */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Price Details</h2>
              <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
                <div>
                  <p className="text-sm">Monthly Rent</p>
                  <p className="font-bold text-xl">₹{pg.price.monthlyRent}</p>
                </div>
                <div>
                  <p className="text-sm">Security Deposit</p>
                  <p className="font-bold text-xl">₹{pg.price.securityDeposit}</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Amenities</h2>
              <ul className="flex flex-wrap gap-4 mt-2">
                {pg.amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    {amenity.icon}
                    {amenity.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-between">
            <Link
              to="/candidates"
              className="bg-blue-600 text-white p-2 rounded-lg w-full mr-2 text-center block"
            >
              View Interested Candidates
            </Link>
              <button
                className="bg-green-600 text-white p-2 rounded-lg w-full ml-2"
                onClick={() => alert("Contacting the owner...")}
              >
                Contact the Owner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGDetailsPage;


// import { useState } from "react";
// import { FaMapMarkerAlt, FaWifi, FaParking, FaUtensils, FaTv, FaSnowflake } from "react-icons/fa";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { MdSecurity, MdCleaningServices, MdPets } from "react-icons/md";
// import { FaStar } from "react-icons/fa";
// import Nav from "./Nav.jsx";

// const PGDetailsPage = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isDescExpanded, setIsDescExpanded] = useState(false);

//   const images = [
//     "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
//     "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
//     "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
//     "https://images.unsplash.com/photo-1484154218962-a197022b5858"
//   ];

//   const amenities = [
//     { icon: <FaWifi />, name: "Free WiFi" },
//     { icon: <FaParking />, name: "Parking" },
//     { icon: <FaUtensils />, name: "Meals Available" },
//     { icon: <FaTv />, name: "TV Room" },
//     { icon: <FaSnowflake />, name: "AC Rooms" },
//     { icon: <MdSecurity />, name: "24/7 Security" },
//     { icon: <MdCleaningServices />, name: "Cleaning Service" },
//     { icon: <MdPets />, name: "Pet Friendly" }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar placeholder */}
//       <Nav/>
//       <div className="h-16 bg-white shadow-sm"></div>

//       {/* Main container */}
//       <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Carousel section */}
//           <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden">
//             <div className="relative h-full">
//               {images.map((img, index) => (
//                 <div
//                   key={index}
//                   className={absolute w-full h-full transition-opacity duration-500 ${
//                     currentSlide === index ? "opacity-100" : "opacity-0"
//                   }}
//                 >
//                   <img
//                     src={img}
//                     alt={Slide ${index + 1}}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Navigation arrows */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
//               aria-label="Previous slide"
//             >
//               <BsChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
//               aria-label="Next slide"
//             >
//               <BsChevronRight className="w-6 h-6" />
//             </button>

//             {/* Dot indicators */}
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={w-2 h-2 rounded-full transition-all ${
//                     currentSlide === index ? "bg-white w-4" : "bg-white/50"
//                   }}
//                   aria-label={Go to slide ${index + 1}}
//                 ></button>
//               ))}
//             </div>
//           </div>

//           {/* Details section */}
//           <div className="bg-white rounded-xl p-6 shadow-sm">
//             <div className="space-y-6">
//               {/* Header */}
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900">Sunshine PG Accommodation</h1>
//                 <div className="flex items-center mt-2 text-gray-600">
//                   <FaMapMarkerAlt className="mr-2" />
//                   <span>123 Main Street, Silicon Valley, CA</span>
//                 </div>
//                 {/* <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                   4.5/5 Rating
//                 </div> */}
//                 <div className="flex items-center mt-2">
//                   <div className="flex items-center text-yellow-400">
//                     <FaStar />
//                     <span className="ml-1 text-gray-900">4.8</span>
//                   </div>
//                   <span className="mx-2 text-gray-300">|</span>
//                   <span className="text-gray-600">42 reviews</span>
//                 </div>
//               </div>

//               {/* Description */}
//               {/* <div>
//                 <h2 className="text-xl font-semibold text-gray-900 mb-2">Description</h2>
//                 <p className="text-gray-600 leading-relaxed">
//                   Modern and comfortable paying guest accommodation featuring well-furnished rooms
//                   with all essential amenities. Located in a prime area with easy access to public
//                   transportation, shopping centers, and entertainment venues.
//                 </p>
//               </div> */}

//               <div className="border-t border-gray-200 pt-6">
//               <h2 className="text-xl font-semibold mb-4">About this PG</h2>
//               <div className={text-gray-600 ${isDescExpanded ? "" : "line-clamp-3"}}>
//                 Experience comfortable living in our well-maintained PG accommodation. We offer fully furnished rooms with modern amenities and a peaceful environment perfect for students and working professionals. Our location provides easy access to public transport, markets, and educational institutions.
//               </div>
//               <button
//                 onClick={() => setIsDescExpanded(!isDescExpanded)}
//                 className="text-blue-600 mt-2 hover:underline"
//               >
//                 {isDescExpanded ? "Show less" : "Read more"}
//               </button>
//             </div>

//               {/* Amenities */}
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {amenities.map((amenity, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center space-x-2 text-gray-600"
//                     >
//                       <span className="text-blue-600">{amenity.icon}</span>
//                       <span>{amenity.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Price details */}
//               <div className="space-y-3">
//                 <h2 className="text-xl font-semibold text-gray-900">Price Details</h2>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Monthly Rent</span>
//                     <span className="text-2xl font-bold text-gray-900">₹8000</span>
//                   </div>
//                   <div className="flex justify-between items-center mt-2">
//                     <span className="text-gray-600">Security Deposit</span>
//                     <span className="text-gray-900">₹10,000</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Action buttons */}
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                   Contact Owner
//                 </button>
//                 <button className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
//                   View Interested Candidates
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PGDetailsPage;
