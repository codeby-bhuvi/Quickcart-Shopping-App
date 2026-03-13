import "../styles/CartSidebar.css";

function CartSidebar({ isOpen, cart, onUpdateQuantity, onRemoveItem, onClose }) {
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={onClose}>✕</button>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} width="50" />

            <div>
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>

            <div className="quantity-controls">
              <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>

            <button
              className="remove-btn"
              onClick={() => onRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <div className="cart-total">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default CartSidebar;