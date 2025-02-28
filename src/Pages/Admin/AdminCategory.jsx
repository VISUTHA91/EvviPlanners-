// import React from 'react'
// import { useState, useEffect } from 'react';
// import { MdDeleteForever } from "react-icons/md";
// import { MdEdit } from "react-icons/md";
// import { FcPlus } from "react-icons/fc";
// function AdminCategory() {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [newSubcategory, setNewSubcategory] = useState('');
//   const [subcategories, setSubcategories] = useState([]);
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [editCategoryId, setEditCategoryId] = useState(null); // To track which category is being edited
//   const [showEditModal, setShowEditModal] = useState(false); // For modal visibility
//   const [categoryName, setCategoryName] = useState('');
//  const[ subCategoryName,setSubCategoryName] = useState(''); // State to store subcategory name
//   const [currentImage, setCurrentImage] = useState(null); // Store current image for preview
//   const [images, setImages] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [reload, setReload] = useState(false); // State to trigger data fetch
  
//   useEffect(() => {
//     if (showEditModal && selectedCategory) {
//       setCategoryName(selectedCategory.name);
//       setSubcategories(selectedCategory.subcategories || []);
//     }
//   }, [showEditModal, selectedCategory]);

//   const handleSubcategoryChange = (e, index) => {
//     const updatedSubcategories = [...subcategories];
//     updatedSubcategories[index] = e.target.value;
//     setSubcategories(updatedSubcategories);
//   };

 
//   const handleAddSubcategory = () => {
//     if (newSubcategory.trim()) return; // Prevent empty subcategories
//     setSubcategories((prev) => [...prev, newSubcategory]); // Update subcategories list
//     setNewSubcategory(""); // Clear input field
// };
//  const handleRemoveSubcategory = (index) => {
//     const updatedSubcategories = subcategories.filter((_, i) => i !== index);
//     setSubcategories(updatedSubcategories);
//   };
//   const staticCategories = [
//     {
//       categoryName: 'Planners',
//       image: 'path/to/men.jpg',
//       subcategories: ['Dated Planners', 'Undated Planners'],
//     },
//     {
//       categoryName: 'Journels',
//       image: 'path/to/women.jpg',
//     },
//     {
//       categoryName: 'Calendar',
//       image: 'path/to/kids.jpg',
//       subcategories: ['Desk Calendar', 'Wall Calendar'],
//     },
//     {
//       categoryName: 'Others',
//       subcategories: ['Sticky Notes', 'Stickers', 'To-Do Pads', 'Daily Tear-Off Planners', 'Weakly Tear-Off Planners', 'Seasonal Greetings', 'Stationary'],
//     },
//   ];
//   const handleCategoryClick = (categoryName) => {
//     setSelectedCategory((prev) => (prev === categoryName ? null : categoryName));
//   };
//    useEffect(() => {
//      setCategories(staticCategories);
//    }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     if (!categoryName.trim()) return; // Prevent empty category names
//     const newCategory = {
//         categoryName,
//         subcategories,
//     };
//     setCategories((prev) => [...prev, newCategory]); // Store new category in state
//     setCategoryName(""); // Clear category input
//     setSubcategories([]); // Reset subcategories for next category
// }; 
//   const handleOpenEditModal = (category) => {
//     setCategoryName(category.name); // Set the selected category name
//     setSubcategories(category.subcategories || []); // Set the subcategories or an empty array if none exist
//     setShowEditModal(true); // Open the modal
//   };
//   const handleEdit = (category) => {
//     setEditCategoryId(category._id);
//     setCategoryName(category.name); // Set current name in input field
//     setCurrentImage(category.image); // Set current image for preview
//     setShowEditModal(true); // Show the modal
//   };
//   console.log('Submitting:', categories);
 
