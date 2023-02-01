import Cards from './components/Cards';
import { useFetch } from './hooks/useFetch';

function App() {
  const { products } = useFetch();
  console.log(products);
  // console.log(Array.isArray(products));
  // console.log(Object.hasOwn(products, 'products'));
  // console.log({ products: 'test' });
  return products.length > 0 && <Cards products={products} />;
}

export default App;
