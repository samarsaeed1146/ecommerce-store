import React from "react";
import promOne from "../../public/picture/promotion-1.jpg";
import promTwo from "../../public/picture/promotion-2.jpg";

const Promotion = () => {
  return (
    <div className="mb-40 mt-40">
      {/* header */}
      <div className="text-center mb-20">
        <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl">
          Our Promotions
        </h1>
        <div className="flex mt-4 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Promotion */}
      <div className="grid grid-col-1 md:grid-cols-2 gap-6 px-2">
        {/* First Child */}
        <div className="hero h-[30rem] promo-1 rounded-xl">
          <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold text-myWhite tracking-tight uppercase">
                Get upto <span className="text-myOrange">60%</span> off
              </h1>
              <p className="mt-2 scroll-m-20 text-base font-medium text-myWhite tracking-tight">
                Flash Sale, get upto 60% off on the season Variant.
              </p>
            </div>
          </div>
        </div>
        {/* Second Child */}
        <div className="hero h-[30rem] promo-2 rounded-xl">
          <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold text-myWhite tracking-tight uppercase">
                Get upto <span className="text-myOrange">30%</span> off
              </h1>
              <p className="mt-2 scroll-m-20 text-base font-medium text-myWhite tracking-tight">
                Flash Sale, get upto 30% off on the New Jewelry Arrival
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
