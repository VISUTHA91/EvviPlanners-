import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lushforest, lushforest1, three, four, five, six, seven, flowersinblue ,flowers1} from '../assets/Image';
import StandardsinDetails from '../Components/StandardsinDetails';
import Modal from '../Components/Modal';
import Review from '../Components/Review';
const product = {
  id: 1,
  name: "Planners",
  categoryname:"2025 Dated Planners",
  price: 1000,
  offerPrice: 750,
  images: [flowersinblue, flowers1, three, four, five, six],
  spcification:
  {
    Line1: "A5 size, 164 pages",
    Line2: "Premium matte cover with UV accents",
    Line3: "Science-backed gratitude journal",
    Line4: "120 GSM paper",
    Line5: "Printed on FSC & PEFC certified",
    Line6: "2 colored bookmark ribbons"
  }
}

function Productdetails() {
  const [activeImage, setActiveImage] = useState(product.images?.[0]);
  // const [activeImage, setActiveImage] = useState(product.images?.[0] || '');

  const [qty, setQty] = useState(1);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };
 


  const [cart, setCart] = useState([
    { name: "Undated Planner", price: 500, quantity: 2 ,  "image": "https://via.placeholder.com/150"    },
    { name: "Journal", price: 1200, quantity: 1,  "image": "https://via.placeholder.com/150"    },
    { name: "Calendar", price: 300, quantity: 1 ,  "image": "https://via.placeholder.com/150"    },
  ]);


  const handleMouseEnterProduct = (image) => {
    setActiveImage(image);
  };

  const handleQuantityChange = (event) => {
      setQty(event.target.value);
      console.log(event.target.value)
    };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to handle quantity decrease
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to delete an item from the cart
  const deleteProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const addToCart =  () => {
    setIsOffCanvasOpen(true);
  }
  const shippingFees = 200; // Example value
  const grandTotal = subtotal + shippingFees;


  // const addToCart = async () => {
  //   const token = localStorage.getItem('authToken'); // Check if the user is logged in

  //   const cartItem = {
  //     productId: product._id,
  //     // size: selectedSize,
  //     // color: selectedColor,
  //     quantity: qty,
  //     price: product.final_price,
  //   };

  //   try {
  //     // Call the external API service to add product to cart
  //     const response = await addCart(cartItem);
  //     // setCartStatus('Product added to cart!');
  //     setIsOffCanvasOpen(true); // Open the off-canvas


  //     console.log("...............................", response);
  //     alert("Product Added to Cart Successfully");

  //   } catch (error) {
  //     console.error('Error adding to cart:', error);
  //     // setCartStatus('An error occurred. Please try again.');
  //   }
  // };
  const closeOffCanvas = () => {
    console.log("Closing off-canvas...");
    setIsOffCanvasOpen(false);
  };

  // const buyNow = () => {
  //   const addedToCart = addToCart();
  //   if (addedToCart) {
  //     navigate('/Cart');
  //   }
  // };



  return (
    <>
      <div className='flex flex-col'>
        <div className="flex flex-col lg:flex-row p-4 sm:p-6 lg:p-12 bg-white font-PTSerif">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:ml-16 rounded-lg  lg:mt-18 h-full">
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
              <img
                src={activeImage}
                width={640}
                height={480}
                alt={activeImage}
                className='object-cover'></img>
              <div className="flex gap-2 ">
                {product.images && product.images.map((image, index, id) => (
                  <div key={index}
                    className="w-16 h-16 sm:w-20  mt-2 sm:h-20">
                    <img
                      //   src={`${API_BASE_URL}${image}`}
                      // src={product.images[0]}
                      src={image}
                      alt={`product image ${index}`}
                      width={100}
                      height={100}
                      className={"border-black rounded-xl cursor-pointer max-sm:flex-1 border"}
                      // ${activeImage === product.images[0] ? 'ring-1 ring-purple-900' : 'border border-1'}`}
                      //     ${activeImage === `${API_BASE_URL}${image}` ? 'ring-1 ring-purple-900' : 'border border-1'}`}
                      onMouseEnter={() => handleMouseEnterProduct(image)}
                    // className='border-black rounded-xl cursor-pointer max-sm:flex-1 border'
                    />
                  </div>
                ))}
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* LEFT Side completed */}


          {/* Right Side Start */}
          <div className=' pl-8 lg:flex-col bg-green-10'>
            <div className='flex flex-col gap-4  mr-4'>
              <div className='text-3xl'>{product.name} | {product.categoryname}</div>
              <div className='text-3xl font-NotoSans'> ₹ <span className='font PTSerief'> {product.offerPrice} </span></div>
              <div className=' flex flex-row text-2xl gap-4 '>
                <div className='line-through'>
                  MRP.<span className='font-NotoSans'>₹ </span>{product.price}
                </div>
              </div>
              <div className='text-l'>Price Inclusive all Taxes</div>
            </div>

            {/* Quantity */}

            <div className="flex mt-4 items-center">
              <label htmlFor="qty" className="mr-2 font-bold">Quantity:</label>
              <select
                id="qty"
                className="p-1 border border-black rounded text-center bg-transparent"
                value={qty}
                onChange={handleQuantityChange}
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Button Section */}
            <div className=' mt-8 flex flex-col lg:flex-row  gap-8 '>
              <button
                onClick={() => addToCart()}
                // onClick={() => buyNow()}
                className=" border border-black border-2 rounded-lg hover:bg-[#222c59] hover:text-white transition lg:w-36 p-2">
                Add To Cart
              </button>
              <Link to={'/payment'}
                // onClick={() => addToCart()}
                className="border border-black border-2 rounded-lg hover:bg-[#222c59] hover:text-white transition lg:w-36 w-full p-2 ml-2">
                🛒 Buy Now
                {/* </button> */}
              </Link>
            </div>




