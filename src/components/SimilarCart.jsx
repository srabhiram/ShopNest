import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shoptoast from "../assets/shop-toast.gif";
import toast, { Toaster } from "react-hot-toast";
import {
  addtocart,
  fetchSingleProduct,
  fetchCategory,
} from "../services/store/actions";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const SimilarCart = () => {
  const simialarCat = useSelector((state) => state?.singleCategory) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [scrolll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

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
  const loading = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 800);
  };
  const scroll = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const ProductClick = (id, category) => {
    scroll();
    loading();
    dispatch(fetchSingleProduct(id));
    dispatch(fetchCategory(category));
    navigate("/product");
  };
  const handleCart = (id, title, image, rating, price, category) => {
    toastSuccess();
    dispatch(addtocart(id, title, image, rating, price, category));
  };

  console.log(simialarCat);

  return (
    <>
      {loader && (
        <div className=" absolute h-screen w-full top-0 z-10  bg-white/70 backdrop-blur-md">
          <div
            className="absolute top-1/2 left-2/4 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      <section className="w-full md:p-2 border-t bg-white md:w-5/6 max-sm:w-full">
        <p className="font-bold text-xl px-2 pt-3 ">Similar Products</p>
        <div className="flex py-3 w-full  max-sm:grid max-sm:grid-cols-2 content-center items-center gap-0 snap-x  justify-center ">
          {simialarCat.map(({ id, title, image, price, rating, category }) => (
            <>
              <div className="w-full max-sm:px-5 md:flex md:flex-col md:justify-center md:items-center snap-start border">
                <div className="">
                  <img
                    src={image}
                    alt=""
                    className="object-contain h-36 w-20 block m-auto p-2"
                    onClick={() => ProductClick(id, category)}
                  />
                </div>
                <div className="leading- w-full mt-2 p-2 ">
                  <p className="text-[16px] max-sm:text-[16px]  font-semibold lg:line-clamp-1 max-sm:line-clamp-3 ">
                    {title}
                  </p>
                  <p className="flex gap-1">
                    <Rating value={rating.rate} /> <span>{rating.rate}</span>
                  </p>
                  <p>{category}</p>
                  <p className="font-medium">${price}</p>
                  <button
                    className="mb-2 max-sm:w-full max-sm:text-sm max-sm:mt-1 justify-center items-center  border border-gray-500 rounded-sm font-medium px-2 py-1 hover:bg-slate-600 cursor-pointer focus:bg-slate-800 hover:text-white focus:text-white"
                    onClick={() =>
                      handleCart(id, title, image, rating, price, category)
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>

      <Toaster />
    </>
  );
};

export default SimilarCart;
