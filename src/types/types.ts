import { ACTIONS } from '../context/Cart/actions';

type AddToCartType = { type: typeof ACTIONS.ADD; payload: dummyProductType };

type RemoveFromCartType = {
  type: typeof ACTIONS.DELETE;
  payload: dummyProductType;
};

type ResetCartType = { type: typeof ACTIONS.RESET };
// type AddToCartType = { type: typeof ACTIONS.ADD; payload: ProductType };
// type RemoveFromCartType = { type: typeof ACTIONS.DELETE; payload: ProductType };
// type ResetCartType = { type: typeof ACTIONS.RESET };

type CartActions = AddToCartType | RemoveFromCartType | ResetCartType;

type dummyProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  quantity: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

type DummyCard = dummyProductType & { innerRef?: any };

type DataType = {
  products: dummyProductType[];
};

type ProductType = {
  name: string;
  price: number;
  id: string;
  quantity: number;
};

type CartType = {
  items: dummyProductType[];
  price: number;
};

interface ICartCtx {
  cartState: CartType;
  dispatch: React.Dispatch<CartActions>;
}

type CartProviderType = { children: React.ReactNode };

export type {
  ProductType,
  dummyProductType,
  CartType,
  CartActions,
  ICartCtx,
  CartProviderType,
  ResetCartType,
  RemoveFromCartType,
  AddToCartType,
  DataType,
  DummyCard,
};