<div
  className={`fixed top-0 right-0 h-screen bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
    isOffCanvasOpen ? "translate-x-0" : "translate-x-full"
  } w-2/6 z-50`}
>
  {/* Header */}
  <div className="flex justify-between items-center p-3 border-b border-gray-300">
    <h2 className="text-xl text-gray-800">Your Cart</h2>
    <button
      onClick={closeOffCanvas}
      className="text-2xl font-bold text-gray-500 hover:text-red-600"
    >
      &times;
    </button>
  </div>

  {/* Cart Content */}
  <div className="p-5 overflow-y-auto h-[65vh]">
    {cart.length === 0 ? (
      <div className="flex flex-col items-center text-gray-500 mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3l18 18m-2.25-1.5H4.5A2.25 2.25 0 012.25 17.25V6.75c0-.621.252-1.179.662-1.589M19.5 21l-1.5-1.5m0-6H5.25M16.5 7.5H6.75"
          />
        </svg>
        <p className="text-lg">Your cart is empty.</p>
      </div>
    ) : (
      <ul className="space-y-4">
        {cart.map((item) => (
          // <li
          //   key={item.id}
          //   className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
          // >
          //   <div>
          //     <h3 className="text-lg font-semibold text-gray-800">
          //       {item.name}
          //     </h3>
          //     <p className="text-sm text-gray-500">₹{item.price}</p>
          //     <div className="flex items-center mt-3">
          //       <button
          //         onClick={() => decreaseQuantity(item.id)}
          //         className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-200 text-gray-700 hover:bg-gray-300"
          //       >
          //         -
          //       </button>
          //       <span className="px-4 py-1 border-t border-b border-gray-300">
          //         {item.quantity}
          //       </span>
          //       <button
          //         onClick={() => increaseQuantity(item.id)}
          //         className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-200 text-gray-700 hover:bg-gray-300"
          //       >
          //         +
          //       </button>
          //     </div>
          //   </div>
          //   <div className="flex items-center space-x-4">
          //     <p className="text-lg font-medium text-gray-800">
          //       ₹{item.price * item.quantity}
          //     </p>
          //     <button
          //       onClick={() => deleteProduct(item.id)}
          //       className="text-gray-500 hover:text-red-600"
          //     >
          //       <svg
          //         xmlns="http://www.w3.org/2000/svg"
          //         fill="none"
          //         viewBox="0 0 24 24"
          //         strokeWidth={2}
          //         stroke="currentColor"
          //         className="w-6 h-6"
          //       >
          //         <path
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           d="M6 18L18 6M6 6l12 12"
          //         />
          //       </svg>
          //     </button>
          //   </div>
          // </li>
          <li
  key={item.id}
  className="flex items-center justify-between p-1 bg-gray-100 rounded-lg shadow-sm border border-[#375E90]">
  <div className="flex items-center space-x-2">
    {/* Product Image */}
    <img
      src={item.image}
      alt={item.name}
      className="w-16 h-16 object-cover rounded-lg"
    />

    {/* Product Details */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      <p className="text-sm text-gray-500">₹{item.price}</p>
      <div className="flex items-center mt-3">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          -
        </button>
        <span className="px-3 py-1 border-t border-b border-gray-300">
          {item.quantity}
        </span>
        <button
          onClick={() => increaseQuantity(item.id)}
          className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  </div>

  {/* Total Price and Delete Button */}
  <div className="flex items-center space-x-4">
    <p className="text-l font-small text-gray-800 font-NotoSans">
      ₹{item.price * item.quantity}
    </p>
    <button
      onClick={() => deleteProduct(item.id)}
      className="text-gray-500 hover:text-red-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</li>
        ))}
      </ul>
    )}
  </div>

  {/* Footer */}
  <div className="p-2 border-t border-gray-300">
    <div className="flex justify-between text-lg font-semibold text-gray-800">
      <span>Subtotal</span>
      <span className="font-NotoSans">₹{subtotal}</span>
    </div>
    <div className="mt-6 flex gap-4">
      <Link
        to="/Cart"
        className="w-1/2 text-center border border-[#375E90] bg-white py-3 rounded-lg hover:bg-[#222c59] hover:text-white shadow-md"
      >
        View Cart
      </Link>
      <Link
        onClick={() => setIsModalOpen(true)}
        // to="/checkout"
        // className="w-1/2 text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 shadow-md"
        className="w-1/2 text-center bg-[#375E90] text-white py-3 rounded-lg hover:bg-[#222c59] shadow-md"
      >
        Checkout
      </Link>
    </div>
  </div>
</div>
      {/* Overlay */}
      {isOffCanvasOpen && (
        <div
          onClick={closeOffCanvas}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
        ></div>
      )}



      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentStep={currentStep}
        handleStepChange={handleStepChange}
        subtotal={subtotal}
        shippingFees={shippingFees}
        grandTotal={grandTotal}
       className="items-center justify-center "/>
            <div className='mt-8 mb-4 w-96'>
              <div className='bg-blue-300 border rounded-tl-xl rounded-tr-xl flex items-center h-8 p-2 text-xl font-bold'>
                Specification
              </div>
              <div className=' bg-blue-50 rounded-bl-xl rounded-br-xl'>
                <ul className='list-disc list-inside ml-2'>
                  <li className='leading-8'>{product.spcification.Line1}</li>
                  <li className='leading-8'>{product.spcification.Line2}</li>
                  <li className='leading-8'>{product.spcification.Line4}</li>
                  <li className='leading-8'>{product.spcification.Line5}</li>
                  <li className='leading-8'>{product.spcification.Line6}</li>
                  <li className='leading-8'>{product.spcification.Line3}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Review />
        <StandardsinDetails />
      </div>      
    </>
  )
}

