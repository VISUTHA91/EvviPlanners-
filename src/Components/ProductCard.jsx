import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image,name, price, offerPrice }) => {
  return (
    <Link 
    to={`/Productdetails/${name}`}
    // state={{ productId: _id }}
    // key={_id}
    >
    {/* <div className="max-w-sm  md:w-64 sm:w-72 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 lg:w-60 mb-8">
         <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"/>
      <div className="p-5 bg-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{name}</h3>
        <div className="flex  justify-center items-center gap-3 mb-4">
          <span className="text-l font-bold text-green-600">
            ₹ {offerPrice}
          </span>
          <span className="text-gray-500 line-through ">₹ {price}</span>
        </div>
       
         <div className="flex justify-center items-center ">
          View Products
          </div>
      </div>
    </div> */}





    <div className="max-w-sm w-full md:w-64 sm:w-72 rounded-lg  font-PTSerif overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-700 lg:w-60 mb-8 bg-white ml-4">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover transition-transform duration-700 hover:scale-110"
      />

      <div className="p-5 bg-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-2 hover:text-blue-600 transition-colors duration-200">
          {name}
        </h3>

        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="text-xl font-bold text-green-600 font-NotoSans">₹<span className="font-PTSerif">{offerPrice}</span></span>
          <span className="text-gray-500 line-through font-NotoSans text-base">₹ <span className="font-PTSerif">{price}</span></span>
        </div>

        <div className="flex justify-center">
          <button className=" bg-[#375E90] text-white px-5 py-2 rounded-lg hover:bg-[#222c59] transition-colors duration-300">
            View Product
          </button>
          
         {/* <div className="flex justify-center items-center ">
          View Products
          </div> */}
        </div>
      </div>
    </div>

    
    </Link>
  );
};

export default ProductCard;

  {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"> */}
