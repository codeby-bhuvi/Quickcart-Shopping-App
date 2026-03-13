import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import CartPage from "./components/CartPage";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>

      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route
          path="/"
          element={<HomePage searchTerm={searchTerm} />}
        />

        <Route
          path="/category/:category"
          element={<CategoryPage />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;