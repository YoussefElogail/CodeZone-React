import { ADD_PRODUCT, GET_PRODUCTS } from "../actions/products-actions";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.payload];
      break;
    case ADD_PRODUCT:
      return [...state, action.payload];
      break;

    default:
      return state;
      break;
  }
};

export default productReducer