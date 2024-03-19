import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { addtocart, removeCart } from "../services/store/actions";
import { useEffect } from "react";

const CartDetails = () => {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cartData);
  });

  const handleAddToCart = (id, title, image, rating, price) => {
    dispatch(addtocart(id, title, image, rating, price));
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

  return (
    <>
      <header className="bg-gray-50 h-screen">
        <Navbar />

        {getUniqueCartItems().map(
          ({ title, id, image, rating, price, count }) => (
            <div key={id} className="bg-white border rounded m-3">
              <div className="grid grid-cols-3 place-items-center items-center gap-2 p-5  h-full w-full">
                <img src={image} alt={title} width={88} />

                <p className="font-medium text-sm w-full">{title}</p>
                <p className="font-medium text-lg">
                  ${Math.round(price * count)}{" "}
                </p>
              </div>
              <div className="flex justify-end gap-4 items-center p-2 mr-3">
                <button
                  className="bg-black px-3 py-2 rounded  text-white "
                  onClick={() => handleRemoveFromCart(id)}
                >
                  -
                </button>
                <p>{count}</p>
                <button
                  className="bg-black px-3 py-2 rounded  text-white "
                  onClick={() =>
                    handleAddToCart(id, title, image, rating, price)
                  }
                >
                  +
                </button>
              </div>
            </div>
          )
        )}
      </header>
    </>
  );
};

export default CartDetails;
