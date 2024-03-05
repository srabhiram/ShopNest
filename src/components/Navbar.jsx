import { FaShopify } from "react-icons/fa";
import { auth } from "../Authentication/Firebase";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const username = auth.currentUser.displayName;
  const navigate = useNavigate();
  console.log(username);
  console.log(auth);

  const signout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

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
          <button
            onClick={() => {
              signout();
            }}
            className="bg-black px-3 py-2 m-2 rounded-lg text-white ease-in-out hover:scale-105"
          >
            Hii! {username}
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
