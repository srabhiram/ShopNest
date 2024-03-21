const initialState = {
  allProducts: null,
  error: null,
  singleProduct: null,
  singleCategory: null,
  cartData: null,
  SelectedCartData: null,
  updatedCartData: null,
  currentCartData: null,
  filterProducts: null,
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
        error: action.payload,
      };
    case "FETCH_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        singleProduct: action.payload,
        error: null,
      };
    case "FETCH_SINGLE_PRODUCT_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "FETCH_SINGLE_CATEGORY_SUCCESS":
      return {
        ...state,
        singleCategory: action.payload,
        error: null,
      };
    case "FETCH_SINGLE_CATEGORY_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "ADD_TO_CART_SUCCESS":
    case "REMOVE_CART_SUCCESS":
      return {
        ...state,
        cartData: action.payload,
        error: null,
      };
    case "ADD_TO_CART_FAILURE":
    case "REMOVE_CART_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "INCREMENT_CART_SUCCESS":
      return {
        ...state,
        SelectedCartData: action.payload,
        error: null,
      };
    case "INCREMENT_CART_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
      case "FILTER_PRODUCTS":
        return {
        ...state,
          filterProducts: action.payload,
        };
    default:
      return state;
  }
};
