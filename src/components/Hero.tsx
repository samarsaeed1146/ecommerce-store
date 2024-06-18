import Image from "next/image";
import heroImg from "../../public/images.jpeg";
import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="">
      <div className="hero min-h-screen custom-img bg-fixed bg-center bg-no-repeat">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">Futuristic <span className="text-myOrange">Clothes</span></h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">
              Upgrade your Wardrobe with Sleek & Stylish Apparels and Top-Notch
              Shoes
            </p>
            <Button className="outline outline-offset-2 outline-1 text-myWhite group rounded-xl font-bold hover:rounded-3xl duration-700 hover:outline-myOrange">
              <GiShoppingBag className="mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce"/> Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
