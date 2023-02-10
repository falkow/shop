import { ACTIONS } from '../context/Cart/actions';

type AddToCartType = { type: typeof ACTIONS.ADD; payload: DummyProductType };

type RemoveFromCartType = {
  type: typeof ACTIONS.DELETE;
  payload: DummyProductType;
};

type ResetCartType = { type: typeof ACTIONS.RESET };

type CartActions = AddToCartType | RemoveFromCartType | ResetCartType;

type DummyProductType = {
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

type DummyCard = DummyProductType & {
  innerRef?: any;
};

type DataType = {
  products: DummyProductType[];
};

type ProductType = {
  name: string;
  price: number;
  id: string;
  quantity: number;
};

type CartType = {
  items: DummyProductType[];
  price: number;
};

interface ICartCtx {
  cartState: CartType;
  dispatch: React.Dispatch<CartActions>;
}
interface IProductCtx {
  products: DummyProductType[];
  isLoading: boolean;
  hasMore: boolean;
  error: boolean;
  fetchData: (limit: number) => Promise<() => void>;
}

type CartProviderType = { children: React.ReactNode };
type ProductProviderType = { children: React.ReactNode };

export type {
  ProductType,
  DummyProductType,
  CartType,
  CartActions,
  ICartCtx,
  CartProviderType,
  ResetCartType,
  RemoveFromCartType,
  AddToCartType,
  DataType,
  DummyCard,
  IProductCtx,
  ProductProviderType,
};