//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     const updatedData = {
//       categoryName,
//       subcategories,
//     };
//     console.log('Submitting:', updatedData);
//     setShowEditModal(false);
//   };
//   return (
//     <div className='mt-8 mb-28'>
//       <div className='flex gap-32'>
//         <h1 className="text-2xl font-bold ml-2">Category Details</h1>
//         <div>
//           <button onClick={() => setShowCreateForm(!showCreateForm)}
//             className="flex items-end text-xl  text-white border-black rounded-lg px-2 py-1 gap-1 bg-green-600">
//             <FcPlus size={28} className=' ' />Create
//           </button>
//         </div>
//       </div>
//       <div className=' lg:flex lg:flex-row sm:flex-col w-full gap-2'>
//         <div className=' bg-rose'>
//           {categories && ( 
//             <table
//               style={{
//                 backgroundColor: 'white',
//                 borderRadius: '12px',
//                 boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//                 marginTop: '1rem',
//                 marginBottom: '2.5rem',
//                 width: '100%',
//                 overflow: 'hidden',
//                 borderCollapse: 'collapse',
//                 textAlign: 'left',
//               }}
//             >
//               <thead>
//                 <tr
//                   style={{
//                     backgroundColor: '#4b5563', // Gray 600
//                     color: 'white',
//                     fontWeight: 'bold',
//                     textTransform: 'uppercase',
//                     fontSize: '14px',
//                     letterSpacing: '0.05em',
//                   }}
//                 >
//                   <th style={{ padding: '12px 16px' }}>S.No</th>
//                   <th style={{ padding: '12px 16px' }}>Category Name</th>
//                   <th style={{ padding: '12px 16px' }}>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {categories.map((category, index) => (
//                   <React.Fragment key={category._id}>
//                     <tr
//                       style={{
//                         borderBottom: '1px solid #e5e7eb', // Gray 200
//                         backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white', // Alternating row colors
//                         cursor: 'pointer',
//                       }}
//                       onMouseEnter={(e) =>
//                         (e.currentTarget.style.backgroundColor = '#f3f4f6') // Gray 100
//                       }
//                       onMouseLeave={(e) =>
//                       (e.currentTarget.style.backgroundColor = index % 2 === 0
//                         ? '#f9fafb'
//                         : 'white')
//                       }
//                     >
//                       <td style={{ padding: '12px 16px' }}>{index + 1}</td>
//                       <td
//                         style={{ padding: '12px 16px', color: '#3b82f6', fontWeight: 'bold' }}
//                         onClick={() => handleCategoryClick(category.categoryName)}
//                       >
//                         {category.categoryName}
//                       </td>
//                       <td style={{ padding: '12px 16px' }}>
//                         <div style={{ display: 'flex', gap: '8px' }}>
//                           <div
//                             style={{
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                               width: '36px',
//                               height: '36px',
//                               backgroundColor: '#ef4444', // Red 500
//                               color: 'white',
//                               borderRadius: '6px',
//                               cursor: 'pointer',
//                               transition: 'background-color 0.3s ease',
//                             }}
//                             onClick={() => handleDelete(category._id)}
//                             onMouseEnter={(e) =>
//                               (e.currentTarget.style.backgroundColor = '#b91c1c') // Red 700
//                             }
//                             onMouseLeave={(e) =>
//                               (e.currentTarget.style.backgroundColor = '#ef4444') // Red 500
//                             }
//                           >
//                             <MdDeleteForever size={20} />
//                           </div>
//                           <div
//                             style={{
//                               display: 'flex',
//                               alignItems: 'center',
//                               justifyContent: 'center',
//                               width: '36px',
//                               height: '36px',
//                               backgroundColor: '#3b82f6', // Blue 500
//                               color: 'white',
//                               borderRadius: '6px',
//                               cursor: 'pointer',
//                               transition: 'background-color 0.3s ease',
//                             }}
//                             // onClick={() => handleEdit(category)}
//                             onClick={() => handleOpenEditModal(category)}
//                             onMouseEnter={(e) =>
//                               (e.currentTarget.style.backgroundColor = '#1e3a8a') // Blue 800
//                             }
//                             onMouseLeave={(e) =>
//                               (e.currentTarget.style.backgroundColor = '#3b82f6') // Blue 500
//                             }
//                           >
//                             <MdEdit size={20} />
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                     {/* Render Subcategories */}
//                     {selectedCategory === category.name && (
//                       <tr>
//                         <td colSpan="3" style={{ padding: '12px 16px', backgroundColor: '#f9fafb' }}>
//                           <div
//                             style={{
//                               marginLeft: '2rem', // Indentation for nested content
//                               color: '#374151', // Gray 700 for text
//                               fontSize: '14px', // Slightly smaller font for subcategories
//                               lineHeight: '1.6', // Improved spacing between lines
//                               borderLeft: '4px solid #3b82f6', // Blue accent border
//                               paddingLeft: '1rem', // Spacing after the border
//                             }}
//                           >
//                             <p style={{ marginBottom: '8px', fontWeight: 'bold', color: '#1f2937' }}> {/* Gray 800 */}
//                               Subcategories:
//                             </p>
//                             {category.subcategories && category.subcategories.length > 0 ? (
//                               category.subcategories.map((subcategory, subIndex) => (
//                                 <p
//                                   key={subIndex}
//                                   style={{
//                                     margin: '4px 0',
//                                     padding: '4px 8px',
//                                     backgroundColor: '#e5e7eb', // Gray 200 for subcategory background
//                                     borderRadius: '4px',
//                                     display: 'inline-block',
//                                     marginRight: '8px', // Space between inline subcategories
//                                     color: '#111827', // Gray 900 for text
//                                     cursor: 'pointer',
//                                     transition: 'background-color 0.3s ease',
//                                   }}
//                                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d1d5db')} // Gray 300
//                                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e5e7eb')} // Gray 200
//                                 >
//                                   {subcategory}
//                                 </p>
//                               ))) : (<p style={{ margin: '8px 0', color: '#9ca3af', fontStyle: 'italic' }}> {/* Gray 400 */}
//                                 No Subcategories
//                               </p>)}

