import React from 'react';
import JournalCard from './JournalCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {bigdreams,
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
floral,blue} from "../assets/Image";

function JournalCollection() {
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
    
      // const products = [
      //   {
      //     name: "Planners",
      //     price: 1000,
      //     offerPrice: 750,
      //     image: lush,
      //   },
      //   {
      //     name: "Dated Planner",
      //     price: 1000,
      //     offerPrice: 900,
      //     image: floral,
      //   },
      //   {
      //     name: "Floral Print",
      //     price: 2000,
      //     offerPrice: 1500,
      //     image:flowers,
      //   },
      //   {
      //     name: "Big Dreams",
      //     price: 800,
      //     offerPrice: 700,
      //     image: magicisevery,
      //   },
      //   {
      //     name: "Black Floral",
      //     price: 2000,
      //     offerPrice: 1500,
      //     image: marblemaze,
      //   },
      //   {
      //     name: "Marble Maze",
      //     price: 1400,
      //     offerPrice: 1200,
      //     image: blue,
      //   },
      //   {
      //     name: "Lush Forest",
      //     price: 2500,
      //     offerPrice: 2000,
      //     image: blackfloral,
      //   },
      // ];
      const products = [
        {
          name: "Planners",
          price: 1000,
          offerPrice: 750,
          image: bigdreams,
        },
        {
          name: "Dated Planner",
          price: 1000,
          offerPrice: 900,
          image: floralparadise,
        },
        {
          name: "Floral Print",
          price: 2000,
          offerPrice: 1500,
          image:flowersinblue,
        },
        {
          name: "Big Dreams",
          price: 800,
          offerPrice: 700,
          image: busyatwork,
        },
        {
          name: "Black Floral",
          price: 2000,
          offerPrice: 1500,
          image: bigfloralgarden,
        },
        {
          name: "Marble Maze",
          price: 1400,
          offerPrice: 1200,
          image: biggoals,
        },
        {
          name: "Lush Forest",
          price: 2500,
          offerPrice: 2000,
          image: happystripes,
        },
      ];
  
  
      return (
    <>
    <div className="flex flex-col justify-center items-center p-2 font-PTSerif w-full bg[#A1EEBD]">
        <div className="p-4 w-full overflow-x-hidden">
          <div className="flex text-3xl font-bold justify-center items-center">
            <h1>Journal Collections</h1>
          </div>
          {products && (
          <Slider className="flex flex-row flex-wrap gap-6  justify-center w-full items-center p-4  " {...settings}>
       {products.map((product, index) => (
          <div key={index} className="px-4 mt-6">
            <JournalCard
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
    </>
  )
}

export default JournalCollection