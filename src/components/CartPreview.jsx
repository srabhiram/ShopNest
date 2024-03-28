import { useSelector } from "react-redux";
import * as Popover from "@radix-ui/react-popover";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import Rating from "./Rating";

export default function CartPreview() {
  const cartData = useSelector((state) => state?.cartData);
  const count = cartData ? Object.keys(cartData).length : 0;

  const navigate = useNavigate();

  // Function to create a new array with unique items and counts
  const getUniqueCartItems = () => {
    const uniqueCartItems = [];
    cartData?.forEach((item) => {
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
  const preview = getUniqueCartItems().slice(0, 2);

  const TotalAmount = () => {
    let amout = 0;
    for (let i = 0; i < cartData?.length; i++) {
      amout += cartData[i].price;
    }

    return Math.round(amout);
  };

  return (
    <>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="relative rounded-full w-[38px] h-[38px] inline-flex items-center justify-center text-violet11  hover:bg-gray-100  cursor-default outline-none">
            <IoCartOutline className="fill-gray-700" size={28} />

            <div
              className={
                count > 0
                  ? "absolute top-[-8px] right-[-8px] rounded-full  flex  items-center - text-[13px] font-semibold  bg-black text-white"
                  : "hidden"
              }
            >
              <p className="text-center h-[21px] w-[21px]"> {count}</p>
            </div>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="rounded p-5 w-[300px] bg-white shadow-md border"
            sideOffset={5}
          >
            <div className="flex flex-col">
              {cartData?.length > 0 ? (
                preview.map(({ title, id, image, price, count, rating }) => (
                  <div key={id} className="border-b">
                    <div className="flex gap-2 justify-center  items-center  p-2  h-full w-full">
                      <img src={image} alt={title} width={40} />

                      <p className="font-medium text-md w-full text-wrap">
                        {title}
                        <p className="flex gap-1 cursor-default">
                          <Rating value={rating.rate} />{" "}
                          <span>{rating.rate}</span>
                        </p>
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-2 gap-4">
                      <p>Qty.{count}</p>
                      <p className="font-medium text-lg">
                        ${Math.round(price * count)}{" "}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className=" flex flex-col justify-center items-center gap-1">
                  <BsCart4 size={55} />
                  <p className=" opacity-50">Cart is Empty!</p>
                </div>
              )}
              {
                <div className={`${!cartData?.length > 0 ? "hidden" : ""}`}>
                  <p>Total: {TotalAmount()}</p>
                  <button
                    className="bg-black text-white px-2 py-2 rounded-md "
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    {cartData ? "Show More" : ""}{" "}
                  </button>
                </div>
              }
            </div>
            <Popover.Close
              className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center absolute top-[5px] right-[5px] hover:bg-gray-100 hover:transition-all hover:delay-150 hoverease-in-out  outline-none cursor-default"
              aria-label="Close"
            >
              <FaTimes size={15} />
            </Popover.Close>
            <Popover.Arrow className="fill-white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>{" "}
    </>
  );
}
