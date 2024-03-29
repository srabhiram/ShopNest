import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { filterProducts } from "../../services/store/actions";

export const CatMob = ({ setOpen }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  const products = useSelector((state) => state?.allProducts?.products) || [];

  // Extract all unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    const filteredProducts =
      category === "All"
        ? products
        : products.filter((product) => product.category === category);

    dispatch(filterProducts(filteredProducts));
    setOpen(false);
    setOpenIndex(null);
  };

  const handleAccordionClick = () => {
    setOpenIndex(openIndex === null ? categories.length : null); // Toggle the accordion
  };

  return (
    <>
      <div className="bg-white cursor-pointer w-full">
        <div className="capitalize w-full" onClick={handleAccordionClick}>
          <div className=" tex">Products</div>
        </div>
      </div>
      {openIndex !== null && (
        <div>
          <NavLink
            to={"/category/all"}
            className="font-normal px-3 space-y-1  text-sm flex flex-col pt-3"
            onClick={() => handleCategoryClick("All")}
          >
            All Products
          </NavLink>
          {categories.map((category, index) => (
            <div key={index} className=" cursor-pointer w-full">
              <div className=" capitalize">
                <NavLink
                  to={`/category/${category.toLowerCase()}`}
                  className="font-normal px-3 space-y-1  text-sm flex flex-col pt-3"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
