import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../services/store/actions";
import Navbar from "./Navbar";
import { FaCartPlus } from "react-icons/fa";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.allProducts);
  console.log(products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className="mx-3 grid grid-cols-4 h-max  items-center justify-center gap-8">
        {products?.map(({ id, title, rating, description, image }) => (
          <>
            <div
              className="border border-gray-50 p-4 rounded-md shadow-xl"
              key={id}
            >
              <div className="flex items-center w-1/2 justify-center">
                <img src={image} width={110} className="" alt="" />
              </div>
              <div>
                <strong>{title}</strong>
                <span>{rating.rate}</span>
                <div className="flex flex-row">
                  <button className=" bg-black px-3 py-2 rounded-md hover:ease-in-out hover:scale-105 text-white m-3">
                    Buy now
                  </button>
                  <button className="flex items-center gap-2  bg-black px-3 py-2 rounded-md hover:ease-in-out hover:scale-105 text-white m-3">
                    Add to cart <FaCartPlus />
                  </button>
                </div>
                <p>{description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
