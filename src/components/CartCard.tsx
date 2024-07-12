"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { LuPlus } from "react-icons/lu";
import { RiSubtractLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@/app/store/Hooks";
import { addCart, delItem, subtractCart } from "@/app/store/feature/Cart";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item, i) => (
          <div key={i} className="flex p-10">
            {/* Image */}
            <Image
              src={item.image[0]}
              alt={item.title}
              width={80}
              height={80}
              className="w-[100px] h-[100px]"
            />
            {/* some Info */}
            <div className="flex px-5 justify-between items-center w-full">
              <div>
                {/* titile */}
                <h2 className="text-sm font-semibold line-clamp-1 text-myBlackHead">
                  {item.title}
                </h2>
                {/* size */}
                <p className="mt-2 text-sm font-semibold text-myBlackHeadPara/80 leading-none line-clamp-1">
                  size:&nbsp;
                  <span>{item.size}</span>
                </p>
                {/* color */}
                <p className="mt-2 text-sm font-semibold text-myBlackHeadPara/80 leading-none line-clamp-1">
                  color:&nbsp;
                  <span>
                    <button
                      className="border-2 border-gray-300 mr-1 rounded-full w-[15px] h-[15px] focus:outline-none active:border-none focus:border-none"
                      style={{ backgroundColor: item.color }}
                    />
                  </span>
                </p>
                {/* quantity */}
                <div className="mt-2 flex items-center">
                  <Button
                    onClick={() => dispatch(subtractCart(item))}
                    className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300"
                  >
                    <RiSubtractLine className=" h4 w-4 group-hover:text-myBlackHead" />
                  </Button>
                  <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackHeadPara/80">
                    {item.qty}
                  </div>
                  <Button
                    onClick={() => dispatch(addCart(item))}
                    className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300"
                  >
                    <LuPlus className=" h4 w-4 group-hover:text-myBlackHead font-extrabold" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;