//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>

//           )}
//           {/* Show Edit From */}
//           {showEditModal && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//               <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 mt-14">
//                 <h2 className="text-2xl mb-4">Edit Category</h2>
//                 {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//                 {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
//                 <form onSubmit={handleEditSubmit}>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       Category Name
//                     </label>
//                     <input
//                       type="text"
//                       value={categoryName}
//                       onChange={(e) => setCategoryName(e.target.value)}
//                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       required
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2">
//                       Subcategories
//                     </label>

//                     {subcategories && subcategories.length > 0 ? (
//                       subcategories.map((subcategory, index) => (
//                         <div key={index} className="flex items-center mb-2">
//                           <input
//                             type="text"
//                             value={subcategory}
//                             onChange={(e) => handleSubcategoryChange(e, index)}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                           />
//                           <button
//                             type="button"
//                             onClick={() => handleRemoveSubcategory(index)}
//                             className="bg-red-500 text-white py-1 px-2 ml-2 rounded"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       ))
//                     ) : (
//                       <p className="text-gray-500">No subcategories available.</p>
//                     )}

//                     <div className="flex items-center mt-2">
//                       <input
//                         type="text"
//                         value={newSubcategory}
//                         onChange={(e) => setNewSubcategory(e.target.value)}
//                         placeholder="Add a subcategory"
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       />
//                       <button
//                         type="button"
//                         onClick={handleAddSubcategory}
//                         className="bg-blue-500 text-white py-1 px-3 ml-2 rounded"
//                       >
//                         Add
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex justify-between mt-4">
//                     <button
//                       type="submit"
//                       className="bg-blue-500 text-white py-2 px-4 rounded"
//                     >
//                       Update
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setShowEditModal(false)}
//                       className="bg-red-500 text-white py-2 px-4 rounded"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//           {/* Close Edit Form */}
//         </div>
//         <div className=' bg-blue mt-4'>
//           {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//           {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
//           {showCreateForm && (
//             <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-6 pt-2 pb-8 mb-4">
//               <h1 className="text-center text-2xl mb-2 border bg-gray-600 text-white rounded-lg p-1">
//                 Create Category
//               </h1>

