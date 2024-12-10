import React from 'react'

function SampleCard({ image,name, price, offerPrice }) {
  return (
    <div className="min-h-screen flex justify-center items-center font-PTSerif">


    <div className="relative w-96 h-[380px] bg-[#375E90] rounded-2xl overflow-hidden group border">
    {/* <div className="relative w-80 h-[380px] bg-[#1995AD] rounded-2xl overflow-hidden group border"> */}
    {/* <div className="relative w-80 h-[380px] bg-[#8fd0d6] rounded-2xl overflow-hidden group border"> */}
    {/* <div className="relative w-80 h-[380px] bg-[#76d4d2] rounded-2xl overflow-hidden group border"> */}
      {/* Skew Background Effect */}
      {/* <div className="absolute top-[-60%] w-full h-full bg-[#f6b9c5] skew-y-[-0deg]  */}
      <div className="absolute top-[-60%] w-full h-full bg-[#fff] skew-y-[-0deg] 
      transition-transform ease-in-out group-hover:top-[-70%] group-hover:skew-y-[-50deg] duration-500" />

      {/* Text Overlay */}
      <div className="absolute bottom-14 left-12 text-[3em] font-bold text-black opacity-10 pointer-events-none">
        Evvi
      </div>

      {/* Image Section */}
      <div className="relative w-full flex justify-center items-center pt-5 z-10">
        <img
          src={image}
          className="h-[150px] w-auto transition-transform rounded duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="relative p-5 flex flex-col items-center z-20">
        <h3 className=" text-white text-lg font-medium uppercase mt-5 text-center w-full">
          {name}
        </h3>
        <h2 className="text-white text-2xl font tracking-wide font-NotoSans">
        ₹<span className="font-PTSerif">{offerPrice}</span> <small className="text-md line-through font-NotoSans">₹ <span className="font-PTSerif">{price}</span></small>
        </h2>
        <a
          href="#"
          className="mt-8 py-2 px-6 text-black bg-white rounded-full uppercase tracking-wide opacity-0 translate-y-5 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 mb-8"
        >
          View
        </a>
      </div>
    </div>
</div>
  )
}

export default SampleCard
// [#A1D6E2]