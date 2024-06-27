"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCart from "./BestSellingCart";

const FeaturedProducts = () => {
  // my Data
  const bestSell = [
    {
      src: "/picture/best selling-1.jpg",
      alt: "Black T-Shirt",
      title: "Black Simple t-shirt",
      description: "Best Quality t-shirt For Women.",
      price: 110,
      Category: "tops",
      slug: "black-t-shirt",
    },
    {
      src: "/picture/best selling-2.jpg",
      alt: "Creamy printed",
      title: "Creamy Printed Design Bag",
      description:
        "New Printed Design Bag For Women & It Is Comfortable For Carry Bag.",
      price: 380,
      Category: "bag",
      slug: "creamy-printed",
    },
    {
      src: "/picture/best selling-3.jpg",
      alt: "Shoes",
      title: "Gray & Pink Shoes",
      description:
        "Best Quality Shoes in Wear & Walk & Its Design For Women Comfort.",
      price: 525,
      Category: "shoes",
      slug: "gray-shoes",
    },
    {
      src: "/picture/tops-3.jpg",
      alt: "tops",
      title: "Summer Collection",
      description:
        "Best Quality Shoes in Wear & Walk & Its Design For Women Comfort.",
      price: 525,
      Category: "shoes",
      slug: "gray-shoes",
    },
  ];
  // carousel setting
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="mb-40 mt-40">
      <div className="text-center mb-20">
        <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl">
          Featured Products
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* carousel */}
      <Slider {...settings}>
        {bestSell.map((items, i) => (
          <BestSellingCart
            key={i}
            src={items.src}
            alt={items.alt}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.Category}
            slug={items.slug}
          />
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
