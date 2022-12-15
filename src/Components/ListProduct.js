import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../APIs/cart.api";
import {
  getAllCategory,
  getAllProduct,
  searchProductByCategory,
} from "../APIs/product.api";
import { ToastContainer, toast } from "react-toastify";

function ListProduct({ keyword }) {
  const itemEachPage = 6;
  // const [listProduct, setListProduct] = useState([
  //   1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7,
  // ]);
  const [listProduct, setListProduct] = useState([]);
  const [numberPage, setNumberPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listEachProductPage, setListEachProductPage] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [typeCategory, setTypeCategory] = useState(0);
  const notify = (value) => toast(value);

  useEffect(() => {
    getAllCategory(setListCategory);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    if (typeCategory == 0) {
      getAllProduct(setListProduct);
    } else {
      searchProductByCategory(typeCategory, setListProduct);
    }
  }, [typeCategory, keyword]);

  useEffect(() => {
    let filterProduct = listProduct.filter((item) => {
      let copyItem = item.productResponse.name.toLowerCase();
      return copyItem.includes(keyword.toLowerCase());
    });
    let arr = [];
    let arr1 = [];
    for (let i = 1; i <= Math.ceil(filterProduct.length / itemEachPage); i++) {
      arr.push(i);
    }

    arr1 = filterProduct.slice(
      (currentPage - 1) * itemEachPage,
      currentPage * itemEachPage
    );

    setNumberPage(arr);
    setListEachProductPage(arr1);
  }, [listProduct]);

  useEffect(() => {
    // console.log());
  }, [listEachProductPage]);

  useEffect(() => {
    let arr = [];
    arr = listProduct.slice(
      (currentPage - 1) * itemEachPage,
      currentPage * itemEachPage
    );

    setListEachProductPage(arr);
  }, [currentPage]);
  const navigate = useNavigate();
  const handleClickDetailProduct = (idProduct) => {
    navigate(`/detail-product/${idProduct}`);
  };
  const handleAddToCart = (productId, existType) => {
    if (existType.length > 0) {
      addItemToCart(
        {
          productId: productId,
          quantity: 1,
          typeId: existType[0]?.id,
        },
        notify
      );
    } else {
      addItemToCart(
        {
          productId: productId,
          quantity: 1,
          typeId: null,
        },
        notify
      );
    }
  };
  const elemListProduct = listEachProductPage?.map((item, index) => {
    return (
      <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5" key={index}>
        <div class="product">
          <div class="product-wrap">
            <a
              onClick={() => {
                handleClickDetailProduct(item.productResponse.id);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <img
                class="img-fluid w-100 mb-3 img-first"
                src={
                  item.urlImgList.length > 0
                    ? `https://res.cloudinary.com/dpnhk5kup/image/upload/${item.urlImgList[0].url}`
                    : "assets/images/322.jpg"
                }
                alt="product-img"
              />
            </a>
            <a
              onClick={() => {
                handleClickDetailProduct(item.productResponse.id);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <img
                class="img-fluid w-100 mb-3 img-second"
                src={
                  item.urlImgList.length > 0
                    ? `https://res.cloudinary.com/dpnhk5kup/image/upload/${item.urlImgList[0].url}`
                    : "assets/images/444.jpg"
                }
                alt="product-img"
              />
            </a>
          </div>

          <span class="onsale">Sale</span>
          <div class="product-hover-overlay">
            <a
              onClick={() => {
                handleAddToCart(item.productResponse.id, item.typeList);
              }}
            >
              <i class="tf-ion-android-cart text-white"></i>
            </a>
            <a>
              <i class="tf-ion-ios-heart"></i>
            </a>
          </div>

          <div class="product-info">
            <h2 class="product-title h5 mb-0">
              <a
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleClickDetailProduct(item.productResponse.id);
                }}
              >
                {item.productResponse.name}
              </a>
            </h2>
            <span class="price">{item.productResponse.price}đ</span>
          </div>
        </div>
      </div>
    );
  });

  const elemPage = numberPage?.map((item, index) => {
    if (currentPage === item) {
      return (
        <li
          class="page-item active"
          key={index}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setCurrentPage(item);
          }}
        >
          <a class="page-link">{item}</a>
        </li>
      );
    }
    return (
      <li
        class="page-item"
        key={index}
        style={{ cursor: "pointer" }}
        onClick={() => {
          setCurrentPage(item);
        }}
      >
        <a class="page-link">{item}</a>
      </li>
    );
  });
  const elemCategory = listCategory?.map((item, index) => {
    return (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    );
  });
  return (
    <section class="products-shop section">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="row align-items-center">
              <div class="col-lg-12 mb-4 mb-lg-0">
                <div class="section-title">
                  <h2 class="d-block text-left-sm">Products</h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <div class="heading d-flex justify-content-between mb-5 mr-4">
                      <p class="result-count mb-0">
                        {" "}
                        {/* Showing 1–6 of {listProduct.length} results */}
                      </p>
                      <form class="ordering " method="get">
                        <select
                          name="orderby"
                          class="orderby form-control"
                          aria-label="Shop order"
                          onChange={(e) => {
                            // alert(e.target.value);
                            setTypeCategory(e.target.value);
                          }}
                        >
                          <option value={0} selected="selected">
                            All Category
                          </option>
                          {elemCategory}
                        </select>
                        {/* <input type="hidden" name="paged" value="1" /> */}
                      </form>
                    </div>

                    <div class="heading d-flex justify-content-between mb-5">
                      <p class="result-count mb-0">
                        {" "}
                        {/* Showing 1–6 of {listProduct.length} results */}
                      </p>
                      <form class="ordering " method="get">
                        <select
                          name="orderby"
                          class="orderby form-control"
                          aria-label="Shop order"
                        >
                          <option value="" selected="selected">
                            Default sorting
                          </option>
                          <option value="">Sort by popularity</option>
                          <option value="">Sort by average rating</option>
                          <option value="">Sort by latest</option>
                          <option value="">Sort by price: low to high</option>
                          <option value="">Sort by price: high to low</option>
                        </select>
                        <input type="hidden" name="paged" value="1" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              {elemListProduct}
              <div class="col-12">
                <nav aria-label="Page navigation">
                  <ul class="pagination">
                    {elemPage.length > 0 ? (
                      <li
                        class="page-item"
                        onClick={() => {
                          if (currentPage === 1) {
                            setCurrentPage(currentPage);
                          } else {
                            setCurrentPage(currentPage - 1);
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <a class="page-link" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                    ) : null}

                    {elemPage}
                    {elemPage.length > 0 ? (
                      <li
                        class="page-item"
                        onClick={() => {
                          if (currentPage === numberPage.length) {
                            setCurrentPage(currentPage);
                          } else {
                            setCurrentPage(currentPage + 1);
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <a class="page-link" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <form class="mb-5">
              <section class="widget widget-colors mb-5">
                <h3 class="widget-title h4 mb-4">Shop by color</h3>
                <ul class="list-inline">
                  <li class="list-inline-item mr-4">
                    <div class="custom-control custom-checkbox color-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="color1"
                      />
                      <label
                        class="custom-control-label sky-blue"
                        for="color1"
                      ></label>
                    </div>
                  </li>
                  <li class="list-inline-item mr-4">
                    <div class="custom-control custom-checkbox color-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="color2"
                        checked
                      />
                      <label
                        class="custom-control-label red"
                        for="color2"
                      ></label>
                    </div>
                  </li>
                  <li class="list-inline-item mr-4">
                    <div class="custom-control custom-checkbox color-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="color3"
                      />
                      <label
                        class="custom-control-label dark"
                        for="color3"
                      ></label>
                    </div>
                  </li>
                  <li class="list-inline-item mr-4">
                    <div class="custom-control custom-checkbox color-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="color4"
                      />
                      <label
                        class="custom-control-label magenta"
                        for="color4"
                      ></label>
                    </div>
                  </li>
                  <li class="list-inline-item mr-4">
                    <div class="custom-control custom-checkbox color-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="color5"
                      />
                      <label
                        class="custom-control-label yellow"
                        for="color5"
                      ></label>
                    </div>
                  </li>
                </ul>
              </section>

              <section class="widget widget-sizes mb-5">
                <h3 class="widget-title h4 mb-4">Shop by Sizes</h3>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="size1"
                    checked
                  />
                  <label class="custom-control-label" for="size1">
                    L Large
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="size2"
                  />
                  <label class="custom-control-label" for="size2">
                    XL Extra Large
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="size3"
                  />
                  <label class="custom-control-label" for="size3">
                    M Medium
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="size4"
                  />
                  <label class="custom-control-label" for="size4">
                    S Small
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="size5"
                  />
                  <label class="custom-control-label" for="size5">
                    XS Extra Small
                  </label>
                </div>
              </section>

              <button type="button" class="btn btn-black btn-small">
                Filter
              </button>
            </form>

            {/* <section class="widget widget-popular mb-5">
              <h3 class="widget-title mb-4 h4">Popular Products</h3>
              <a class="popular-products-item media" href="/single-product">
                <img
                  src="assets/images/p-1.jpg"
                  alt=""
                  class="img-fluid mr-4"
                />
                <div class="media-body">
                  <h6>
                    Contrast <br />
                    Backpack
                  </h6>
                  <span class="price">$45</span>
                </div>
              </a>

              <a class="popular-products-item media" href="/single-product">
                <img
                  src="assets/images/p-2.jpg"
                  alt=""
                  class="img-fluid mr-4"
                />
                <div class="media-body">
                  <h6>
                    Hoodie with <br />
                    Logo
                  </h6>
                  <span class="price">$45</span>
                </div>
              </a>

              <a class="popular-products-item media" href="/single-product">
                <img
                  src="assets/images/p-3.jpg"
                  alt=""
                  class="img-fluid mr-4"
                />
                <div class="media-body">
                  <h6>
                    Traveller
                    <br />
                    Backpack
                  </h6>
                  <span class="price">$45</span>
                </div>
              </a>
            </section> */}
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </section>
  );
}

export default ListProduct;