//               {/* Category Name */}
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="categoryname"
//                 >
//                   Category Name
//                 </label>
//                 <input
//                   type="text"
//                   id="categoryname"
//                   value={categoryName}
//                   onChange={(e) => setCategoryName(e.target.value)}
//                   style={{
//                     display: 'block',
//                     width: '100%',
//                     padding: '10px 12px',
//                     fontSize: '16px',
//                     color: '#4a5568', // Gray 700
//                     backgroundColor: '#f9fafb', // Gray 100
//                     border: '1px solid #cbd5e0', // Gray 300
//                     borderRadius: '6px',
//                     transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.borderColor = '#3182ce'; // Blue 600
//                     e.currentTarget.style.boxShadow = '0 0 4px rgba(49, 130, 206, 0.5)'; // Blue shadow
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.borderColor = '#cbd5e0'; // Reset to Gray 300
//                     e.currentTarget.style.boxShadow = 'none';
//                   }}
//                   onFocus={(e) => {
//                     e.currentTarget.style.borderColor = '#3182ce'; // Blue 600
//                     e.currentTarget.style.boxShadow = '0 0 4px rgba(49, 130, 206, 0.5)'; // Blue shadow
//                   }}
//                   onBlur={(e) => {
//                     e.currentTarget.style.borderColor = '#cbd5e0'; // Reset to Gray 300
//                     e.currentTarget.style.boxShadow = 'none';
//                   }}
//                   required
//                 />
//               </div>

//               {/* Subcategory Field */}
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Subcategories
//                 </label>
//                 <div style={{ display: 'flex', gap: '8px' }}>
//                   <input
//                     type="text"
//                     value={newSubcategory}
//                     onChange={(e) => setNewSubcategory(e.target.value)}
//                     placeholder="Enter subcategory"
//                     style={{
//                       flex: 1,
//                       padding: '10px 12px',
//                       fontSize: '16px',
//                       color: '#4a5568', // Gray 700
//                       backgroundColor: '#f9fafb', // Gray 100
//                       border: '1px solid #cbd5e0', // Gray 300
//                       borderRadius: '6px',
//                     }}
//                   />
//                   <button
//                     type="button"
//                     onClick={handleAddSubcategory}
//                     style={{
//                       padding: '10px 16px',
//                       backgroundColor: '#3b82f6', // Blue 500
//                       color: 'white',
//                       borderRadius: '6px',
//                       fontWeight: 'bold',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     Add
//                   </button>
//                 </div>
//                 {/* Display added subcategories */}
//                 { subcategories.length > 0 && (
//                   // <ul style={{ marginTop: '8px', listStyle: 'disc', paddingLeft: '20px' }}>
//                   //   { subcategories.map((sub, index) => (
//                   //     <li
//                   //       key={index}
//                   //       style={{
//                   //         color: '#374151', // Gray 700
//                   //         marginBottom: '4px',
//                   //         fontSize: '14px',
//                   //       }}
//                   //     >
//                   //       {sub}
//                   //     </li>
//                   //   ))}
//                   // </ul>
//                   <ul style={{ marginTop: '8px', listStyle: 'disc', paddingLeft: '20px' }}>
//     {subcategories.map((sub, index) => (
//         <li key={index} style={{ color: '#374151', marginBottom: '4px', fontSize: '14px' }}>
//             {sub}
//         </li>
//     ))}
// </ul>

//                 )}
//               </div>

//               {/* Submit Button */}
//               <div className="flex items-center justify-between">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Create Category
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
// export default AdminCategory

import React, { useState, useEffect } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { FcPlus } from "react-icons/fc";

