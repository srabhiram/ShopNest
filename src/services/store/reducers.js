const initialState = {
  allProducts: null,
  error: null,
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
    default:
      return state;
  }
};
