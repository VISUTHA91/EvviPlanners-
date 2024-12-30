import React, { useState } from "react";

const ProductCreate = () => {
  const [categories, setCategories] = useState([
    { name: "Planners", subcategories: ["DatedPlanners", "UnDatedPlanners"] },
    { name: "Journal" },
    { name: "Calender", subcategories: ["Wall Calender", "Desk Calender"] },
    { name: "Others", subcategories: ['Sticky Notes', 'Stickers', 'To-Do Pads', 'Daily Tear-Off Planners', 'Weakly Tear-Off Planners', 'Seasonal Greetings', 'Stationary'] },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [specifications, setSpecifications] = useState(
    Array(10).fill("") // Array of 10 empty strings
  );

  const handleCategoryChange = (e) => {
    const category = categories.find((cat) => cat.name === e.target.value);
    setSelectedCategory(e.target.value);
    setSubcategories(category ? category.subcategories : []);
    setSelectedSubcategory(""); // Reset subcategory
  };

  const handleSpecificationChange = (index, value) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[index] = value;
    setSpecifications(updatedSpecifications);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      category: selectedCategory,
      subcategory: selectedSubcategory,
      name: productName,
      price,
      specifications,
    };
    console.log("Product Data:", productData);
    // Add API call or form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-5xl mx-auto mb-20 -ml-10"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Create Product</h2>

      {/* Flex container */}
      <div className="flex flex-wrap gap-6">
        {/* Category Name */}
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-2">
            Category Name
          </label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Name */}
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-2">
            Subcategory Name
          </label>
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="" disabled>
              Select Subcategory
            </option>
            {subcategories.map((sub, index) => (
              <option key={index} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* Product Name */}
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-2">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter Product Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Price */}
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter Price"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-6">
        <label className="block text-gray-700 font-bold mb-2">Specifications</label>
        <div className="grid grid-cols-2 gap-4">
          {specifications.map((spec, index) => (
            <input
              key={index}
              type="text"
              value={spec}
              onChange={(e) => handleSpecificationChange(index, e.target.value)}
              placeholder={`Line ${index + 1}`}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            />
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Create Product
        </button>
      </div>
    </form>
  );
};

export default ProductCreate;
