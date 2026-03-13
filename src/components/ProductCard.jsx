import "../styles/ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="card">

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <p>${product.price}</p>

      <span>{product.category}</span>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;