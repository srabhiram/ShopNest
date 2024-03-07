import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Fragment } from "react";
import { FaCartPlus } from "react-icons/fa";

export const ProductDetails = () => {
  const productinfo = useSelector((state) => state?.singleProduct);
  const simialarCat = useSelector((state) => state?.singleCategory) || [];
  console.log(simialarCat);
  const { title, id, image, description, price } = productinfo || [];
  return (
    <Fragment>
      <Navbar />
      <div className="m-2">
        {productinfo && (
          <>
            <div key={id}>
              <div className="flex items-center justify-center w-full ">
                <img
                  src={image}
                  width={220}
                  alt=""
                  className=" static p-5  rounded-md border-gray-300  shadow-md"
                />
              </div>
              <div className="text-slate-700">
                <h1 className="font-sans text-xl font-medium p-3">{title}</h1>
                <p className="px-3 font-medium text-3xl">$ {price}</p>
              </div>
              <div className="mt-3  mx-3 lg:flex lg:items-center max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center  sm:w-full gap-4">
                <button className="border  max-sm:text-xl  max-sm:w-full border-gray-500 rounded-sm font-medium px-2 py-1 hover:bg-slate-600 focus:bg-slate-800  hover:text-white focus:ease-in-out cursor-pointer focus:scale-105">
                  Buy now
                </button>
                <button className="flex max-sm:w-full max-sm:text-xl max-sm:mt-1 justify-center items-center gap-2 border border-gray-500 rounded-sm font-medium px-2 py-1 hover:bg-slate-600 cursor-pointer focus:bg-slate-800 hover:text-white focus:text-white ">
                  Add to cart
                  <FaCartPlus />
                </button>
              </div>
              <div className="text-slate-600">
                <p className="font font-medium text-lg mt-4">
                  About the product:
                </p>
                <article>{description}</article>
              </div>
              <div id="similar-products">
                <h1></h1>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        {simialarCat.map(({ id, title, image, price, rating }) => (
          <>
            <img src={image} alt="" width={45} />
          </>
        ))}
      </div>
    </Fragment>
  );
};
