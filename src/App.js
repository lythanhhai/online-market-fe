import Header from "./Components/Header"; //Include Header
import Footer from "./Components/Footer"; //Include Footer
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import SingleProduct from "./Components/SingleProduct";
import Checkout from "./Components/Checkout";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ForgotPassword from "./Components/ForgotPassword";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import PrivateRoutes from "./Components/PrivateRoutes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="position-relative">
          <Header></Header>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/single-product" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
