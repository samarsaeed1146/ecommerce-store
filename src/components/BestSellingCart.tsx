import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { IoIosHeart } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import bestImgOne from "../../public/picture/best selling-1.jpg";
import Link from "next/link";

const BestSellingCart = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  slug,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
}) => {
  return (
    <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
      <Link href={`/${category}/${slug}`}>
        {/* image */}
        <div className="block h-[23rem] rounded overflow-hidden">
          <Image src={src} alt="some" width={400} height={400} />
        </div>
        {/* typography */}
        <div className="">
          <h2 className="mt-4 scroll-m-20 border-b pb-2 text-xl font-bold tracking-tight first:mt-0 text-myBlackHead line-clamp-1">
            {title}
          </h2>
          <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackHeadPara line-clamp-2">
            {description}
          </p>
          <div className="flex gap-3">
            <p
              className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-2 ${
                discount > 0 &&
                "line-through decoration-2 decoration-myOrange/70"
              }`}
            >
              ${price}
            </p>
            {/* discounted value */}
            {discount > 0 && (
              <p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-2">
                ${price - (price * discount) / 100}
              </p>
            )}
          </div>
        </div>
      </Link>
      {/* button */}
      <div>
        <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 right-2">
          <TiShoppingCart className="mr-2 w-4 h-4 group-hover:text-myOrange duration-300" />
          Add to Cart
        </Button>
        <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2">
          <IoIosHeart className="mr-2 w-4 h-4 group-hover:text-myOrange duration-300" />
          Buy Now
        </Button>
        {discount > 0 && (
          <div className="scroll-m-20 text-sm font-semibold tracking-tight text-myWhite bg-myOrange absolute -top-2 left-2 w-[100px] p-2 text-center uppercase rounded-tl-xl rounded-bl-xl myDiscount">{`${discount}% off`}</div>
        )}
      </div>
    </div>
  );
};

export default BestSellingCart;
