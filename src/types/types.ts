import { ACTIONS } from '../context/Cart/actions';

type AddToCartType = { type: typeof ACTIONS.ADD; payload: ProductType };
type RemoveFromCartType = { type: typeof ACTIONS.DELETE; payload: ProductType };
type ResetCartType = { type: typeof ACTIONS.RESET };

type CartActions = AddToCartType | RemoveFromCartType | ResetCartType;

// type CartActions =
//   | { type: ACTIONS.ADD; payload: ProductType }
//   | { type: ACTIONS.DELETE; payload: ProductType }
//   | { type: ACTIONS.RESET};

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
  ResetCartType,
  RemoveFromCartType,
  AddToCartType,
};
