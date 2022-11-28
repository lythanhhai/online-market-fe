import React from "react";

function ModalCart() {
  return (
    <div class="dropdown-menu cart-dropdown">
      <div class="media">
        <a href="/product-single">
          <img
            class="media-object img- mr-3"
            src="assets/images/cart-1.jpg"
            alt="image"
          />
        </a>
        <div class="media-body">
          <h6>Ladies Bag</h6>
          <div class="cart-price">
            <span>1 x</span>
            <span>1250.00</span>
          </div>
        </div>
        <a href="#" class="remove">
          <i class="tf-ion-close"></i>
        </a>
      </div>

      <div class="media">
        <a href="/product-single">
          <img
            class="media-object img-fluid mr-3"
            src="assets/images/cart-2.jpg"
            alt="image"
          />
        </a>
        <div class="media-body">
          <h6>Skinny Jeans</h6>
          <div class="cart-price">
            <span>1 x</span>
            <span>1250.00</span>
          </div>
        </div>
        <a href="#" class="remove">
          <i class="tf-ion-close"></i>
        </a>
      </div>
      <div class="cart-summary">
        <span class="h6">Total</span>
        <span class="total-price h6">$1799.00</span>
        <div class="text-center cart-buttons mt-3">
          <a href="#" class="btn btn-small btn-transparent btn-block">
            View Cart
          </a>
          <a href="#" class="btn btn-small btn-main btn-block">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalCart;
