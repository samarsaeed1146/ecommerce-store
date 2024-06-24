import BestSellingCart from "@/components/BestSellingCart";
import React from "react";

const Category = () => {
  const bestSell = [
    {
      src: "/picture/top-2.jpg",
      alt: "t-shirt",
      title: "Dark Blue & Light Brown Jecket",
      description: "Leather Jacket Feel Less Cold For Women.",
      price: 160,
      Category: "tops",
      slug: "leather-jecket",
    },
    {
      src: "/picture/best selling-1.jpg",
      alt: "Black T-Shirt",
      title: "Black Simple t-shirt",
      description: "Best Quality t-shirt For Women.",
      price: 110,
      Category: "tops",
      slug: "black-t-shirt"
    },
    {
      src: "/picture/tops-3.jpg",
      alt: "Net T-Shirt",
      title: "Summer Collection t-shirt",
      description: "Its Is Very Comfortable for Summer Collection.",
      price: 90,
      Category: "tops",
      slug: "comfortable-cloth"
    },
    {
      src: "/picture/tops-4.jpg",
      alt: "T-Shirt",
      title: "White & Black Lining t-shirt",
      description: "Best Quality t-shirt For Women.",
      price: 95,
      Category: "tops",
      slug: "lining-t-shirt"
    },
    {
      src: "/picture/tops-5.jpg",
      alt: "T-Shirt",
      title: "Printed top",
      description: "Printed top For Women.",
      price: 90,
      Category: "tops",
      slug: "printed-top"
    },
    {
      src: "/picture/tops-6.jpg",
      alt: "T-Shirt",
      title: "Coat",
      description: "Creamy color coat For Women.",
      price: 285,
      Category: "tops",
      slug: "coat"
    },
  ];
  return (
    <div className="mb-40 mt-20">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl capitalize">
          Tops
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Category page start */}
      <div className="flex flex-wrap justify-center gap-5">
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
      </div>
    </div>
  );
};

export default Category;
