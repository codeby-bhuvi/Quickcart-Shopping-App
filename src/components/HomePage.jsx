import ProductList from "./ProductList";
import products from "../data/products";

function HomePage({ searchTerm }) {

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default HomePage;