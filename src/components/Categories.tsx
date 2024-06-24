import Image from "next/image";
import React from "react";
import topsImg from "../../public/picture/tops.jpg";
import pantsImg from "../../public/picture/pants.jpg";
import shoesImg from "../../public/picture/shoes.jpg";
import AccesImg from "../../public/picture/accesories.jpg";

import Link from "next/link";

const Categories = () => {
  return (
    <div className="mb-40 mt-40 px-4">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl">
          Our Categories
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Categories 1 */}
        <div className="mb-7 md:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/tops"}>
            <Image
              src={topsImg}
              alt="Tops"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Tops</h1>
            </div>
            <div className="block lg:hidden absolute bottom-20 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Tops</h1>
            </div>
          </Link>
        </div>
        {/* Categories 2 */}
        <div className="mb-7 md:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/pants"}>
            <Image
              src={pantsImg}
              alt="Pants"
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">pants</h1>
            </div>
            <div className="block lg:hidden absolute bottom-20 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">pants</h1>
            </div>
          </Link>
        </div>
        {/* Categories 3 */}
        <div className="mb-7 md:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/accessories"}>
            <Image
              src={AccesImg}
              alt="Accessories"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Accessories</h1>
            </div>
            <div className="block lg:hidden absolute bottom-20 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Accessories</h1>
            </div>
          </Link>
        </div>
        {/* Categories 4 */}
        <div className="mb-7 md:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shoes"}>
            <Image
              src={shoesImg}
              alt="Shoes"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">shoes</h1>
            </div>
            <div className="block lg:hidden absolute bottom-20 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">shoes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
