import { ACTIONS } from '../context/Cart/actions';

type CartActions = { type: ACTIONS.ADD; payload: ProductType };

type ProductType = {
  name: string;
  price: number;
  id: string;
  quantity: number;
};

type OmPrTy = Omit<ProductType, 'quantity'>;

type CartType = {
  items: ProductType[];
  price: number;
};

interface ICartCtx {
  cartState: CartType;
  // addProduct: React.Dispatch<ProductType>;
  dispatch: React.Dispatch<CartActions>;
  // addProduct: ({ name, price, id }: OmPrTy) => void;
}

type CartProviderType = { children: React.ReactNode };

// type CartType = { product: ProductType; quantity: number };

export type {
  ProductType,
  CartType,
  CartActions,
  ICartCtx,
  CartProviderType,
  OmPrTy,
};
