const initialState = {
  allProducts: null,
  error: null,
  singleProduct: null,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALLPRODUCTS_SUCCESS":
      return {
        ...state,
        allProducts: action.payload,

        error: null,
      };
    case "FETCH_ALLPRODUCTS_FAILURE":
      return {
        ...state,
        allProducts: [],
        error: action.payload,
      };
    case "FETCH_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        singleProduct: action.payload,
        error: [],
      };
    case "FETCH_SINGLE_PRODUCT_FAILURE":
      return {
        ...state,
        singleProduct: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
