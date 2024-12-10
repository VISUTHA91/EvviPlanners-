import React from 'react'
import ProductCard from '../Components/ProductCard';
import { bigdreams,
biggoals,
bigfloralgarden,
busyatwork,
floralparadise,
flowersinblue,
happystripes,
marblemaze,
lush,
magicisevery,
flowers,
blackfloral,
floral } from '../assets/Image';

function ProductListpage() {
    const products = [
        {
            id:1,
          name: "Planners",
          price: 1000,
          offerPrice: 750,
          image: bigdreams,
        },
        {
            id:2,
          name: "DatedPlanner",
          price: 1000,
          offerPrice: 900,
          image: biggoals,
        },
        {
            id:3,
          name: "FloralPrint",
          price: 2000,
          offerPrice: 1500,
          image: bigfloralgarden,
        },
        {
            id:4,
          name: "Big Dreams",
          price: 800,
          offerPrice: 700,
          image: busyatwork,
        },
        {
            id:5,
          name: "Black Floral",
          price: 2000,
          offerPrice: 1500,
          image: floralparadise,
        },
        {
            id:6,
          name: "Marble Maze",
          price: 1400,
          offerPrice: 1200,
          image: flowersinblue,
        },
        {
            id:7,
          name: "LushForest",
          price: 2500,
          offerPrice: 2000,
          image: happystripes,
        },
      ];
  return (
    <div className='flex lg:flex-row flex-col mb-10 bg-white font-PTSerif'>
    {/* <div className='lg:w-1/5'>
      <Filtercard
        updateFilterOptions={updateFilterOptions}
        selectedPrice={selectedPrice}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        setSelectedPrice={setSelectedPrice}
        setSelectedColor={setSelectedColor}
        setSelectedSize={setSelectedSize}
        categoryName={categoryName}
        categoryId = {categoryId}
      />
    </div> */}
    <div className='md:mx-aut w-full sm:w-full sm:ml-6 bg-rose-10 mt-4 '>
      <div className='flex justify-center items-center w-full p-4 mr-'>
        <h2 className='text-4xl lg:max-w-lg font-bold'> Our Products</h2>
      </div>
      <div className='flex flex-wrap gap-4 justify-center md:flex-row  p-4 md-flex-wrap mt-8 mb-8'>
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id} {...product}
             />
          ))
        ) : (
        <NoProductsMessage />
        )}
      </div>
    </div>
  </div>
  )
}

export default ProductListpage