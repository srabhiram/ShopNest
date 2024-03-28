import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { filterProducts } from "../../services/store/actions";
import { SklHome } from "../Skeleton/SklHome";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Authentication/Firebase";

export default function Category() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state?.allProducts?.products) || [];
  // eslint-disable-next-line no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loader, setLoader] = useState(true);
  const userExist = () => {
    const isUser = auth?.currentUser?.displayName;
    const userExist = () => {
      if (isUser === undefined) {
        navigate("/");
      }
    };
    userExist();
  };
  useEffect(() => {
    userExist();
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  });

  // Extract all unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    const filteredProducts =
      category === "All"
        ? products
        : products.filter((product) => product.category === category);

    dispatch(filterProducts(filteredProducts));
  };
  return (
    <>
      <Navbar />
      {loader ? (
        <SklHome />
      ) : (
        <sidebar className="max-sm:hidden flex gap-3 place-content-center items-center   overflow-hidden  bg-white border-b ">
          <div className="hover:bg-gray-50 py-3 ">
            <NavLink
              to="/category/all"
              className="font-normal px-3"
              exact
              
            >
              All Categories
            </NavLink>
          </div>
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gray-50 py-3 cursor-pointer "
            >
              <div className="hover:bg-gray-50  capitalize ">
                <NavLink
                  to={`/category/${category.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold bg-gray-50 px-3 py-3 border-l"
                      : "font-normal px-3  border-l "
                  }
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </NavLink>
              </div>
            </div>
          ))}
        </sidebar>
      )}
      <div className="">
        <Outlet />
      </div>
    </>
  );
}
