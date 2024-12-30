import React from 'react'
import { useState } from 'react';
import { MdDeleteForever, MdEdit } from "react-icons/md";

import { bigdreams,
    biggoals,
    bigfloralgarden,
    busyatwork,
    floralparadise,
    flowersinblue,
    happystripes }  from '../../assets/Image'

function AdminProductList() {
    // const [productlist, setProductlist] = useState([]);
    const [showEdit, setShowEdit] = useState(false); // For modal visibility
    const [editProductId, setEditProductId] = useState(null); // To track which product is being edited
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productGender, setProductGender] = useState('');
    const [productColor, setProductColor] = useState('');
    const [productStock_Quantity, setProductStock_Quantity] = useState('');
    const [productImage, setProductImage] = useState(null); // Store current image for preview
    const [successMessage, setSuccessMessage] = useState('');
    const [categories, setCategories] = useState([]); // Store categories
    const [selectedCategory, setSelectedCategory] = useState({ id: "", name: "" });

    // Fetch product list from the server  
    // useEffect(() => {
    //   const fetchProductList = async () => {
    //     try {
    //       const response = await getallProducts(); // Fetch products from backend
    //       setProductlist(response.products); // Store fetched products
    //       // console.log("2525252525",response)
    //     } catch (error) {
    //       console.error('Error fetching products:', error);
    //     }
    //   };
    //   fetchProductList(); // Fetch the product list when the component mounts
    // },[]);

    // console.log("Fetched Data", productlist);

    const productlist = [
        {
            id:1,
          name: "Planners",
          price: 1000,
          quantity: 750,
          category:'Planners',
          image: [bigdreams]
        },
        {
            id:2,
          name: "DatedPlanner",
          price: 1000,
          quantity: 900,
          category:'Planners',

          image: [biggoals]
        },
        {
            id:3,
          name: "FloralPrint",
          price: 2000,
          quantity: 1500,
          category:'Planners',

          image:[ bigfloralgarden]
        },
        {
            id:4,
          name: "Big Dreams",
          price: 800,
          quantity: 700,
          category:'Planners',

          image: [busyatwork]
        },
        {
            id:5,
          name: "Black Floral",
          price: 2000,
          quantity: 1500,
          category:'Planners',

          image:[ floralparadise]
        },
        {
            id:6,
          name: "Marble Maze",
          price: 1400,
          quantity: 1200,
          category:'calendar',

          image: [flowersinblue]
        },
        {
            id:7,
          name: "LushForest",
          price: 2500,
          quantity: 2000,
          category:'Journals',
          image: [happystripes]
        },
      ];


    return (
            // <div className=' border-black mt-12 mr-8'>
            //     <h1 className="text-2xl font-bold mb-4">Product Details</h1>
            //     <div className='w-full'>
            //         {/* {productlist && productlist.length > 0 ? ( */}
            //         {productlist?.length > 0 ? (

            //             <table className="w-full bg-white border-collapse border  rounded-2xl border-gray-200">
            //                 <thead className='border  border-black rounded-2xl'>
            //                     <tr className="bg-gray-100 border rounded-xl">
            //                         <th className="py-2 px-4 border rounded">Image</th>
            //                         <th className="py-2 px-4 border">Name</th>
            //                         {/* <th className="py-2 px-4 border">Category</th> */}
            //                         <th className="py-2 px-4 border">Price</th>
            //                         <th className="py-2 px-4 border">Quantity</th>
            //                         {/* <th className="py-2 px-4 border">Quantity</th> */}
            //                         <th className="py-2 px-4 border">Action</th>
            //                     </tr>
            //                 </thead>
            //                 <tbody>
            //                     {productlist?.map((productlist) => (
            //                         <tr key={productlist.id} className="hover:bg-gray-50">
            //                             <td className=" border">
            //                                 {/* {productlist.image.slice(0, 5).map((image, index) => ( */}

            //                                     <img
            //                                         // key={index}
            //                                         // src={`http://192.168.20.5:3000/${image}`}
            //                                         src={productlist.image}
            //                                         // alt={`Product Image ${index + 1}`}
            //                                         height="25"
            //                                         width="30"
            //                                     />
            //                                 {/* ))} */}
            //                             </td>
            //                             <td className=" border">{productlist.name}</td>
            //                             {/* <td className="py-2 px-4 border">{productlist.category_id.name}</td> */}
            //                             <td className=" border">{productlist.price}</td>
            //                             {/* <td className="py-2 px-4 border">{product.size}</td> */}
            //                             <td className=" border">{productlist.quantity}</td>
            //                             <td className="">
            //                                 <button
            //                                     className="text-white bg-red-500 hover:bg-red-600 justify-center items-center rounded"
            //                                     // Add delete functionality if needed
            //                                     onClick={() => {
            //                                         handleDelete(product._id);
            //                                     }}
            //                                 >
            //                                     <MdDeleteForever size={24} />
            //                                 </button>
                                       
            //                             </td>
            //                         </tr>
            //                     ))}
            //                 </tbody>
            //             </table>
            //         ) : (
            //             <p>No products available</p>
            //         )}
            //     </div>
            // </div>

            <div className="border-black mt-1 mr-4 bg-[-2px_6px_16px_17px_rgba(0,_0,_0,_0.2)]">
  <h1 className="text-2xl font-bold mb-4">Product Details</h1>
  <div className="w-full">
    {productlist?.length > 0 ? (
      <div className="w-full">
        {/* Header Row */}
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-t-lg font-bold text-left">
          <div className="flex-1 px-4 py-2">Image</div>
          <div className="justify-start items-start w-80 ">Name</div>
          <div className="flex-1 px-4 py-2 ">Category</div>
          <div className="flex-1 px-4 py-2">Price</div>
          <div className="flex-1 px-4 py-2">Quantity</div>
          <div className="flex-1 px-4 py-2">Action</div>
        </div>

        {/* Product Rows */}
        <div className="space-y-2"> {/* Adds gap between rows */}
          {productlist.map((product) => (
            <div
              key={product.id}
              className="flex items-center border border-gray-300 bg-white rounded-lg shadow-sm"
            >
              <div className="flex-1 px-4 py-2">
                <img
                  src={product.image}
                  alt="Product"
                  className="h-12 w-12 object-cover rounded-md"
                />
              </div>
              <div className=" justify-start items-start w-80">{product.name}</div>
              <div className="flex-1 px-4 py-2">{product.category}</div>
              <div className="flex-1 px-4 py-2">₹{product.price}</div>
              <div className="flex-1 px-4 py-2">{product.quantity}</div>
              <div className="flex-1 px-4 py-2">
                <button
                  className="text-white bg-red-500 hover:bg-red-600 rounded p-2"
                  onClick={() => handleDelete(product.id)}
                >
                  <MdDeleteForever size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <p>No products available</p>
    )}
  </div>
</div>

    )
}

export default AdminProductList


     {/* <button
                      className="text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded"
                      onClick={() => handleShowEdit(product)}
                    >
                      <MdEdit size={24} />
                    </button> */}