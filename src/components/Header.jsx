import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header">
      <h1 className="logo">QuickCart</h1>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/category/Electronics">Electronics</Link>
        <Link to="/category/Clothing">Clothing</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <input
        className="search"
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </header>
  );
}

export default Header;