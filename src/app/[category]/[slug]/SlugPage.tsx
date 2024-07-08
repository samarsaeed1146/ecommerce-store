"use client";
import { Button } from "@/components/ui/button";
import { IoIosHeart } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { LuPlus } from "react-icons/lu";
import { RiSubtractLine } from "react-icons/ri";
import SlugComponent from "@/components/SlugComponent";
import { useAppSelector } from "../../store/Hooks";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.product);
  const slug = product.filter((val) => val.slug === params.slug);
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* image */}
          <SlugComponent image={slug[0].image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* category */}
            <h2 className="text-gray-500 tracking-widest scroll-m-20 text-sm font-semibold uppercase">
              {slug[0].category}
            </h2>
            {/* title */}
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
              {slug[0].title}
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
              {slug[0].description}
            </p>
            <div className="flex mt-6 items-center mb-5">
              {/* colors */}
              <div className="flex">
                <span className="mr-3 scroll-m-20 text-myBlackHead text-base font-semibold tracking-tight">
                  Color
                </span>
                {slug[0].color.map((item, i) => (
                  <button
                    key={i}
                    className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    style={{ backgroundColor: item }}
                  />
                ))}
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
                    {slug[0].size.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
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
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                {slug[0].qty}
              </div>
              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <LuPlus className="mr-2 w-4 h-4 group-hover:text-myOrange duration-300" />
              </Button>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              {/* price */}
              <div>
                <span className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead ${
                slug[0].discount > 0 &&
                "line-through decoration-2 decoration-myOrange/70"
              }`}>
                  ${slug[0].price}
                </span>
                {/* discounted value */}
                {slug[0].discount > 0 && (
                  <span className="ml-3 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
                    ${slug[0].price - (slug[0].price * slug[0].discount) / 100}
                  </span>
                )}
              </div>
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
    </div>
  );
};

export default SlugPage;
