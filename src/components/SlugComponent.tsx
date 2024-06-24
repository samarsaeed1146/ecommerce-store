"use client"
import Image from "next/image";
import React, { useState } from "react";

const SlugComponent = () => {
    const [path, setPath] = useState("")
  return (
    <div>
      <Image
        src={path ? path : "/picture/top-2.jpg"}
        alt="ecommerce"
        width={400}
        height={400}
      />
      <div className="flex items-center justify-evenly mx-auto mt-2">
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/picture/tops-3.jpg"}
            alt="ecommerce"
            width={60}
            height={60}
            onClick={() => setPath('/picture/tops-3.jpg')}
          />
        </div>
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/picture/tops-4.jpg"}
            alt="ecommerce"
            width={60}
            height={60}
            onClick={() => setPath('/picture/tops-4.jpg')}
          />
        </div>
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/picture/tops-5.jpg"}
            alt="ecommerce"
            width={60}
            height={60}
            onClick={() => setPath('/picture/tops-5.jpg')}
          />
        </div>
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/picture/tops-6.jpg"}
            alt="ecommerce"
            width={60}
            height={60}
            onClick={() => setPath('/picture/tops-6.jpg')}
          />
        </div>
        <div className="cursor-pointer w-16 h-16">
          <Image
            src={"/picture/top-2.jpg"}
            alt="ecommerce"
            width={60}
            height={60}
            onClick={() => setPath('/picture/top-2.jpg')}
          />
        </div>
      </div>
    </div>
  );
};

export default SlugComponent;
