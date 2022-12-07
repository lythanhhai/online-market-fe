import Header from "./Components/Header"; //Include Header
import Footer from "./Components/Footer"; //Include Footer
import Home from "./Layouts/Home/Home";
import Shop from "./Components/Shop";
import SingleProduct from "./Layouts/Detail/SingleProduct";
import Checkout from "./Layouts/Process/Checkout";
import Cart from "./Layouts/Cart/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ForgotPassword from "./Components/ForgotPassword";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  HashRouter,
  Navigate,
} from "react-router-dom";
import PrivateRoutes from "./Components/PrivateRoutes";
import ProfilePage from "./Layouts/Profile/Profile";
import { getLocalStorage, STORAGE } from "./Utils/storage";
import NotFound from "./Components/NotFound";
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
            <Route path="/Home" element={<Home />}></Route>
            <Route
              // exact
              path="/single-product/:productId"
              element={<SingleProduct />}
            ></Route>

            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notfound" />} />
            {getLocalStorage(STORAGE.USER_TOKEN) ? (
              <Route>
                <Route path="/login" element={<Navigate to="/home" />} />
                <Route path="/signup" element={<Navigate to="/home" />} />
                <Route
                  path="/forgot-password"
                  element={<Navigate to="/home" />}
                />
              </Route>
            ) : (
              <Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Route>
            )}
          </Routes>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;