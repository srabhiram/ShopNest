import axios from "axios";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;

    // Extracting product IDs
    const productIds = products?.map((product) => product.id);

    // Dispatching products and productIds to store
    dispatch({
      type: "FETCH_ALLPRODUCTS_SUCCESS",
      payload: {
        products,
        productIds,
      },
    });
  } catch (error) {
    dispatch({
      type: "FETCH_ALLPRODUCTS_FAILURE",
      payload: error.message,
    });
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    const singleProduct = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    dispatch({
      type: "FETCH_SINGLE_PRODUCT_SUCCESS",
      payload: singleProduct.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_SINGLE_PRODUCT_FAILURE",
      payload: error.message,
    });
  }
};
