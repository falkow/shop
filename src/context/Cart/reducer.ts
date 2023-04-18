import {
  AddToCartType,
  CartActions,
  CartType,
  ChangeQuantityType,
  DecreaseProductInCartType,
  DummyProductType,
  IncreaseProductInCartType,
  RemoveFromCartType,
  ResetCartType,
} from '../../types/types';
import { ACTIONS } from './actions';

function totalPrice(items: DummyProductType[]) {
  return items.reduce((acc, item) => {
    acc = acc + item.price * item.quantity!;
    return acc;
  }, 0);
}

function reducer(state: CartType, action: CartActions) {
  switch (action.type) {
    case ACTIONS.ADD: {
      const found = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const items =
        found === -1
          ? [...state.items, { ...action.payload, quantity: 1 }]
          : [...state.items].map((item, index) => {
              if (state.items[found].quantity! >= action.payload.quantity!) {
                return item;
              }

              if (index === found) {
                return { ...item, quantity: item.quantity! + 1 };
              }
              return item;
            });

      return { items: items, price: totalPrice(items) };
    }
    case ACTIONS.DELETE: {
      const found = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      const items =
        found === -1
          ? [...state.items]
          : state.items.filter((item) => item.id !== action.payload.id);
      return { items: items, price: totalPrice(items) };
    }
    case ACTIONS.DECREASE: {
      const found = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      const items =
        found === -1
          ? [...state.items]
          : state.items[found].quantity === 1
          ? state.items.filter((item) => item.id !== action.payload.id)
          : state.items.map((item, index) => {
              if (index === found) {
                return { ...item, quantity: item.quantity! - 1 };
              } else {
                return item;
              }
            });

      return { items: items, price: totalPrice(items) };
    }
    case ACTIONS.INCREASE: {
      const found = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      const items =
        found === -1
          ? [...state.items]
          : state.items.map((item, index) => {
              if (index === found) {
                return { ...item, quantity: item.quantity! + 1 };
              } else {
                return item;
              }
            });

      return { items: items, price: totalPrice(items) };
    }
    case ACTIONS.RESET: {
      return { items: [], price: 0 };
    }
    case ACTIONS.CHANGEQTY: {
      const found = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      const items =
        found === -1
          ? [...state.items]
          : state.items.map((item, index) => {
              if (index === found) {
                return { ...item, quantity: action.newQty };
              } else {
                return item;
              }
            });
      return { items: items, price: totalPrice(items) };
    }
    default:
      return { ...state };
  }
}

const addProduct = (product: DummyProductType): AddToCartType => ({
  type: ACTIONS.ADD,
  payload: product,
});
const decreaseProductQuantity = (
  product: DummyProductType
): DecreaseProductInCartType => ({
  type: ACTIONS.DECREASE,
  payload: product,
});
const increaseProductQuantity = (
  product: DummyProductType
): IncreaseProductInCartType => ({
  type: ACTIONS.INCREASE,
  payload: product,
});
const changeProductQuantity = (
  newQuantity: number,
  product: DummyProductType
): ChangeQuantityType => ({
  type: ACTIONS.CHANGEQTY,
  newQty: newQuantity,
  payload: product,
});
const removeProduct = (product: DummyProductType): RemoveFromCartType => ({
  type: ACTIONS.DELETE,
  payload: product,
});
const resetCart = (): ResetCartType => ({ type: ACTIONS.RESET });

export {
  reducer,
  addProduct,
  decreaseProductQuantity,
  increaseProductQuantity,
  changeProductQuantity,
  removeProduct,
  resetCart,
};
