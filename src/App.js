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
import Seller from "./Layouts/Seller/Seller";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
        <div className="position-relative">
          { location.pathname !== '/login' && location.pathname !== '/signup' 
          && location.pathname !== '/forgot-password' && location.pathname !== '/seller' ? 
          <> <Header></Header> </>
          :<></>}
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />}></Route>
            <Route
              // exact
              path="/single-product/:productId"
              element={<SingleProduct />}
            ></Route>

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
            <Route path="/seller" element={<Seller />} />
          </Routes>
          { location.pathname !== '/login' && location.pathname !== '/signup' 
          && location.pathname !== '/forgot-password' && location.pathname !== '/seller' ? 
          <>  <Footer></Footer> </>
          :<></>}
        </div>
    </div>
  );
}
export default App;
