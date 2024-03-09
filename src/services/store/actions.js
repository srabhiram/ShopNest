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

export const fetchCategory = (category) => async (dispatch) => {
  try {
    const singleCategory = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    dispatch({
      type: "FETCH_SINGLE_CATEGORY_SUCCESS",
      payload: singleCategory.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_SINGLE_CATEGORY_FAILURE",
      payload: error.message,
    });
  }
};
export const addtocart = (id, image, title, price, rating) => async (dispatch, getState) => {
  try {
    // Create the new cart item
    const newItem = { id, title, image, rating, price };

    // Get the current cart data from the state
    const currentCartData = getState().cartData;

    // Merge the new item with the existing cart data
    const updatedCartData = [...(currentCartData || []), newItem];

    // Dispatch the updated cart data to the store
    dispatch({
      type: "ADD_TO_CART_SUCCESS",
      payload: updatedCartData,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TO_CART_FAILURE",
      payload: error.message,
    });
  }
};
