import "./App.css";
import NavBar from "./layouts/NavBar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import CartPage from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProductPage from "./pages/Product";
import CheckoutPage from "./pages/CheckOut";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
