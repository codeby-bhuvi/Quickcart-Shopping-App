import "../styles/Header.css";

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <h1>QuickCart</h1>

      <button className="cart-button" onClick={onCartClick}>
        🛒 Cart

        {cartItemCount > 0 && (
          <span className="cart-count">{cartItemCount}</span>
        )}
      </button>
    </header>
  );
}

export default Header;