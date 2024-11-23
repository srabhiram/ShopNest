import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllProducts,
  fetchCategory,
  fetchSingleProduct,
  addtocart,
} from "../services/store/actions";
import { FaCartPlus, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SklHome } from "./Skeleton/SklHome";
import { auth } from "../Authentication/Firebase";
import toast, { Toaster } from "react-hot-toast";
import shoptoast from "../assets/shop-toast.gif";
import Rating from "./Rating";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state?.allProducts?.products) || [];
  const [loadeer, setLoader] = useState(true);

  useEffect(() => {
    const isUser = auth?.currentUser?.displayName;
    const userExist = () => {
      if (isUser === undefined) {
        navigate("/");
      }
    };
    userExist();
    dispatch(fetchAllProducts());
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, [dispatch, navigate]);
  const toastSuccess = () => {
    toast(
      (t) => (
        <span className="flex justify-center font-medium items-center gap-3">
          <img src={shoptoast} alt="shoptoast" width={30} /> Succedfully added
          to cart
          <button onClick={() => toast.dismiss(t.id)}>
            <FaTimes />
          </button>
        </span>
      ),
      { duration: 1300 }
    );
  };
  const ProductClick = (_id, category) => {
    dispatch(fetchSingleProduct(_id));
    dispatch(fetchCategory(category));
    navigate("/product");
  };
  const handleCart = (_id, title, image, rating, price, category) => {
    toastSuccess();
    dispatch(addtocart(_id, title, image, rating, price, category));
  };

  return (
    <>
      {loadeer ? (
        <SklHome />
      ) : (
        <div className="grid md:grid-cols-4 w-full  align-baseline gap-6   max-lg-m-12 p-8 bg-white">
          {products?.map(({ title, _id, image, rating, category, price }) => (
            <div
              className="cursor-default transform transition-all duration-500 hover:scale-100  border-2 w-full  bg-white  border-gray-100 shadow-sm p-3 mx-auto rounded-md grid items-center "
              key={_id}
            >
              <div className="p-2 items-center justify-center flex ">
                <img
                  src={image}
                  alt="img"
                  className="cursor-pointer"
                  width={95}
                  onClick={() => {
                    ProductClick(_id, category);
                  }}
                />
              </div>
              <div className="">
                <h1
                  className="font-bold text-xl cursor-pointer text-slate-700"
                  onClick={() => {
                    ProductClick(_id, category);
                  }}
                >
                  {title}
                </h1>
                <p className="flex gap-1 cursor-default">
                  <Rating value={rating.rate} /> <span>{rating.rate}</span>
                </p>
                <p>{category}</p>
                <p className="font-medium">${Math.round(price)}</p>
              </div>
              <div className="mt-1 p-3 flex items-center gap-12">
                <button className="border border-gray-500 rounded-sm font-medium px-2 py-1 hover:bg-slate-800 active:bg-black  hover:text-white active:ease-in-out cursor-pointer active:scale-105 duration-150 transition-all">
                  Buy now
                </button>
                <button
                  className="flex items-center gap-2 border border-gray-500 rounded-sm font-medium px-2 py-1 cursor-pointer active:bg-black hover:bg-slate-800  hover:text-white hover:ease-in-out active:ease-in-out active:scale-105 duration-150 transition-all "
                  onClick={() =>
                    handleCart(_id, title, image, rating, price, category)
                  }
                >
                  Add to cart
                  <FaCartPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Toaster />
    </>
  );
};
