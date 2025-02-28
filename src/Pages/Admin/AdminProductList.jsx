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


    const productlist = [
        {
            id:1,
          name: "Planners",
          price: 1000,
          quantity: 150,
          category:'Planners',
          image: [bigdreams]
        },
        {
            id:2,
          name: "DatedPlanner",
          price: 1000,
          quantity: 600,
          category:'Planners',

          image: [biggoals]
        },
        {
            id:3,
          name: "FloralPrint",
          price: 2000,
          quantity: 150,
          category:'Planners',

          image:[ bigfloralgarden]
        },
        {
            id:4,
          name: "Big Dreams",
          price: 800,
          quantity: 70,
          category:'Planners',

          image: [busyatwork]
        },
        {
            id:5,
          name: "Black Floral",
          price: 2000,
          quantity: 150,
          category:'Planners',

          image:[ floralparadise]
        },
        {
            id:6,
          name: "Marble Maze",
          price: 1400,
          quantity: 120,
          category:'calendar',

          image: [flowersinblue]
        },
        {
            id:7,
          name: "LushForest",
          price: 2500,
          quantity: 20,
          category:'Journals',
          image: [happystripes]
        },
      ];


    return (
                        <div className="border-black mr-4 bg-[-2px_6px_16px_17px_rgba(0,_0,_0,_0.2)] h-screen overflow-y-auto scroll-hidden">
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
              <div className="flex px-4 py-2 gap-2">
                 <button
                      className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded"
                      onClick={() => handleShowEdit(product)}
                    >
                      <MdEdit size={20} />
                    </button>
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