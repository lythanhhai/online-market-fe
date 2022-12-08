import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, useNavigate } from "react-router-dom";
import ModalCart from "./ModalCart";
import Sidebar from "./Sidebar";
import { getLocalStorage, STORAGE } from "../Utils/storage";
import RequireLogin from "../Layouts/Cart/RequireLogin";
import { useEffect, useState } from "react";
import { getItem } from "../APIs/cart.api";
import { logout } from "../APIs/auth.api";
function Header() {
  const [listCart, setListCart] = useState([]);
  useEffect(() => {
    getItem(setListCart);
  });
  const navigate = useNavigate();
  const handleLogout = () => {
    // alert("a");
    logout(navigate);
  };
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation fixed-top"
      id="navbar"
    >
      <div class="container">
        <Link class="navbar-brand font-weight-bold" to={{ pathname: "/home" }}>
          Online-market
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <Sidebar /> */}

        <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
          <li class="list-inline-item">
            <a href="#" class="search_toggle" id="search-icon">
              <i class="tf-ion-android-search"></i>
            </a>
          </li>
          <li class="dropdown cart-nav dropdown-slide list-inline-item">
            <a
              href="#"
              class="dropdown-toggle cart-icon"
              data-toggle="dropdown"
              data-hover="dropdown"
            >
              <i class="tf-ion-android-cart"></i>
            </a>
            {getLocalStorage(STORAGE.USER_TOKEN) ? (
              <ModalCart listCart={listCart} />
            ) : (
              <RequireLogin />
            )}
          </li>
          <li class="dropdown cart-nav dropdown-slide list-inline-item">
            <a
              // href="#"
              class="dropdown-toggle cart-icon"
              // data-toggle="dropdown"
              // data-hover="dropdown"
              style={{
                cursor: "pointer",
              }}
            >
              <i class="tf-ion-ios-person mr-3"></i>
            </a>

            <div class="dropdown-menu cart-dropdown">
              {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> */}
              <a class="dropdown-item" href="cart">
                View cart
              </a>
              <a class="dropdown-item" href="#">
                View history
              </a>
              <a
                class="dropdown-item"
                onClick={() => {
                  handleLogout();
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                Logout
              </a>
              {/* </div> */}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;

{
  /* <li class="dropdown cart-nav dropdown-slide list-inline-item">
            <a
              href="#"
              class="dropdown-toggle cart-icon"
              data-toggle="dropdown"
              data-hover="dropdown"
            >
              <i class="tf-ion-ios-person mr-3"></i>
            </a>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
            
            </div>
          </li> */
}
