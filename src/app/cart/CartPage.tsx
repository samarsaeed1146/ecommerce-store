"use client";
import CartCard from "@/components/CartCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../store/Hooks";

const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const total = cartArray.reduce((total, arr) => {
    return total + (arr.price - (arr.price * arr.discount) / 100) * arr.qty;
  }, 0);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1">
      {/* items */}
      <div className="col-span-2">
        <CartCard
        />
      </div>
      {/* summary */}
      <div className="bg-myBlackHead/5 p-5 rounded-xl">
        {/* heading */}
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead uppercase">
          order summary
        </h2>
        {/* divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* pricing */}
        <div className="scroll-m-20 text-sm font-medium text-myBlackHeadPara tracking-tight">
          {/* product prices */}
          <div className="flex items-center justify-between capitalize">
            <h2>sub total</h2>
            <h2>${total}</h2>
          </div>
          {/* Delivery charges */}
          <div className="flex items-center justify-between capitalize">
            <h2>delivery charges</h2>
            <h2>TBD</h2>
          </div>
          {/* service charges */}
          <div className="flex items-center justify-between capitalize">
            <h2>sales tax</h2>
            <h2>TBD</h2>
          </div>
        </div>
        {/* divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* estimated total */}
        <div className="flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-myBlackHead">
          <h2>estimated total</h2>
          <h2>${total}</h2>
        </div>
        {/* divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* checkout button */}
        <div className="flex items-center justify-center w-full">
          <Button className="bg-myBlackHead hover:bg-transparent duration-300 text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md uppercase rounded-xl">
            proceed to checkout
          </Button>
        </div>
        {/* divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* note */}
        <p className="text-xs font-semibold tracking-tight text-myBlackHead w-[97%] text-center italic capitalize">
          {`* Delivery charges and the sales tax will be calculated in the checkout page`}
        </p>
      </div>
    </div>
  );
};

export default CartPage;
