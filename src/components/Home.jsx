import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllProducts,
  fetchCategory,
  fetchSingleProduct,
} from "../services/store/actions";
import Navbar from "./Navbar";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state?.allProducts?.products) || [];

  const singleproduct = useSelector((state) => state?.singleProduct) || [];
  console.log(singleproduct);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  const ProductClick = (id,category) => {
    dispatch(fetchSingleProduct(id));
    dispatch(fetchCategory(category))
    navigate("/product");
  };

  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-4 w-full  align-baseline gap-6 max-lg-m-12 p-4 bg-gray-50">
        {products?.map(({ title, id, image, rating, category }) => (
          <>
            <div
              className="cursor-default transform transition-all duration-500 hover:scale-105 border w-full  bg-white  border-gray-100 shadow-sm p-6 mx-auto rounded-sm grid items-center "
              key={id}
            >
              <div className="p-2 items-center justify-center flex ">
                <img
                  src={image}
                  alt="img"
                  className="cursor-pointer"
                  width={95}
                  onClick={() => {
                    ProductClick(id,category);
                  }}
                />
              </div>
              <div className="">
                <h1
                  className="font-bold text-xl cursor-pointer text-slate-700"
                  onClick={() => {
                    ProductClick(id,category);
                  }}
                >
                  {title}
                </h1>
                <span className="items-end flex">{rating.rate}</span>
                <p>{category}</p>
              </div>
              <div className="mt-3 flex items-center gap-12">
                <button className="border border-gray-500 rounded-sm font-medium px-2 py-1 hover:bg-slate-600 focus:bg-slate-800  hover:text-white focus:ease-in-out cursor-pointer focus:scale-105">
                  Buy now
                </button>
                <button className="flex items-center gap-2 border border-gray-500 rounded-sm font-medium px-2 py-1 hover:bg-slate-600 cursor-pointer focus:bg-slate-800 hover:text-white focus:text-white focus:ease-in-out focus:scale-90 hover:ease-in-out hover:scale-110">
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
