// import React , { useState, useEffect }from 'react'
// import { slide2,slide3,slide5 } from '../assets/Image';

// function Carosel() {
//     const slides = [
//         // { id: 1, image:slide1, text: "Slide 1" },
//         { id: 1, image:slide2, text: "Slide 1" },
//         { id: 2, image:slide3, text: "Slide 2" },
//         // { id: 4, image:slide4, text: "Slide 3" },
//         { id: 3, image:slide5, text: "Slide 3" },
//         // { id: 6, image:slide6, text: "Slide 3" },
//         // { id: 7, image:slide7, text: "Slide 3" },
//       ];
    
//       const [currentIndex, setCurrentIndex] = useState(0);

//       useEffect(() => {
//         const interval = setInterval(() => {
//           setCurrentIndex((prevIndex) =>
//             prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//           );
//         }, 3000); // Change slide every 3 seconds
//         return () => clearInterval(interval); // Cleanup on unmount
//       }, [slides.length]);
    
//       return (
//         <div className="relative lg:w-full sm:w-full mx-auto overflow-hidden ">
//           <div
//             className="flex transition-transform duration-500 "
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           >
//             {slides.map((slide) => (
//               <div
//                 key={slide.id}
//                 className="min-w-full h-96 flex items-center justify-center bg-gray-200"
//               >
//                 <img
//                   src={slide.image}
//                   alt={slide.text}
//                   className="object-cover w-full h-full"
//                 />
//                 {/* <p className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
//                   {slide.text}
//                 </p> */}
//                    <button className="absolute justify-center bottom-8 text-white text-xl font-bold bg-black bg-opacity-50 px-2 py-2 rounded w-28 animate-flash">
//                   Shop
//                 </button> 
//               </div>
//             ))}
//           </div>
//           {/* Indicators */}
//           <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   index === currentIndex
//                     ? "bg-white"
//                     : "bg-gray-400 hover:bg-white transition"
//                 }`}
//               ></button>
//             ))}
//           </div>
//         </div>
//       );
//     };
// export default Carosel

import React, { useState, useEffect } from "react";
import { slide2, slide3, slide5 } from "../assets/Image";

function Carosel() {
  const slides = [
    { id: 1, image: slide2, text: "Slide 1" },
    { id: 2, image: slide3, text: "Slide 2" },
    { id: 3, image: slide5, text: "Slide 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex items-center justify-center bg-gray-200 h-[80vh] sm:h-[80vh]"
          >
            <img
              src={slide.image}
              alt={slide.text}
              className="object-cover w-full h-full"
            />
            {/* Shop Button */}
            <button className="absolute bottom-8 sm:bottom-4 text-white text-lg sm:text-sm font-bold bg-black bg-opacity-50 px-4 sm:px-2 py-2 rounded w-32 sm:w-24 animate-pulse">
              Shop
            </button>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full ${
              index === currentIndex
                ? "bg-white"
                : "bg-gray-400 hover:bg-white transition"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carosel;
