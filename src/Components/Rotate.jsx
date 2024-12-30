// import React from 'react'
// import { pink , plannerslk} from '../assets/Image'
// import { oval } from '../assets/Image'

// function Rotate() {
//   return (

//     <div className=' w-full h-screen flex border border-red border-8 bg-rotatebg '>
//       <div className='w-1/2 flex flex-col justify-center '>
//         <p className='flex justify-center items-center text-4xl font-kalam'> Your ultimate planner Shop</p>
//         <p className='flex justify-center items-center text-8xl font-kalam'>  Evvi Planner </p>
//       </div>
//       <div className=' w-1/2 h-full relative'>
//       <div className="absolute  inset-0 bg-cover bg-center w-96 h-96 ml-32 mt-24"
//     style={{ backgroundImage:`url(${oval})` }}>
//   </div>
//         <div className=' flex justify-center items-center relative z-10'>
//                 <img
//                   className="rotating w-62 h-96 animate-spin-custom justify-center items-center  ml-12 mt-24"
//                   alt="Rotating Icon"
//                   src={plannerslk}>
//                 </img>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Rotate



import React from 'react';
import { pink, plannerslk } from '../assets/Image';
import { oval } from '../assets/Image';

function Rotate() {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row border border-red border-8 bg-rotatebg font">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center px-4 py-8">
        <p className="text-2xl md:text-4xl font-kalam">Your ultimate planner Shop</p>
        <p className="text-5xl md:text-8xl font-kalam mt-4">Evvi Planner</p>
      </div>
      
      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-full relative flex justify-center items-center">
        {/* Oval Background */}
        <div
          className="absolute inset-0 bg-cover bg-center w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 lg:ml-32 lg:mt-24"
          style={{ backgroundImage: `url(${oval})` }}
        ></div>
        
        {/* Rotating Image */}
        <div className="relative z-10">
          {/* <img
            className="rotating w-32 h-48 md:w-48 md:h-64 lg:w-62 lg:h-96 animate-spin-custom ml-0 md:ml-6 lg:ml-12 mt-12 lg:mt-24"
            alt="Rotating Icon"
            src={plannerslk}
          /> */}
     <img
  className="w-32 h-48 md:w-48 md:h-64 lg:w-64 lg:h-96 animate-spin-custom ml-0 md:ml-6 lg:ml-12 mt-12 lg:mt-24"
  alt="Rotating Icon"
  src={plannerslk}
/>
        </div>
      </div>
    </div>
  );
}

export default Rotate;
