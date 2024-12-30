import React from 'react'
// import { getAllUser } from '../../api/apiServices';
import { useEffect } from 'react';
import { useState } from 'react';




function Userlist() {

  const [userlist, setUserlist] = useState([]);
  

//   const fetchuserlist = async () => {
//     try {
//       const response = await getAllUser(); // Fetch categories from backend
//       console.log("Fetched Data",response)
//       setUserlist(response.alluser); // Store fetched categories
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

// useEffect(() => {
//   fetchuserlist(); // Fetch the user list when the component mounts
// }, []);

// const deleteuser = async (userId) => {
//   const confirmDelete = window.confirm('Are you sure you want to delete this user?');
//   if (!confirmDelete) return;
//   setIsDeleting(true);
//   try {
//     await deleteuser(userId); // Call API to delete user
//     fetchuserlist(); // Refetch the user list after successful deletion
//   } catch (error) {
//     console.error('Error deleting user:', error);
//   } finally {
//     setIsDeleting(false);
//   }
// };

const fetchuserlist = async () => {
  try {
    // Static data for demonstration purposes
    const response = {
      alluser: [
        { name: "John Doe", phoneNumber: "123-456-7890", email: "john.doe@example.com" },
        { name: "Jane Smith", phoneNumber: "987-654-3210", email: "jane.smith@example.com" },
        { name: "Alice Johnson", phoneNumber: "555-123-4567", email: "alice.johnson@example.com" },
        { name: "Bob Brown", phoneNumber: "444-555-6666", email: "bob.brown@example.com" },
      ],
    };

    console.log("Fetched Data", response);
    setUserlist(response.alluser); // Store fetched categories
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

useEffect(() => {
  fetchuserlist(); // Fetch the user list when the component mounts
}, []);

  return (
    <div className=''>
  <h1 className="text-2xl font-bold  mt-12 ml-2 ">User Details</h1>
    {userlist && (
      <div className="bg-white rounded-lg shadow-md p-4">

      <table className="min-w-full table-auto">

        <thead>
          <tr className="bg-gray-200">
          <th className="py-2 px-4 border-b">S.No</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Contact</th>
            {/* <th className="py-2 px-4 border-b">Password</th> */}
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {userlist.map((user ,index) => (
            <tr key={user._id} className="hover:bg-gray-100 w-1/4">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.phoneNumber}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
                  onClick={(e) => {
                    deleteuser(user._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )}
  {/* </div> */}
</div>


  )
}

export default Userlist