import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { LuPlus } from "react-icons/lu";
import { RiSubtractLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";

const CartCard = ({
  src,
  title,
  size,
  price,
}: {
  src: string;
  title: string;
  size: string;
  price: number;
}) => {
  return (
    <div className="flex p-10">
      {/* Image */}
      <Image
        src={src}
        alt={title}
        width={80}
        height={80}
        className="w-[100px] h-[100px]"
      />
      {/* some Info */}
      <div className="flex px-5 justify-between items-center w-full">
        <div>
          {/* titile */}
          <h2 className="text-sm font-semibold line-clamp-1 text-myBlackHead">
            {title}
          </h2>
          {/* size */}
          <p className="mt-2 text-sm font-semibold text-myBlackHeadPara/80 leading-none line-clamp-1">
            size:&nbsp;
            <span>{size}</span>
          </p>
          {/* quantity */}
          <div className="mt-2 flex items-center">
            <Button className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300">
              <RiSubtractLine className=" h4 w-4 group-hover:text-myBlackHead" />
            </Button>
            <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackHeadPara/80">
              1
            </div>
            <Button className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300">
              <LuPlus className=" h4 w-4 group-hover:text-myBlackHead font-extrabold" />
            </Button>
          </div>
          {/* price and delete */}
          <div className="md:hidden flex flex-col gap-2">
            <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead md:mt-0 mt-2">
              <span>Price:&nbsp;</span>${price}
            </h3>
            <BsTrash className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* price and delete */}
      <div className="hidden md:flex flex-col items-end gap-5">
        <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
          <span>Price:&nbsp;</span>${price}
        </h3>
        <BsTrash className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default CartCard;
