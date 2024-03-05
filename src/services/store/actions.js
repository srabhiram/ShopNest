// src/actions/productActions.js
import axios from "axios";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    dispatch({
      type: "FETCH_ALLPRODUCTS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_ALLPRODUCTS_FAILURE",
      payload: error.message,
    });
  }
};
