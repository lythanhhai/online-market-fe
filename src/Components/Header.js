import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import ModalCart from "./ModalCart";
import Sidebar from "./Sidebar";
function Header() {
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
            <ModalCart />
          </li>
          <li class="dropdown cart-nav dropdown-slide list-inline-item">
            <a
              href="#"
              class="dropdown-toggle cart-icon"
              data-toggle="dropdown"
              data-hover="dropdown"
            >
              <i class="tf-ion-ios-person mr-3"></i>
            </a>
            <div
              className="dropdown-menu cart-dropdown"
              style={{
                width: "100px !important",
              }}
            >
              <a
                href="#"
                style={{
                  width: "100px !important",
                }}
              >
                aaaa
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
