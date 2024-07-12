"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { TiShoppingCart } from "react-icons/ti";
import { useAppDispatch } from "@/app/store/Hooks";
import { addToCart } from "@/app/store/feature/Cart";

const AddToCartToast = ({ cartItem }: any) => {
  const dispatch = useAppDispatch();
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
    <>
      <div className="w-fit" onClick={() => dispatch(addToCart(cartItem))}>
        <Button
          onClick={notify}
          className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
        >
          <TiShoppingCart className="mr-2 w-4 h-4 group-hover:text-myOrange duration-300" />
          Add to Cart
        </Button>
      </div>
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
    </>
  );
};

export default AddToCartToast;
