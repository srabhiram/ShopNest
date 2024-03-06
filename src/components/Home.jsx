import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../services/store/actions";
import Navbar from "./Navbar";
import { FaCartPlus } from "react-icons/fa";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.allProducts) || [];
  console.log(products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-4 w-full  align-baseline gap-3 max-lg-m-12 p-4 bg-gray-50">
        {products.map(({ title, id, image, rating, category }) => (
          <>
            <div
              className=" border w-full  bg-white  border-gray-100 shadow-sm p-6 mx-auto rounded-sm grid items-center justify-"
              key={id}
            >
              <div className="p-2 items-center justify-center flex ">
                <img src={image} alt="img" className="" width={95} />
              </div>
              <div className="">
                <h1 className="font-bold text-xl text-slate-700">{title}</h1>
                <span className="items-end flex">{rating.rate}</span>
                <p>{category}</p>
              </div>
              <div className="mt-3 flex cursor-pointer items-center gap-12">
                <button className="border border-gray-500 rounded-sm font-medium px-2 py-1 hover:bg-slate-800 hover:text-white hover:ease-in-out hover:scale-105">
                  Buy now
                </button>
                <button className="flex items-center gap-2 border border-gray-500 rounded-sm font-medium px-2 py-1 hover:bg-slate-800 hover:text-white hover:ease-in-out hover:scale-105">
                  Add to cart
                  <FaCartPlus />
                </button>
              </div>
              {/* <div className="text-gray-400  line-clamp-4 overflow-hidden  ">
                <p>{description}</p>
              </div> */}
            </div>
          </>
        ))}
      </div>
    </>
  );
};
