import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteItemInCart } from "../APIs/cart.api";

function ModalCart({ listCart }) {
  const handleDeleteItemInCart = (idItem) => {
    deleteItemInCart(idItem);
  };
  const navigate = useNavigate();
  const handleClickDetailProduct = (idProduct) => {
    navigate(`/detail-product/${idProduct}`);
  };
  const elemItem = listCart.map((item, index) => {
    return (
      <div class="media" key={index}>
        <a href={`/detail-product/${item.product.id}`}>
          <img
            class="media-object img- mr-3"
            src="assets/images/cart-1.jpg"
            alt="image"
          />
        </a>
        <div class="media-body">
          <h6>{item.product.name}</h6>
          <div class="cart-price">
            <span>{item.quantity} x</span>
            <span>{item.product.price}</span>
          </div>
        </div>
        <a
          class="remove"
          onClick={() => {
            handleDeleteItemInCart(item.id);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <i class="tf-ion-close"></i>
        </a>
      </div>
    );
  });
  return (
    <div class="dropdown-menu cart-dropdown">
      {listCart.length === 0 ? (
        <p className="text-center">Your cart currently empty!!!</p>
      ) : (
        elemItem
      )}
      <div class="cart-summary">
        {listCart.length === 0 ? null : (
          <div>
            <span class="h6">Total</span>
            <span class="total-price h6">$1799.00</span>
          </div>
        )}

        <div class="text-center cart-buttons mt-3">
          <a href="cart" class="btn btn-small btn-transparent btn-block">
            View Cart
          </a>
          {/* <a class="btn btn-small btn-main btn-block">Checkout</a> */}
        </div>
      </div>
    </div>
  );
}

export default ModalCart;
