import React from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleCard from "./SampleCard";
import {bigdreams,
  biggoals,
  bigfloralgarden,
  busyatwork,
  floralparadise,
  flowersinblue,
  happystripes} from "../assets/Image";



function CallendarCollection() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    speed: 500,
    cssEase: "ease-in-out",
    arrows: true,
    lazyLoad: "ondemand",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  // Next Arrow Component
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#900566",
          borderRadius: "50%",
          zIndex: 1,
          cursor: "pointer",
          marginRight: "8px",
        }}
        onClick={onClick}
      ></div>
    );
  }
  
  // Previous Arrow Component
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#900566",
          borderRadius: "50%",
          zIndex: 1,
          cursor: "pointer",
          marginLeft: "8px",
        }}
        onClick={onClick}
      ></div>
    );
  }

  const products = [
    {
      name: "Big Dreams",
      price: 1000,
      offerPrice: 750,
      image: bigdreams,
    },
    {
      name: "Floral Paradise",
      price: 1000,
      offerPrice: 900,
      image: floralparadise,
    },
    {
      name: "Flowers in Blue",
      price: 2000,
      offerPrice: 1500,
      image:flowersinblue,
    },
    {
      name: "Busy At Work",
      price: 800,
      offerPrice: 700,
      image: busyatwork,
    },
    {
      name: "Floral Garden",
      price: 2000,
      offerPrice: 1500,
      image: bigfloralgarden,
    },
    {
      name: "Big Goals",
      price: 1400,
      offerPrice: 1200,
      image: biggoals,
    },
    {
      name: "Happy Stripes",
      price: 2500,
      offerPrice: 2000,
      image: happystripes,
    },
  ];

  return (
<div className="flex flex-col justify-center items-center p-2 font-PTSerif w-full bg-white">
        <div className="p-8 w-full overflow-x-hidden">
          <div className="flex text-3xl font-bold justify-center items-center">
            <h1>2025 Calendars Collections</h1>
          </div>
          {products && (
          <Slider className="flex flex-row flex-wrap gap-6 justify-center w-full items-center p-4" {...settings}>
       {products.map((product, index) => (
          <div key={index} className="px-4">
            <SampleCard
              image={product.image}
              name={product.name}
              price={product.price}
              offerPrice={product.offerPrice}
            />
          </div>
        ))}
          </Slider>
          )}
        </div>
      </div>
  );
}

export default CallendarCollection;
