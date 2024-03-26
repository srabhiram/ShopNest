import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchCategory,
  fetchSingleProduct,
  addtocart,
} from "../../services/store/actions";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SklHome } from "../Skeleton/SklHome";

export const CategoryLayout = () => {
  const products = useSelector((state) => state.filterProducts);
  const selectedProduct = products || [];
  console.log(products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    dispatch(fetchAllProducts());
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, [dispatch]);
  const ProductClick = (id, category) => {
    dispatch(fetchSingleProduct(id));
    dispatch(fetchCategory(category));
    navigate("/product");
  };
  const handleCart = (id, title, image, rating, price, category) => {
    dispatch(addtocart(id, title, image, rating, price, category));
  };

  return (
    <>
      {loader ? (
        <SklHome />
      ) : (
        <div className="grid md:grid-cols-4 w-full  align-baseline gap-6 max-lg-m-12 p-4 bg-gray-50">
          {selectedProduct?.map(
            ({ title, id, image, rating, category, price }) => (
              <div
                className="cursor-default transform transition-all duration-500 hover:scale-100 border w-full  bg-white  border-gray-100 shadow-sm p-6 mx-auto rounded-sm grid items-center "
                key={id}
              >
                <div className="p-2 items-center justify-center flex ">
                  <img
                    src={image}
                    alt="img"
                    className="cursor-pointer"
                    width={95}
                    onClick={() => {
                      ProductClick(id, category);
                    }}
                  />
                </div>
                <div className="">
                  <h1
                    className="font-bold text-xl cursor-pointer text-slate-700"
                    onClick={() => {
                      ProductClick(id, category);
                    }}
                  >
                    {title}
                  </h1>
                  <span className="items-end flex">{rating.rate}</span>
                  <p>{category}</p>
                  <p className="font-medium">${Math.round(price)}</p>
                </div>
                <div className="mt-1 p-3 flex items-center gap-12">
                  <button className="border border-gray-500 rounded-sm font-medium px-2 py-1 hover:bg-slate-600 focus:bg-slate-800  hover:text-white focus:ease-in-out cursor-pointer focus:scale-105">
                    Buy now
                  </button>
                  <button
                    className="flex items-center gap-2 border border-gray-500 rounded-sm font-medium px-2 py-1 cursor-pointer hover:bg-slate-800  hover:text-white hover:ease-in-out hover:scale-90 "
                    onClick={() =>
                      handleCart(id, title, image, rating, price, category)
                    }
                  >
                    Add to cart
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};