function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [newSubcategory, setNewSubcategory] = useState("");
  const [editCategoryId, setEditCategoryId] = useState(null); // Track edit mode
  const [showForm, setShowForm] = useState(false); // Control form visibility
  const [selectedCategory, setSelectedCategory] = useState(null);


  useEffect(() => {
    // Sample static categories
    // setCategories([
    //   {
    //           id:1,
    //           categoryName: 'Planners',
    //           image: 'path/to/men.jpg',
    //           subcategories: ['Dated Planners', 'Undated Planners'],
    //         },
    //         {
    //           id:2,
    //           categoryName: 'Journels',
    //           image: 'path/to/women.jpg',
    //         },
    //         {
    //           id:3,
    //           categoryName: 'Calendar',
    //           image: 'path/to/kids.jpg',
    //           subcategories: ['Desk Calendar', 'Wall Calendar'],
    //         },
    //         {
    //           id:4,
    //           categoryName: 'Others',
    //           subcategories: ['Sticky Notes', 'Stickers', 'To-Do Pads', 'Daily Tear-Off Planners', 'Weakly Tear-Off Planners', 'Seasonal Greetings', 'Stationary'],
    //         },,
    // ]);
  
    setCategories([
      {
        id: 1,
        categoryName: 'Planners',
        image: 'path/to/men.jpg',
        subcategories: ['Dated Planners', 'Undated Planners'],
      },
      {
        id: 2,
        categoryName: 'Journels',
        image: 'path/to/women.jpg',
        subcategories: [], // Ensure it's an array
      },
      {
        id: 3,
        categoryName: 'Calendar',
        image: 'path/to/kids.jpg',
        subcategories: ['Desk Calendar', 'Wall Calendar'],
      },
      {
        id: 4,
        categoryName: 'Others',
        subcategories: [
          'Sticky Notes',
          'Stickers',
          'To-Do Pads',
          'Daily Tear-Off Planners',
          'Weakly Tear-Off Planners',
          'Seasonal Greetings',
          'Stationary',
        ],
      },
    ]);
    }, []);

    // const handleAddSubcategory = () => {
    //   if (newSubcategory.trim()) {
    //     setSubcategories((prevSubcategories) => [...prevSubcategories, newSubcategory]);
    //     setNewSubcategory("");
    //   }
    // };
    const handleAddSubcategory = () => {
      if (newSubcategory.trim()) {
        setSubcategories((prevSubcategories) => {
          const updatedSubcategories = [...prevSubcategories, newSubcategory];
          console.log("Updated Subcategories after Add:", updatedSubcategories);
          return updatedSubcategories;
        });
        setNewSubcategory("");
      }
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!categoryName.trim()) return;
    
      setSubcategories((prevSubcategories) => {
        setCategories((prevCategories) => {
          return prevCategories.map((cat) =>
            cat.id === editCategoryId
              ? {
                  ...cat,
                  categoryName,
                  subcategories: [...new Set([...cat.subcategories, ...prevSubcategories])], // Ensures latest values
                }
              : cat
          );
        });
    
        return prevSubcategories; // Ensures `setSubcategories` gets updated properly
      });
    
      // Reset form after submission
      setTimeout(() => {
        setShowForm(false);
        setCategoryName("");
        setSubcategories([]);
      }, 0);
    };
    
    
            
    
    

  const handleRemoveSubcategory = (index) => {
    setSubcategories(subcategories.filter((_, i) => i !== index));
  };

  const handleOpenForm = (category = null) => {
    if (category) {
      // Edit mode
      setEditCategoryId(category.id);
      setCategoryName(category.categoryName);
      setSubcategories(category.subcategories || []);
    } else {
      // Create mode
      setEditCategoryId(null);
      setCategoryName("");
      setSubcategories([]);
    }
    setShowForm(true);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!categoryName.trim()) return;

  //   if (editCategoryId) {
  //     // Update category
  //     setCategories((prev) =>
  //       prev.map((cat) =>
  //         cat.id === editCategoryId
  //           ? { ...cat, categoryName, subcategories }
  //           : cat
  //       )
  //     );
  //   } else {
  //     const newCategory = {
  //       id: Date.now(),
  //       categoryName,
  //       subcategories,
  //     };
  //     setCategories([...categories, newCategory]);
  //   }

  //   setShowForm(false);
  // };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!categoryName.trim()) return;
  
  //   if (editCategoryId) {
  //     // Update category
  //     setCategories((prev) =>
  //       prev.map((cat) =>
  //         cat.id === editCategoryId
  //           ? { ...cat, categoryName, subcategories: subcategories || [] }
  //           : cat
  //       )
  //     );
  //   } else {
  //     // Create new category
  //     const newCategory = {
  //       id: Date.now(),
  //       categoryName,
  //       subcategories: subcategories || [], // Ensure it's always an array
  //     };
  //     setCategories([...categories, newCategory]);
  //   }
  
  //   setShowForm(false);
  //   setCategoryName("");
  //   setSubcategories([]); // Reset form after submission
  // };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!categoryName.trim()) return;
  
  //   if (editCategoryId) {
  //     // Update category
  //     setCategories((prev) =>
  //       prev.map((cat) =>
  //         cat.id === editCategoryId
  //           ? { ...cat, categoryName, subcategories: subcategories ?? [] }
  //           : cat
  //       )
  //     );
  //   } else {
  //     // Create new category
  //     const newCategory = {
  //       id: Date.now(),
  //       categoryName,
  //       subcategories: subcategories ?? [], // Ensure it's always an array
  //     };
  //     setCategories((prevCategories) => [...prevCategories, newCategory]);
  //   }
  
  //   setShowForm(false);
  //   setCategoryName("");
  //   setSubcategories([]); // Reset form after submission
  // };
  
  
  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory((prev) => (prev === categoryName ? null : categoryName));
  };
  
  return (
    <div className="mt-8 mb-28">
      <div className="flex gap-32">
        <h1 className="text-2xl font-bold ml-2">Category Details</h1>
        <button
          onClick={() => handleOpenForm()}
          className="flex items-end text-xl text-white border-black rounded-lg px-2 py-1 gap-1 bg-green-600"
        >
          <FcPlus size={28} /> Create
        </button>
      </div>

      {/* Form for Create / Edit */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 mt-4">
          <h2 className="text-2xl mb-4">
            {editCategoryId ? "Edit Category" : "Create Category"}
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="border p-2 w-full mb-2"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
            />
            <div>
              <h3 className="text-lg font-semibold">Subcategories</h3>
              {subcategories.map((sub, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    className="border p-1 w-full"
                    value={sub}
                    onChange={(e) =>
                      setSubcategories(
                        subcategories.map((s, i) =>
                          i === index ? e.target.value : s
                        )
                      )
                    }
                  />
                  <button
                    type="button"
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleRemoveSubcategory(index)}
                  >
                    X
                  </button>
                </div>
              ))}
              <input
                type="text"
                className="border p-1 w-full mt-2"
                placeholder="New Subcategory"
                value={newSubcategory}
                onChange={(e) => setNewSubcategory(e.target.value)}
              />
              <button
                type="button"
                className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
                onClick={handleAddSubcategory}
              >
                + Add Subcategory
              </button>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            >
              {editCategoryId ? "Update" : "Create"}
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Table */}
      <table className="bg-white border rounded-lg w-1/2 mt-4">
        <thead className="bg-gray-600 text-white">
          <tr>
            <th className="p-3">S.No</th>
            <th className="p-3">Category Name</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr
              key={category.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="p-3">{index + 1}</td>
       
<td
  style={{
    padding: '12px 16px',
    color: '#3b82f6',
    fontWeight: 'bold',
    cursor: 'pointer',
  }}
  onClick={() => handleCategoryClick(category.categoryName)}
>
  {category.categoryName}

  {/* Subcategories displayed directly below the category name */}
  {selectedCategory === category.categoryName && (
    <div style={{ marginTop: '8px', padding: '8px', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
      <p style={{ fontWeight: 'bold', color: '#1f2937' }}>Subcategories:</p>
      {category.subcategories && category.subcategories.length > 0 ? (
        category.subcategories.map((subcategory, subIndex) => (
          <p
            key={subIndex}
            style={{
              margin: '4px 0',
              padding: '4px 8px',
              backgroundColor: '#e5e7eb',
              borderRadius: '4px',
            }}
          >
            {subcategory}
          </p>
        ))
      ) : (
        <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>No Subcategories</p>
      )}
    </div>
  )}
</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => handleOpenForm(category)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminCategory;
