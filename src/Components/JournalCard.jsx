// import React from 'react'
// const colors = [
//   "bg-red-100",
//   "bg-blue-100",
//   "bg-green-100",
//   "bg-yellow-100",
//   "bg-purple-100",
//   "bg-pink-100",
//   "bg-orange-100",
//   "bg-amber-100",
//  " bg-lime-100",
//  "bg-emerald-100",
//  "bg-teal-200",
//  "bg-cyan-100",
// ];

// function JournalCard({ image,name, price, offerPrice }) {
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];

//   return (
//     <>
//     {/* <div className={`flex justify-center items-center border rounded h-68 ${randomColor}`}> */}
//     <div className={'flex justify-center items-center border rounded h-68' }>
//       <div className="relative w-80 h-[300px] overflow-hidden group">
//         {/* Background Circle Animation */}
//         {/* <div className="absolute top-0 left-0 w-3/4 h-1/3 bg-[#1BBFE9]  rounded-full transform scale-[1.2] transition-transform duration-500 ease-in-out group-hover:scale-[2.5] group-hover:translate-y-[-20%]"></div> */}
//         {/* <div className="absolute top-0 left-0 w-full h-full bg-blue-400 clip-path-circle-150 transition-clip-path hover:clip-path-circle-300"></div> */}


//         {/* Overlay Text */}
//         <div className="absolute top-1/3 left-[3%] text-[6em] font-bold italic text-black opacity-10">
//           Evvi
//         </div>

//         {/* Image Section */}
//         <div className="absolute top-1/3 left-1/5 transform -translate-x-1/ -translate-y-1/2 z-10 transition-transform duration-700 group-hover:top-[4%] group-hover:-translate-y-0">
//           <img
//             src={image}
//             alt="Nike Air Shoe"
//             className="h-[150px] w-[250px]  transform rotate-12"
//           />
//         </div>
       

        

//         {/* Content Section */}
//         <div className="absolute bottom-0 w-full bg-transparent text-center transition-all duration-700 group-hover:h-[150px]">
//           <h2 className="text-black text-xl font-semibold tracking-wide mb-2">
//             {name}
//           </h2>

//           {/* Size Options */}
//            <div className="flex justify-center items-center gap-3 mb-2 opacity-0 invisible transition-all duration-700 group-hover:opacity-100 group-hover:visible font-NotoSans">
//             <h3 className="text-black text-sm uppercase tracking-wider">
//             ₹{offerPrice}
//             </h3>
//             <h3 className="text-black text-sm uppercase tracking-wider line-through">
//             MRP: ₹{price}
//             </h3>
//           </div> 
          

        
//            {/* <div className="flex justify-center items-center gap-3 mb-3 opacity-0 invisible transition-all duration-500 group-hover:opacity-100 group-hover:visible">
//           </div>  */}

//           {/* Buy Now Button */}
//           <a
//             href="#"
//             className="inline-block py-2 px-5 bg-white text-black font-semibold rounded-md transform translate-y-10 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100"
//           >
//             Buy Now
//           </a>
//         </div>
//       </div>
//     </div>
//       </>
//   )
// }

// export default JournalCard


import React from 'react'
import { Link } from 'react-router-dom';

const colors = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-orange-100",
  "bg-amber-100",
 " bg-lime-100",
 "bg-emerald-100",
 "bg-teal-200",
 "bg-cyan-100",
];

function JournalCard({ image,name, price, offerPrice }) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
     <Link 
        to={`/Productdetails/${name}`}>
    <div className={`flex justify-center items-center border rounded font-PTSerif h-68 ${randomColor}`}>
    {/* <div className={'flex justify-center items-center border rounded h-68' }> */}
      <div className="relative w-80 h-[300px] overflow-hidden group">
        {/* Background Circle Animation */}
        {/* <div className="absolute top-0 left-0 w-3/4 h-1/3 bg-[#1BBFE9]  rounded-full transform scale-[1.2] transition-transform duration-500 ease-in-out group-hover:scale-[2.5] group-hover:translate-y-[-20%]"></div> */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-blue-400 clip-path-circle-150 transition-clip-path hover:clip-path-circle-300"></div> */}


        {/* Overlay Text */}
        <div className="absolute top-1/3 left-[3%] text-[6em] font-bold italic text-black opacity-10">
          Evvi
        </div>

        {/* Image Section */}
        {/* <div className="absolute top-1/3 left-1/5 transform -translate-x-1/ -translate-y-1/2 z-10 transition-transform duration-700 group-hover:top-[4%] group-hover:-translate-y-0">
          <img
            src={image}
            alt="Nike Air Shoe"
            className="h-[150px] w-[250px]  transform rotate-12"
          />
        </div> */}
        <div className="relative w-full flex justify-center items-center pt-5 z-10">
        <img
          src={image}
          className="h-[150px] w-auto transition-transform rounded duration-500 group-hover:scale-110"
        />
      </div>
       

        

        {/* Content Section */}
        <div className="absolute bottom-0 w-full bg-transparent text-center transition-all duration-500 
        group-hover:h-[120px]">
          <h2 className="text-black text-xl font-semibold tracking-wide mb-2">
            {name}
          </h2>

          {/* Size Options */}
           <div className="flex justify-center items-center gap-3 mb-2 opacity-0 invisible transition-all duration-500 group-hover:opacity-100 group-hover:visible font-NotoSans">
            <h3 className="text-black text-sm uppercase tracking-wider">
            ₹{offerPrice}
            </h3>
            <h3 className="text-black text-sm uppercase tracking-wider line-through">
            MRP: ₹{price}
            </h3>
          </div> 
          

        
           {/* <div className="flex justify-center items-center gap-3 mb-3 opacity-0 invisible transition-all duration-500 group-hover:opacity-100 group-hover:visible">
          </div>  */}

          {/* Buy Now Button */}
          <a
            href="#"
            className="inline-block py-2 px-5 bg-[#375E90] text-white font-PTSerif font-semibod rounded-md transform translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            View Product
          </a>

          {/* <a
          href="#"
          className="mt-10 py-2 px-6 text-black bg-white rounded-full uppercase tracking-wide opacity-0 translate-y-5 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 mb-8"
        >
          Buy Now
        </a> */}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default JournalCard