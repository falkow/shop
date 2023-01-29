import { CartActions, CartType, ProductType } from '../../types/types';
import { ACTIONS } from './actions';

function reducer(state: CartType, action: CartActions) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD: {
      const found = state.items.findIndex((item) => {
        return item.id === payload.id;
      });
      const items =
        found === -1
          ? [...state.items, { ...payload, quantity: 1 }]
          : [...state.items].map((item, index) => {
              if (state.items[found].quantity >= payload.quantity) {
                return item;
              }

              if (index === found) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });

      const totalPrice = items.reduce((acc, item) => {
        acc = acc + item.price * item.quantity;
        return acc;
      }, 0);

      console.log({ items: items, price: totalPrice });
      return { items: items, price: totalPrice };
    }
    default:
      return { ...state };
  }
}

export const addProduct = ({ name, price, id, quantity }: ProductType) => ({
  type: ACTIONS.ADD,
  payload: { id, name, price, quantity },
});

export { reducer };
