import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { CategoryLayout } from "./CategoryLayout";

export default function Category() {
  const products = useSelector((state) => state?.allProducts?.products) || [];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to filter products based on category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  console.log(selectedCategory);
  // Extract all unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />
      <sidebar className="flex justify-center items-center bg-white border-b sticky left-0 top-2">
        <div className="hover:bg-gray-50 p-5">
          <NavLink
            to=""
            className={({ isActive }) =>
              !isActive ? "font-semibold bg-gray-50 p-6" : "font-thin"
            }
            exact
            activeClassName="active"
          >
            All Categories
          </NavLink>
        </div>
        {categories.map((category, index) => (
          <div key={index} className="bg-white cursor-pointer">
            <div className="hover:bg-gray-50 p-5 capitalize">
              <NavLink
                to={`/category/${category.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? "font-semibold bg-gray-50 p-6" : "font-thin  p-5 "
                }
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </NavLink>
            </div>
          </div>
        ))}
      </sidebar>
      <div className="">
        {
          
            <CategoryLayout
              products={filteredProducts}
              selectedCategory={selectedCategory}
            />
          
        }
      </div>
    </>
  );
}
