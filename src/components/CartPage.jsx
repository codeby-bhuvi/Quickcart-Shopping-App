import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {

  const { cart, setCart } = useContext(CartContext);

  const increaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);

    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>

            <img src={item.image} alt={item.name} width="120" />

            <h3>{item.name}</h3>

            <p>${item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <button onClick={() => decreaseQty(item.id)}>−</button>

            <button onClick={() => increaseQty(item.id)}>+</button>

            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>

          </div>
        ))
      )}

    </div>
  );
}

export default CartPage;