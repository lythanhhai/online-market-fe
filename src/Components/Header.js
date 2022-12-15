import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, useNavigate } from "react-router-dom";
import ModalCart from "./ModalCart";
import Sidebar from "./Sidebar";
import { getLocalStorage, STORAGE } from "../Utils/storage";
import RequireLogin from "../Layouts/Cart/RequireLogin";
import { useEffect, useRef, useState } from "react";
import { getItem } from "../APIs/cart.api";
import { logout } from "../APIs/auth.api";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { height } from "@mui/system";

function Header({ keyword, setKeyword }) {
  const [listCart, setListCart] = useState([]);
  useEffect(() => {
    getItem(setListCart);
  });
  const navigate = useNavigate();
  const handleLogout = () => {
    // alert("a");
    logout(navigate);
  };
  const inputSearch = useRef(null);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    listCart.forEach((item) => {
      price = item?.quantity * item.product?.price + price;
    });
    setTotalPrice(price);
  }, [listCart]);
  const onButtonClickSearch = () => {
    inputSearch.current.focus();
  };
  const [heightScroll, setHeightScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        setHeightScroll(true);
      } else {
        setHeightScroll(false);
      }
    });
  });
  return (
    <nav
      class={
        heightScroll
          ? "navbar navbar-expand-lg navbar-light bg-white w-100 navigation fixed-top h-15"
          : "navbar navbar-expand-lg navbar-light bg-white w-100 navigation"
      }
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

        <input
          type="search"
          ref={inputSearch}
          style={{
            height: "45px",
            width: "40%",
            borderRadius: 30,
            // border: "none",
            outline: "none",
            padding: "4px 15px 4px",
            backgroundColor: "rgb(235, 235, 235)",
            border: "none",
          }}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/home");
            }
          }}
          placeholder="Enter name product which you want..."
        />
        <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
          <li class="list-inline-item">
            <a
              class="search_toggle"
              id="search-icon"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                // alert("a");
                onButtonClickSearch();
              }}
            >
              <i class="tf-ion-android-search"></i>
            </a>
          </li>
          <li class="dropdown cart-nav dropdown-slide list-inline-item">
            <a
              href="/cart"
              class="dropdown-toggle cart-icon"
              // data-toggle="dropdown"
              // data-hover="dropdown"
            >
              <i class="tf-ion-android-cart"></i>
            </a>
            {getLocalStorage(STORAGE.USER_TOKEN) ? (
              <ModalCart listCart={listCart} totalPrice={totalPrice} />
            ) : (
              <RequireLogin />
            )}
          </li>
          <li class="dropdown cart-nav dropdown-slide list-inline-item">
            <a
              // href="#"
              class="dropdown-toggle cart-icon"
              data-toggle="dropdown"
              data-hover="dropdown"
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
              <a class="dropdown-item" href="/my_account">
                My Account
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
  //   <form
  //   style={{
  //     height: "0px",
  //     width: "400px",
  //     position: "absolute",
  //     top: 5,
  //     left: "35%",
  //     transform: "translate(-5, -100%)",
  //   }}
  // >
  //   <TextField
  //     // id="search-bar"
  //     ref={inputSearch}
  //     className="text h-3"
  //     onChange={(e) => {
  //       setKeyword(e.target.value);
  //     }}
  //     // label="Enter name product which you want"
  //     variant="outlined"
  //     placeholder="Enter name product which you want..."
  //     size="small"
  //     style={{
  //       height: "100%",
  //       width: "100%",
  //       borderRadius: 30,
  //     }}
  //   />
  //   <IconButton type="submit" aria-label="search">
  //     <SearchIcon style={{ fill: "blue" }} />
  //   </IconButton>
  // </form>
}
