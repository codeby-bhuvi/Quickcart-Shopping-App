import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import products from "../data/products";

function CategoryPage() {

  const { category } = useParams();

  const filteredProducts = products.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h2>{category} Products</h2>

      <ProductList products={filteredProducts} />

    </div>
  );
}

export default CategoryPage;