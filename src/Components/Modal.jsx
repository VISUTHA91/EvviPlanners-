import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the hook


const Modal = ({ isOpen, onClose, handleStepChange, subtotal, shippingFees, grandTotal}) => {
  if (!isOpen) return null;

  const [currentStep, setCurrentStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [address, setAddress] = useState({
    name: "",
    flat: "",
    city: "",
    state: "",
    pincode: "",
  });
  const navigate = useNavigate(); // Initialize the navigation function



  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleConfirmPayment = () => {
    // Simulate payment confirmation
    setOrderCompleted(true);

  };

  const handleOtpVerification = () => {
    if (otp === "1234") { // Dummy OTP for testing
      setCurrentStep(2);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleAddressSubmit = () => {
    if (address.name && address.flat && address.city) {
      setCurrentStep(3);
    } else {
      alert("Please fill all required address fields");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Checkout</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>

        {/* Progress Bar with Step Labels */}
        <div className="flex items-center mb-6">
          <div
            className={`w-1/3 h-2 rounded-full ${
              // currentStep >= 1 ? "bg-green-600" : "bg-gray-300"
              currentStep >= 1 ? "bg-[#375E90]" : "bg-gray-300"
            }`}
          />
          <span className="w-1/3 text-center text-sm font-semibold">
            Mobile
          </span>
          <div
            className={`w-1/3 h-2 rounded-full ${
              currentStep >= 2 ? "bg-[#375E90]" : "bg-gray-300"
            }`}
          />
          <span className="w-1/3 text-center text-sm font-semibold">
            Address
          </span>
          <div
            className={`w-1/3 h-2 rounded-full ${
              currentStep === 3 ? "bg-[#375E90]" : "bg-gray-300"
            }`}
          />
          <span className="w-1/3 text-center text-sm font-semibold">
            Payment
          </span>
        </div>

        {/* Modal Content */}
        {currentStep === 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">OTP Verification</h3>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <button
              onClick={handleOtpVerification}
              // className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              className="w-full px-4 py-2 bg-[#375E90] text-white rounded-md hover:bg-[#222c59]"
            >
              Verify OTP
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Address Details</h3>
            <input
              type="text"
              value={address.name}
              onChange={(e) =>
                setAddress({ ...address, name: e.target.value })
              }
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <input
              type="text"
              value={address.flat}
              onChange={(e) =>
                setAddress({ ...address, flat: e.target.value })
              }
              placeholder="Flat / House No."
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <input
              type="text"
              value={address.city}
              onChange={(e) =>
                setAddress({ ...address, city: e.target.value })
              }
              placeholder="City"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <input
              type="text"
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
              placeholder="State"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <input
              type="text"
              value={address.pincode}
              onChange={(e) =>
                setAddress({ ...address, pincode: e.target.value })
              }
              placeholder="Pincode"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <button
              onClick={handleAddressSubmit}
              // className="w-full px-4 py-2 bg-[#222c59] text-white rounded-md hover:bg-green-700"
              className="w-full px-4 py-2 bg-[#375E90] text-white rounded-md hover:bg-[#222c59]"
              >
              Save Address
            </button>
          </div>
        )}

        {currentStep === 3 && (
          // <div>
          //   <h3 className="text-lg font-semibold mb-4">Payment Section</h3>
          //   <p className="text-sm text-gray-500 mb-6">
          //     Proceed with your preferred payment method.
          //   </p>
          //   <button
          //     className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-[#222c59]"
          //     onClick={() => alert("Proceeding to payment...")}
          //   >
          //     Proceed to Pay
          //   </button>
          // </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Section</h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal:</span>
                <span className="font-NotoSans">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Shipping Fees:</span>
                <span className="font-NotoSans">₹{shippingFees}</span>
              </div>
              <div className="flex justify-between font-bold text-base">
                <span>Grand Total:</span>
                <span className="font-NotoSans">₹{grandTotal}</span>
              </div>
            </div>

            {/* <div className="min-h-screen flex items-center justify-center bg-gray-100"> */}

            {!orderCompleted ? (
        <div className="p-8 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800">Confirm To Pay</h2>
          <p className="text-gray-600 mt-4">
            Please click the button below to complete your order.
          </p>
            <button
              className="w-full px-4 py-2 bg-[#375E90] text-white rounded-md hover:bg-[#222c59]"
              // onClick={() => alert("Proceeding to payment...")}
              onClick={handleConfirmPayment}

            >
              Proceed to Pay
            </button>
            </div>
      ) : (
        <div className="p-8 bg-green-50 shadow-lg rounded-lg text-center">
          <h2 className="text-3xl font-bold text-green-700">
            🎉 Order Successfully Completed!
          </h2>
          <p className="text-green-600 mt-4">
            Thank you for your purchase. Your order is on its way!
          </p>
          <button
            onClick={() => {setOrderCompleted(false)
            navigate("/")}} // Redirect to the home page

            className="mt-6 w-full bg-[#375E90] hover:bg-[#222c59] text-white py-2 px-4 rounded-lg shadow-lg transition ease-in-out duration-300"
          >
            Back to Home
          </button>
        </div>
      )}
    {/* </div> */}
          </div>

          
        )}
      </div>
    </div>
  );
};

export default Modal;

// import React from "react";
// import { useState } from "react";
// const Modal = ({ isOpen, onClose, handleStepChange }) => {
//   if (!isOpen) return null;

//   // const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [address, setAddress] = useState({
//     name: "",
//     flat: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const handleOtpVerification = () => {
//     if (otp === "1234") { // Dummy OTP for testing
//       setCurrentStep(2);
//     } else {
//       alert("Invalid OTP");
//     }
//   };

//   const handleAddressSubmit = () => {
//     if (address.name && address.flat && address.city) {
//       setCurrentStep(3);
//     } else {
//       alert("Please fill all required address fields");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Checkout</h2>
//           <button onClick={onClose} className="text-2xl">
//             &times;
//           </button>
//         </div>



//         <div className="flex items-center justify-between mb-6">
//               <div
//                 className={`w-1/3 h-2 rounded-full ${
//                   currentStep >= 1 ? "bg-green-600" : "bg-gray-300"
//                 }`}
//               > </div>
//               <div
//                 className={`w-1/3 h-2 rounded-full ${
//                   currentStep >= 2 ? "bg-green-600" : "bg-gray-300"
//                 }`}
//               ></div>
//               <div
//                 className={`w-1/3 h-2 rounded-full ${
//                   currentStep === 3 ? "bg-green-600" : "bg-gray-300"
//                 }`}
//               ></div>
//             </div>




        
//         {/* Modal Content */}
//         {currentStep === 1 && (
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">OTP Verification</h3>
//                 <input
//                   type="tel"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   placeholder="Enter your phone number"
//                   className="w-full px-4 py-2 border rounded-md mb-4"
//                 />
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   placeholder="Enter OTP"
//                   className="w-full px-4 py-2 border rounded-md mb-4"
//                 />
//                 <button
//                   onClick={handleOtpVerification}
//                   className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//                 >
//                   Verify OTP
//                 </button>
//               </div>
//             )}

//             {currentStep === 2 && (
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">Address Details</h3>
//                 <input
//                   type="text"
//                   value={address.name}
//                   onChange={(e) =>
//                     setAddress({ ...address, name: e.target.value })
//                   }
//                   placeholder="Full Name"
//                   className="w-full px-4 py-2 border rounded-md mb-4"
//                 />
//                 <input
//                   type="text"
//                   value={address.flat}
//                   onChange={(e) =>
//                     setAddress({ ...address, flat: e.target.value })
//                   }
//                   placeholder="Flat / House No."
//                   className="w-full px-4 py-2 border rounded-md mb-4"
//                 />
//                 <input
//                   type="text"
//                   value={address.city}
//                   onChange={(e) =>
//                     setAddress({ ...address, city: e.target.value })
//                   }
//                   placeholder="City"
//                   className="w-full px-4 py-2 border rounded-md mb-4"
//                 />
//                 <input
//                   type="text"
//                   value={address.state}
//                   onChange={(e) =>
//                     setAddress({ ...address, state: e.target.value })
//                   }
//                   placeholder="State"
//                   className="w-full px-4 py-2 border rounded-md mb-4"
//                 />
//                 <input
//                   type="text"
//                   value={address.pincode}
//                   onChange={(e) =>
//                     setAddress({ ...address, pincode: e.target.value })
//                   }
//                   placeholder="Pincode"
//                   className="w-full px-4 py-2 border rounded-md mb-4"
//                 />
//                 <button
//                   onClick={handleAddressSubmit}
//                   className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//                 >
//                   Save Address
//                 </button>
//               </div>
//             )}

//             {currentStep === 3 && (
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">Payment Section</h3>
//                 <p className="text-sm text-gray-500 mb-6">
//                   Proceed with your preferred payment method.
//                 </p>
//                 <button
//                   className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                   onClick={() => alert("Proceeding to payment...")}
//                 >
//                   Proceed to Pay
//                 </button>
//               </div>
//             )}
//       </div>
//     </div>
//   );
// };

// export default Modal;