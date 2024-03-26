import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { addtocart, removeCart } from "../services/store/actions";
import { useEffect, useState } from "react";
import Emptycart from "./Emptycart";
import SklCartDetails from "./Skeleton/SklCardDetails";
const CartDetails = () => {
  const cartData = useSelector((state) => state?.cartData);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  });

  const handleAddToCart = (id, title, image, rating, price, category) => {
    dispatch(addtocart(id, title, image, rating, price, category));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeCart(id));
  };

  // Function to create a new array with unique items and counts
  const getUniqueCartItems = () => {
    const uniqueCartItems = [];
    cartData.forEach((item) => {
      const existingItem = uniqueCartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.count++;
      } else {
        uniqueCartItems.push({ ...item, count: 1 });
      }
    });
    return uniqueCartItems;
  };
  let ShippingCharges = 3.64;
  let Tax = 9.31;
  let amount = 0;
  for (let i = 0; i < cartData?.length; i++) {
    amount += cartData[i].price;
  }
  amount = Math.round(amount);
  let Total = amount + ShippingCharges + Tax;

  return (
    <>
      {loader ? (
        <SklCartDetails />
      ) : (
        <>
          <Navbar />
          <header className=" h-screen m-3">
            <p
              className={
                cartData?.length < 1 ? "hidden" : "px-3 font-semibold text-2xl"
              }
            >
              Shopping Cart
            </p>
            <section className="grid  md:grid-cols-2 sm:grid-cols-1  bg-white">
              <div>
                {cartData?.length > 0
                  ? getUniqueCartItems().map(
                      ({
                        title,
                        id,
                        image,
                        rating,
                        price,
                        count,
                        category,
                      }) => (
                        <div key={id} className="bg-white border-b rounded ">
                          <div className="w-full grid grid-cols-4 justify-center  items-center  p-5  h-full ">
                            <div className="flex items-center  justify-center">
                              {" "}
                              <img
                                src={image}
                                alt={title}
                                width={120}
                                className=" p-4"
                              />
                            </div>
                            <div className="col-span-2 text-start space-y-1">
                              <p className=" font-medium text-sm w-full">
                                {title}
                              </p>
                              <p className="capitalize text-sm">{category}</p>
                              <p className=" font-medium text-md ">
                                ${Math.round(price)}{" "}
                                <span className="text-xs opacity-90">
                                  x{count}
                                </span>
                              </p>
                            </div>
                            <div className=" flex justify- gap-2 items-center  ">
                              <button
                                className="bg-white border rounded-xl px-3 py-2 font-semibold text-md hover:bg-black hover:text-white hover:transition-all hover:ease-in-out hover:duration-100   text-black"
                                onClick={() => handleRemoveFromCart(id)}
                              >
                                -
                              </button>
                              <p className="font-semibold">{count}</p>
                              <button
                                className="bg-white border rounded-xl px-3 py-2 font-semibold text-md hover:bg-black hover:text-white hover:transition-all hover:ease-in-out hover:duration-100   text-black"
                                onClick={() =>
                                  handleAddToCart(
                                    id,
                                    title,
                                    image,
                                    rating,
                                    price,
                                    category
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  : ""}
              </div>{" "}
              {cartData?.length > 0 && (
                <div className="md:w-2/6 max-sm:m-4 sm:px-2  bg-gray-50 p-4 shadow-md flex flex-col gap-3 md:fixed md:right-24 ">
                  <p className="text-xl">Order Summary</p>
                  <div className="border-b py-1 text-gray-500 flex justify-between items-center">
                    <p>Subtotal</p>
                    <p>${amount}</p>
                  </div>
                  <div className="border-b py-1 text-gray-500 flex justify-between items-center">
                    <p>Shipping Estimate</p>
                    <p>${ShippingCharges}</p>
                  </div>
                  <div className="border-b py-1 text-gray-500 flex justify-between items-center">
                    <p>Tax Estimate</p>
                    <p>${Tax}</p>
                  </div>
                  <div className="border-b py-1 font-medium flex justify-between text-xl mb-3">
                    <p>Order Total</p>
                    <p>${Total}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="bg-black px-3 py-2 w-2/4 text-center  text-white rounded-md text-xl tracking-wider font-medium">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </section>
            {!cartData?.length > 0 && <Emptycart />}
          </header>
        </>
      )}
    </>
  );
};

export default CartDetails;
