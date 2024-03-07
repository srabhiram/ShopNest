import { useSelector } from "react-redux";
import Navbar from "./Navbar";

export const ProductDetails = () => {
  const productinfo = useSelector((state) => state?.singleProduct);
  const { title, id, image, description, price } = productinfo || [];
  return (
    <>
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
                  className=" static p-5  rounded-md border-gray-300 shadow drop-shadow-2xl"
                />
              </div>
              <div className="text-slate-700">
                <h1 className="font-sans text-xl font-medium p-3">{title}</h1>
                <p className="px-3 font-medium text-3xl">$ {price}</p>
              </div>
              <div className="text-slate-600">
                <p className="font font-medium text-lg mt-4">
                  About the product:
                </p>
                <article>{description}</article>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center w-full ">
                <img
                  src={image}
                  width={220}
                  alt=""
                  className=" static p-5  rounded-md border-gray-300 shadow drop-shadow-2xl"
                />
              </div>
              <div className="text-slate-700">
                <h1 className="font-sans text-xl font-medium p-3">{title}</h1>
                <p className="px-3 font-medium text-3xl">$ {price}</p>
              </div>
              <div className="text-slate-600">
                <p className="font font-medium text-lg mt-4">
                  About the product:
                </p>
                <article>{description}</article>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
