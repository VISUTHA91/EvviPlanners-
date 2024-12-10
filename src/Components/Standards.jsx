// import React from "react";
// import {  EasyReturns,Shipping,PaymentSecure,OnlineSupport, } from "../assets/Image";

// function Standards(){
//     return(
//         <>
//             <div className=" flex flex-row w-full bg-orange-100 h-48 justify-around items-center">
//                 <div className="flex flex-col justify-center items-center">
//                     <img src={EasyReturns} ></img>
//                     <p>Easy Exchange</p>
//                 </div>
//                 <div className="flex flex-col justify-center items-center">
//                     <img src={PaymentSecure}></img>
//                     <p>Secure Payment</p>
//                 </div>
//                 <div className="flex flex-col justify-center items-center">
//                     <img src={Shipping} ></img>
//                     <p>Budget-friendly</p>
//                 </div>
//                 {/* <div className="flex flex-col justify-center items-center">
//                     <img src={TopQuality} className="size-12" ></img>
//                     <p>Top Quality</p>
//                 </div> */}
//                 <div className="flex flex-col justify-center items-center">
//                     <img src={OnlineSupport} ></img>
//                     <p>24/7 Support </p>
//                 </div>
//             </div>       
        
//         </>
//     )
// }
// export  default Standards;

import React from "react";
import { EasyReturns, Shipping, PaymentSecure, OnlineSupport } from "../assets/Image";

function Standards() {
    return (
        <>
            <div className="flex flex-wrap w-full bg-[#fff] py-8 justify-around items-center">
                <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4 px-4 mb-4 md:mb-0">
                    <img src={EasyReturns} alt="Easy Returns" className="h-12 w-18 md:h-16 md:w-22" />
                    <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl mt-2">Easy Exchange</p>
                </div>
                <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4 px-4 mb-4 md:mb-0">
                    <img src={PaymentSecure} alt="Secure Payment" className="h-12 w-18 md:h-16 md:w-22" />
                    <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl mt-2">Secure Payment</p>
                </div>
                <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4 px-4 mb-4 md:mb-0">
                    <img src={Shipping} alt="Budget-friendly" className="h-12 w-18 md:h-16 md:w-22" />
                    <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl mt-2">Budget-friendly</p>
                </div>
                <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4 px-4">
                    <img src={OnlineSupport} alt="24/7 Support" className="h-12 w-18 md:h-16 md:w-22" />
                    <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl mt-2">24/7 Support</p>
                </div>
            </div>
        </>
    );
}

export default Standards;
