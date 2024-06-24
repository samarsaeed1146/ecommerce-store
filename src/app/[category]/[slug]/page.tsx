import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosHeart } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { LuPlus } from "react-icons/lu";
import { RiSubtractLine } from "react-icons/ri";
import SlugComponent from "@/components/SlugComponent";

const Slug = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* image */}
          {/* <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          /> */}
          <SlugComponent />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* category */}
            <h2 className="text-gray-500 tracking-widest scroll-m-20 text-sm font-semibold">
              Women Tops
            </h2>
            {/* title */}
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
              Dark Blue & Light Brown Jecket
            </h1>
            {/* rating */}
            <div className="rating rating-sm mt-2">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
            </div>
            <div className="divider"></div>
            {/* description */}
            <p className="leading-relaxed scroll-m-20 text-base font-normal text-myBlackHeadPara">
              Leather Jacket Feel Less Cold For Women. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Rem nobis et corrupti eos
              adipisci labore quibusdam commodi voluptate. Non obcaecati quae
              alias, molestiae suscipit aliquam. Deleniti exercitationem
              expedita labore rem suscipit odio possimus! Animi laborum,
              deserunt eius, tempora dolorum tempore rerum suscipit facilis
              dolores similique quos eum provident totam dolore.
            </p>
            <div className="flex mt-6 items-center mb-5">
              {/* colors */}
              <div className="flex">
                <span className="mr-3 scroll-m-20 text-myBlackHead text-base font-semibold tracking-tight">
                  Color
                </span>
                <button className="border-2 border-gray-300 mr-1 bg-white rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 mr-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 mr-1 bg-blue-600 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 mr-1 bg-black rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
              </div>
              {/* size */}
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                  Size
                </span>
                <div className="relative">
                  <select className="select select-bordered">
                    <option disabled selected>
                      Select Size
                    </option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                </div>
              </div>
            </div>
            {/* quantity */}
            <div className="flex items-center ">
              <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                Quantity
              </span>
              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <RiSubtractLine className="mr-2 w-4 h-4 group-hover:text-myOrange duration-300" />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                1
              </div>
              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <LuPlus className="mr-2 w-4 h-4 group-hover:text-myOrange duration-300" />
                Add
              </Button>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              {/* price */}
              <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
                $58.00
              </span>
              {/* add to cart */}
              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
                <TiShoppingCart className="mr-2 w-4 h-4 group-hover:text-myOrange duration-300" />
                Add to Cart
              </Button>
            </div>
            {/* buy now*/}
            <Button className="mt-4 w-full group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
              <IoIosHeart className="mr-2 w-4 h-4 group-hover:text-myOrange duration-300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slug;