export default Productdetails

{/* <ZoomImage imgSrc={activeImage ? activeImage : `${API_BASE_URL}${product.images[0]}`} /> */ }
{/* <ZoomImage imgSrc={imageSrc} /> */ }

{/* <ReactCursorPosition>
          <ReactImageMagnify {...{
            smallImage: {
              alt: 'Wristwatch by Ted Baker London',
              isFluidWidth: true,
              // src: activeImage ? activeImage : `${API_BASE_URL}${product.images[0]}`
               src:imageSrc
            },
            largeImage: {
              //  src: activeImage ? activeImage : `${API_BASE_URL}${product.images[0]}`,
               src:imageSrc,
              alt:"Kids",
              width: 300,
              height: 300
            },
            enlargedImageContainerDimensions: {
              width: '300%',
              height: '300%',
            },
            enlargedImageContainerStyle: {
              width: '300px', // Set exact width and height for the enlarged image area
              height: '300px',
            },
            // Control the size and style of the magnifying lens
            lensStyle: { 
              backgroundColor: 'rgba(0, 0, 0, 0.2)', 
              width: '150px', // Adjust lens size to control visible zoomed area
              height: '150px',
            },
            enlargedImagePosition: 'over'
          }} />
        </ReactCursorPosition> */}



      //   <div
      //   className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform
      //      ${isOffCanvasOpen ? "translate-x-0" : "-translate-x-full"
      //     } w-96 z-50`}>
      //   <div className="flex justify-between items-center p-4 border-b">
      //     <h2 className="text-lg font-semibold">Cart</h2>
      //     <button
      //       onClick={closeOffCanvas}
      //       className="text-xl font-bold hover:text-red-600"
      //     >
      //       &times;
      //     </button>
      //   </div>

      //   <div className="p-4">
      //     {cart.length === 0 ? (
      //       <p className="text-gray-600">Your cart is empty.</p>
      //     ) : (
      //       <ul className="space-y-4">
      //         {cart.map((item, index) => (
      //           <li
      //             key={index}
      //             className="flex justify-between items-center border-b pb-2"
      //           >
      //             <div>
      //               <h3 className="font-medium">{item.name}</h3>
      //               <p className="text-sm text-gray-600">₹{item.price}</p>
      //               <div className="flex items-center mt-2">
      //                 <button
      //                   onClick={() => decreaseQuantity(item.id)}
      //                   className="px-2 py-1 border rounded-l-md bg-gray-200 hover:bg-gray-300"
      //                 >
      //                   -
      //                 </button>
      //                 <span className="px-3 py-1 border-t border-b">
      //                   {item.quantity}
      //                 </span>
      //                 <button
      //                   onClick={() => increaseQuantity(item.id)}
      //                   className="px-2 py-1 border rounded-r-md bg-gray-200 hover:bg-gray-300"
      //                 >
      //                   +
      //                 </button>
      //               </div>
      //             </div>
      //             <div className="flex items-center">
      //               <p>₹{item.price * item.quantity}</p>
      //               <button
      //                 onClick={() => deleteProduct(item.id)}
      //                 className="ml-4 text-red-600 hover:underline"
      //               >
      //                 Delete
      //               </button>
      //             </div>
      //           </li>
      //         ))}
      //       </ul>
      //     )}
      //   </div>
      

      // {/* Overlay (for closing the off-canvas) */}
      // {isOffCanvasOpen && (
      //   <div
      //     onClick={closeOffCanvas}
      //     className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
      //   >
      //   </div>
      // )}
      // </div>