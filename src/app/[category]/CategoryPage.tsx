"use client";
import BestSellingCart from "@/components/BestSellingCart";
import { useAppSelector } from "../store/Hooks";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const product = useAppSelector((state) => state.product);
  const bestSell = product.filter((val) => val.category === params.category);
  return (
    <div>
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl capitalize">
          {params.category}
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Category page start */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items: any, i) => (
          <BestSellingCart
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.Category}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
