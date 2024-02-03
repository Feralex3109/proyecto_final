import { BrowserRouter, Router, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import NavBar from "./components/navBar/navBar";
import { CartProvider } from "./context/cartContext";
import ShoppingCart from "./components/shoppingCart/shoppingCart";
import Footer from "./components/footer/footer";
import Checkout from "./components/checkout/checkout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Router>
          <Route
            path="/"
            element={
              <ItemListContainer saludo="Cinco noches en los regalos de Freddy" />
            }
          />
          <Route
            path="/categoria/:categoria"
            element={<ItemListContainer saludo="juguemos/comamos" />}
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/productos"
            element={<ItemListContainer saludo="catalogo completo" />}
          />
        </Router>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
