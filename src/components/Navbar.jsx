import { FaShopify } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className=" flex justify-between bg-white border rounded-sm mx-auto items-center  sticky top-0 ">
        <div id="icon" className="p-2 flex items-center gap-2 text-2xl">
          <FaShopify size={44} />
          <strong>Shopify!</strong>
        </div>
        <div className="flex  ">
          <ul className="flex gap-4 items-center">
            <li>Home</li>
            <li>Products</li>
            <li>Other</li>
          </ul>
        </div>
        <div className="flex mr-2">
          <button className="bg-black px-3 py-2 m-2 rounded-lg text-white ease-in-out hover:scale-105">
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
