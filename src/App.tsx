import Cards from './components/Cards';
import { useFetch } from './hooks/useFetch';

function App() {
  const { products, isLoading } = useFetch();
  // console.log(Array.isArray(products));
  // console.log(Object.hasOwn(products, 'products'));
  // console.log({ products: 'test' });
  return isLoading ? <p>Loading...</p> : <Cards products={products} />;
}

export default App;
