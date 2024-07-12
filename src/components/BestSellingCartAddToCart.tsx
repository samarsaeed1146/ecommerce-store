'use client'
import { TiShoppingCart } from "react-icons/ti";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/app/store/Hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/feature/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BestSellingCartAddToCart = ({ slug }: { slug: string }) => {
  // calling product
  const product = useAppSelector((state) => state.product).find(
    (val) => val.slug == slug
  );
  //   add to cart
  const dispatch = useAppDispatch();
  //   setting cart item
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image,
    slug: product?.slug,
    price: product?.price,
    discount: product?.discount,
    category: product?.category,
    size: product?.size[0],
    qty: product?.qty,
    color: product?.color[0],
  });
  //   toast
  const notify = () =>
    toast.success("Product Added Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl ">
            <TiShoppingCart className="mr-2 w-4 h-4 group-hover:text-myOrange duration-300" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem]">
          {/* size */}
          <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
              Size
            </span>
            <div className="relative">
              <select
                onChange={(e) =>
                  setCartItem({ ...cartItem, size: e.target.value })
                }
                className="select select-bordered bg-[#FAFAFA] text-myBlackHeadPara"
              >
                <option disabled defaultValue={"Select Size"}>
                  Select Size
                </option>
                {product?.size.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          {/* colors */}
          <div className="flex mt-5">
            <span className="mr-3 scroll-m-20 text-myBlackHead text-base font-semibold tracking-tight">
              Color
            </span>
            {product?.color.map((item, i) => (
              <button
                key={i}
                onClick={() => setCartItem({ ...cartItem, color: item })}
                className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
          {/* add to cart */}
          <div className="w-full" onClick={notify}>
            <Button
              onClick={() => dispatch(addToCart(cartItem))}
              className="group mt-5 w-full bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl "
            >
              <TiShoppingCart className="mr-2 w-4 h-4 group-hover:text-myOrange duration-300" />
              Add to Cart
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default BestSellingCartAddToCart;
