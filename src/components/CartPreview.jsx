import { useSelector } from "react-redux";
import * as Popover from "@radix-ui/react-popover";
import { FaCartPlus, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
          <button className="relative rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11  hover:bg-gray-100  cursor-default outline-none">
            <FaCartPlus className="" size={24} />

            <div className="absolute top-[-10px] right-[-9px]  inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-black text-white">
              <p> {count}</p>
            </div>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="rounded p-5 w-[300px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <div className="flex flex-col">
              {cartData
                ? preview.map(({ title, id, image, price, count }) => (
                    <div key={id} className="border-b">
                      <div className="flex gap-2 justify-center  items-center  p-2  h-full w-full">
                        <img src={image} alt={title} width={40} />

                        <p className="font-medium text-md w-full text-wrap">
                          {title}
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
                : "No Data"}
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
            <Popover.Close
              className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center absolute top-[5px] right-[5px] hover:bg-gray-100 hover:transition-all hover:delay-150 ease-in-out focus:shadow-[0_0_0_2px]  outline-none cursor-default"
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
