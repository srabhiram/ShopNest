import { useSelector } from "react-redux";
import Navbar from "./Navbar";

export default function Category() {
  const products = useSelector((state) => state?.allProducts?.products) || [];
  let category = [];
  let img = [];
  for (let i = 0; i < products.length; i++) {
    category.push(products[i].category);
    img.push(products[i].image);
  }
  category = category.filter((item, index) => category.indexOf(item) === index);
  img = img.filter((item, index) => img.indexOf(item) === index);
  console.log(category);
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <sidebar className="flex flex-col w-fit h-screen  bg-white border-r sticky left-0 top-2">
          <p
            className="bg-gray-200 p-2 font-semibold text-center"
            onClick={() => {}}
          >
            All Categories
          </p>
          {category.map((item, index) => (
            <div key={index} className="bg-white cursor-default">
              <div className="hover:bg-gray-50 px-4 border-b">
                <p className="capitalize hover:bg-gray-50 p-5">{item}</p>
              </div>
            </div>
          ))}
        </sidebar>
      </div>
    </>
  );
}
