import Image from "next/image";
import React from "react";
import vanImg from "../../public/picture/van img.png";
import customerService from "../../public/picture/customer service.png";
import moneyBack from "../../public/picture/money back.png";

const Services = () => {
  return (
    <section className="body-font mb-40 mt-40">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl">
            Our Services
          </h1>
          <div className="flex mt-4 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 text-center items-center -mt-4 md:space-y-0 space-y-6">
          <div className="group p-4 mx-auto md:w-1/3 flex flex-col text-center items-center">
            <div className="w-32 h-24 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image
                src={vanImg}
                alt="Delivery"
                width={100}
                height={100}
                className="w-32 h-24"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-xl font-bold tracking-tight md:text-2xl mb-4">
                Free Delivery
              </h2>
              <p className="text-myBlackHeadPara scroll-m-20 text-base font-semibold tracking-tight">
                Free Delivery on Order Above $1000
              </p>
            </div>
          </div>
          <div className="group p-4 mx-auto md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image
                src={customerService}
                alt="Delivery"
                width={100}
                height={100}
                className="w-24 h-24"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-xl font-bold tracking-tight md:text-2xl mb-4">
                24/7 Costomer Services 
              </h2>
              <p className="text-myBlackHeadPara scroll-m-20 text-base font-semibold tracking-tight">
                For Queries and Questions Feel Free to Contact
              </p>
            </div>
          </div>
          <div className="group p-4 mx-auto md:w-1/3 flex flex-col text-center items-center">
            <div className="w-32 h-24 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image
                src={moneyBack}
                alt="money back"
                width={100}
                height={100}
                className="w-32 h-24"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 scroll-m-20 text-xl font-bold tracking-tight md:text-2xl mb-4">
                Money Back Guarantee
              </h2>
              <p className="text-myBlackHeadPara scroll-m-20 text-base font-semibold tracking-tight">
                Get Money Back Guarantee on Damage Product
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
