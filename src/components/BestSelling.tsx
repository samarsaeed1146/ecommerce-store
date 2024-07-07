'use client'

import { title } from "process";
import React from "react";
import BestSellingCart from "./BestSellingCart";
import Categories from "./Categories";
import { useAppSelector } from "@/app/store/Hooks";

const BestSelling = () => {
  const product = useAppSelector((state) => state.product);
  const bestSell = product.slice(0, 3);
  // const bestSell = [
  //   {
  //     src: "/picture/best selling-1.jpg",
  //     alt: "Black T-Shirt",
  //     title: "Black Simple t-shirt",
  //     description: "Best Quality t-shirt For Women.",
  //     price: 110,
  //     Category:"tops",
  //     slug: "black-t-shirt",
  //   },
  //   {
  //     src: "/picture/best selling-2.jpg",
  //     alt: "Creamy printed",
  //     title: "Creamy Printed Design Bag",
  //     description:
  //       "New Printed Design Bag For Women & It Is Comfortable For Carry Bag.",
  //     price: 380,
  //     Category:"bag",
  //     slug: "creamy-printed",
  //   },
  //   {
  //     src: "/picture/best selling-3.jpg",
  //     alt: "Shoes",
  //     title: "Gray & Pink Shoes",
  //     description:
  //       "Best Quality Shoes in Wear & Walk & Its Design For Women Comfort.",
  //     price: 525,
  //     Category:"shoes",
  //     slug: "gray-shoes",
  //   },
  // ];
  return (
    <div className="mb-40 mt-40">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl">
          Best Selling Products
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* best selling products */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items:any, i) => (
          <BestSellingCart
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
