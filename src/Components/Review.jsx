// import React from 'react'
// import { useState } from 'react';

// function Review() {
//   const [rating, setRating] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     review: "",
//     files: null,
//   });

//   const handleRatingClick = (value) => {
//     setRating(value);
//   };

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files : value,
//     });
//   };

//   const handleSubmit = () => {
//     console.log({ rating, formData });
//     alert("Review submitted!");
//   };



//   return (
//     <>
//     <div className='flex flex-col bg-blue justify-center items-center'>
//     <div className='bg-blue-200 m-8 p-4 w-3/4 justify-center items-center text-center rounded-xl'>
//         <h2 className="text-2xl font-semibold text-gray-800 ">
//         Don't just take our word. See what others have to say!</h2>
//     </div>
//     <div className="flex flex-col items-center py-8">
//       <div className="flex flex-col items-center text-center">
//         <img
//           className="icon w-24 h-24 mb-4"
//           src="https://www.theartloom.in/wp-content/plugins/yith-woocommerce-advanced-reviews-premium/assets/images/review-empty.svg"
//           alt="No Reviews"
//         />
//         <span className="message text-gray-600">
//           No customer reviews available for this product
//           <br />
//           <span className="font-semibold text-gray-800">
//             Be the first to leave a review!
//           </span>
//         </span>
//       </div>
//     </div>
//     <div className="lg:w-3/4 mx-auto p-14 bg-white shadow-lg rounded-2xl mb-10">
//       <div className="text-lg font-semibold mb-4 ">Leave your review</div>

//       {/* Rating */}
//       <div className="mb-4">
//         <span className="text-sm font-medium">Rating</span>
//         <div className="flex space-x-1 mt-2">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <button
//               key={star}
//               onClick={() => handleRatingClick(star)}
//               className={`w-8 h-8 rounded-full ${
//                 star <= rating ? "bg-yellow-400" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//         <input type="hidden" name="rating" value={rating} />
//       </div>

//       {/* User Data */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium">
//           Your Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full mt-1 p-2 border rounded-md"
//           />
//         </label>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium">
//           Your Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full mt-1 p-2 border rounded-md"
//           />
//         </label>
//       </div>

//       {/* Review Content */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium">
//           Your review:
//           <textarea
//             name="review"
//             value={formData.review}
//             onChange={handleInputChange}
//             className="w-full mt-1 p-2 border rounded-md"
//             rows="4"
//           />
//         </label>
//       </div>

//       {/* File Upload */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium">
//           Upload files:
//           <p className="text-sm text-gray-500">
//             {/* You can upload up to 20 images and 1 video.<br />
//             Allowed file types: .jpg, .jpeg, .png, .flv, .m4v, .mp4, .ogv, .webm, .wmv.<br /> */}
//             Maximum file size: 20MB for images and 1MB for videos.
//           </p>
//           <input
//             type="file"
//             name="files"
//             onChange={handleInputChange}
//             className="mt-2"
//             multiple
//             accept=".jpg, .jpeg, .png, .flv, .m4v, .mp4, .ogv, .webm, .wmv"
//           />
//         </label>
//       </div>

//       {/* Submit Button */}
//       <div className="mt-4">
//         <button
//           onClick={handleSubmit}
//           className="w-full bg-red-300 text-white py-2 rounded-md hover:bg-blue-600"
//         >
//           Publish Review
//         </button>
//       </div>
//     </div>
//     </div>
    
    
    
//     </>
//   )
// }

// export default Review


import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { BsStar, BsStarFill } from "react-icons/bs";



function Review() {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    files: null,
  });

  const handleRatingClick = (star) => {
    setRating(star);
  };
  console.log("Ratings:",rating)

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files : value,
    });
  };

  const handleSubmit = () => {
    console.log({ rating, formData });
    alert("Review submitted!");
  };

  return (
    <div className="flex flex-col bg-blue-50 min-h-screen py-8 font-PTSerif">
      {/* Header Section */}
      <div className="bg-blue-200 m-8 p-6 w-3/4 mx-auto text-center rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">
          Don't just take our word. See what others have to say!
        </h2>
      </div>

      {/* No Reviews Section */}
      <div className="flex flex-col items-center py-8">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-24 h-24 mb-4"
            src="https://www.theartloom.in/wp-content/plugins/yith-woocommerce-advanced-reviews-premium/assets/images/review-empty.svg"
            alt="No Reviews"
          />
          <p className="text-gray-600">
            No customer reviews available for this product
            <br />
            <span className="font-semibold text-gray-800">
              Be the first to leave a review!
            </span>
          </p>
        </div>
      </div>

      {/* Review Form Section */}
      <div className="lg:w-3/4 mx-auto p-8 bg-white shadow-lg rounded-xl">
        <div className="text-xl font-semibold text-gray-800 mb-6">Leave your review</div>

        {/* Rating */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-800">Rating</label>
          <div className="flex space-x-2 mt-3">
            {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          onClick={() => handleRatingClick(star)}
          className="cursor-pointer"
          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
          title={`Rate ${star} star${star > 1 ? "s" : ""}`}
        >
          {star <= rating ? (
            // <BsStarFill className="w-10 h-10 text-yellow-400 hover:text-yellow-500" />
            <BsStarFill className="w-10 h-10 text-[#375E90] hover:text-[#375E90]" />
          ) : (
            <BsStar className="w-10 h-10 text-[#375E90] hover:text-[#222c59]" />
          )}
        </div>
           ))}
          </div>
        </div>
        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-800">Your Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-800">Your Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Review Content */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-800">Your Review:</label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleInputChange}
            className="w-full mt-2 p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
            rows="4"
          />
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-800">Upload Files:</label>
          <p className="text-sm text-gray-500">
            Maximum file size: 20MB for images and 1MB for videos.
          </p>
          <input
            type="file"
            name="files"
            onChange={handleInputChange}
            className="mt-2 p-1"
            multiple
            accept=".jpg, .jpeg, .png, .flv, .m4v, .mp4, .ogv, .webm, .wmv"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={handleSubmit}
            className="w-full bg-[#375E90] text-white py-3 rounded-md shadow-md hover:bg-[#222c59] transition"
          >
            Publish Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
