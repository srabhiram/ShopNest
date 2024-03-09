const initialState = {
  allProducts: null,
  error: null,
  singleProduct: null,
  singleCategory: null,
  cartData: null,
  updatedCartData:null,
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
    case "FETCH_SINGLE_CATEGORY_SUCCESS":
      return {
        ...state,
        singleCategory: action.payload,
        error: [],
      };
    case "FETCH_SINGLE_CATEGORY_FAILURE":
      return {
        ...state,
        singleCategory: [],
        error: action.payload,
      };
    case "ADD_TO_CART_SUCCESS":
      return {
        ...state,
        cartData: action.payload,
        error: [],
      };
    case "ADD_TO_CART_FAILURE":
      return {
        ...state,
        cartData: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
