import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAIL
} from '../actions/types';

export default function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART_SUCCESS:
      const item = action.payload;
      const exist = state.cartItems.find(
        (x) => x.product_id === item.product_id
      );
      if (exist) {
        return {
          loading: false,
          cartItems: state.cartItems.map((x) =>
            x.product_id === item.product_id ? item : x
          )
        };
      } else {
        return {
          loading: false,
          cartItems: [...state.cartItems, action.payload]
        };
      }
    default:
      return state;
  }
}
