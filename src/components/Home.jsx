import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../services/store/actions";
import Navbar from "./Navbar";

export const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.allProducts);
  console.log(products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div>
        <h2>Products</h2>
        <ul>
          {products?.map((product) => (
            <>
              <li key={product?.id}>
                {product?.title} <img src={product?.image} alt="" />
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
