import React from 'react'
import { useState } from 'react';

function AdminProductList() {
    const [productlist, setProductlist] = useState([]);
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


    return (
        <>
            <div className=' border-black mt-12 mr-8'>
                <h1 className="text-2xl font-bold mb-4">Product Details</h1>
                <div className='w-full'>
                    {/* {productlist && productlist.length > 0 ? ( */}
                    {productlist?.length > 0 ? (

                        <table className="min-w-full bg-white border-collapse border  rounded-2xl border-gray-200">
                            <thead className='border  border-black rounded-2xl'>
                                <tr className="bg-gray-100 border rounded-xl">
                                    <th className="py-2 px-4 border rounded">Image</th>
                                    <th className="py-2 px-4 border">Name</th>
                                    <th className="py-2 px-4 border">Category</th>
                                    <th className="py-2 px-4 border">Price</th>
                                    <th className="py-2 px-4 border">Quantity</th>
                                    <th className="py-2 px-4 border">Quantity</th>
                                    <th className="py-2 px-4 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productlist?.map((product) => (
                                    <tr key={product._id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 lg:flex flex-wrap ">
                                            {product.images.slice(0, 5).map((image, index) => (

                                                <img
                                                    key={index}
                                                    src={`http://192.168.20.5:3000/${image}`}
                                                    alt={`Product Image ${index + 1}`}
                                                    height="25"
                                                    width="30"
                                                />
                                            ))}
                                        </td>
                                        <td className="py-2 px-4 border">{product.name}</td>
                                        <td className="py-2 px-4 border">{product.category_id.name}</td>
                                        <td className="py-2 px-4 border">{product.final_price}</td>
                                        {/* <td className="py-2 px-4 border">{product.size}</td> */}
                                        <td className="py-2 px-4 border">{product.stock_quantity}</td>
                                        <td className="py-10 px-4 flex gap-2">
                                            <button
                                                className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
                                                // Add delete functionality if needed
                                                onClick={() => {
                                                    handleDelete(product._id);
                                                }}
                                            >
                                                <MdDeleteForever size={24} />
                                            </button>
                                       
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>

        </>
    )
}

export default AdminProductList


     {/* <button
                      className="text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded"
                      onClick={() => handleShowEdit(product)}
                    >
                      <MdEdit size={24} />
                    </button> */}