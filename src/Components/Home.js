function Home() {
  return (
    <div className="home-container">
      <div className="main-slider slider slick-initialized slick-slider">
        <div
          class="slider-item"
          style={{
            backgroundImage: "url('assets/images/slideshow1-2.jpg')",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                <div class="slider-caption">
                  {/* <span class="lead">Trendy dress</span> */}
                  <h1 class="mt-2 mb-5">
                    <span class="text-color">Market in </span>Department
                  </h1>
                  <a href="#" class="btn btn-main">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="category section pt-3 pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item mb-4 mb-lg-0">
                <img src="assets/images/cat-1.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Stylish Leather watch</p>
                  <h4 class="mb-4">
                    up to <strong>50% </strong>off
                  </h4>
                  <a href="#" class="read-more">
                    Shop now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item mb-4 mb-lg-0">
                <img src="assets/images/cat-2.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Ladies hand bag</p>
                  <h4 class="mb-4">
                    up to <strong>40% </strong>off
                  </h4>
                  <a href="#" class="read-more">
                    Shop now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item">
                <img src="assets/images/cat-3.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Trendy shoe</p>
                  <h4 class="mb-4">
                    up to <strong>50% </strong>off
                  </h4>
                  <a href="#" class="read-more">
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="products-shop section">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="row align-items-center">
                <div class="col-lg-12 mb-4 mb-lg-0">
                  <div class="section-title">
                    <h2 class="d-block text-left-sm">Shop</h2>

                    <div class="heading d-flex justify-content-between mb-5">
                      <p class="result-count mb-0">
                        {" "}
                        Showing 1–6 of 17 results
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

              <div class="row">
                <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                  <div class="product">
                    <div class="product-wrap">
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-first"
                          src="assets/images/322.jpg"
                          alt="product-img"
                        />
                      </a>
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-second"
                          src="assets/images/444.jpg"
                          alt="product-img"
                        />
                      </a>
                    </div>

                    <span class="onsale">Sale</span>
                    <div class="product-hover-overlay">
                      <a href="#">
                        <i class="tf-ion-android-cart"></i>
                      </a>
                      <a href="#">
                        <i class="tf-ion-ios-heart"></i>
                      </a>
                    </div>

                    <div class="product-info">
                      <h2 class="product-title h5 mb-0">
                        <a href="/product-single">Floral Kirby</a>
                      </h2>
                      <span class="price">$329.10</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                  <div class="product">
                    <div class="product-wrap">
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-first"
                          src="assets/images/111.jpg"
                          alt="product-img"
                        />
                      </a>
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-second"
                          src="assets/images/444.jpg"
                          alt="product-img"
                        />
                      </a>
                    </div>

                    <div class="product-hover-overlay">
                      <a href="#">
                        <i class="tf-ion-android-cart"></i>
                      </a>
                      <a href="#">
                        <i class="tf-ion-ios-heart"></i>
                      </a>
                    </div>

                    <div class="product-info">
                      <h2 class="product-title h5 mb-0">
                        <a href="/product-single">Open knit switer</a>
                      </h2>
                      <span class="price">$29.10</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                  <div class="product">
                    <div class="product-wrap">
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-first"
                          src="assets/images/222.jpg"
                          alt="product-img"
                        />
                      </a>
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-second"
                          src="assets/images/322.jpg"
                          alt="product-img"
                        />
                      </a>
                    </div>

                    <span class="onsale">Sale</span>
                    <div class="product-hover-overlay">
                      <a href="#">
                        <i class="tf-ion-android-cart"></i>
                      </a>
                      <a href="#">
                        <i class="tf-ion-ios-heart"></i>
                      </a>
                    </div>

                    <div class="product-info">
                      <h2 class="product-title h5 mb-0">
                        <a href="/product-single">Official trendy</a>
                      </h2>
                      <span class="price">$350.00 – $355.00</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                  <div class="product">
                    <div class="product-wrap">
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-first"
                          src="assets/images/322.jpg"
                          alt="product-img"
                        />
                      </a>
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-second"
                          src="assets/images/111.jpg"
                          alt="product-img"
                        />
                      </a>
                    </div>

                    <div class="product-hover-overlay">
                      <a href="#">
                        <i class="tf-ion-android-cart"></i>
                      </a>
                      <a href="#">
                        <i class="tf-ion-ios-heart"></i>
                      </a>
                    </div>

                    <div class="product-info">
                      <h2 class="product-title h5 mb-0">
                        <a href="/product-single">Frock short</a>
                      </h2>
                      <span class="price">$249</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                  <div class="product">
                    <div class="product-wrap">
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-first"
                          src="assets/images/444.jpg"
                          alt="product-img"
                        />
                      </a>
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-second"
                          src="assets/images/222.jpg"
                          alt="product-img"
                        />
                      </a>
                    </div>

                    <div class="product-hover-overlay">
                      <a href="#">
                        <i class="tf-ion-android-cart"></i>
                      </a>
                      <a href="#">
                        <i class="tf-ion-ios-heart"></i>
                      </a>
                    </div>

                    <div class="product-info">
                      <h2 class="product-title h5 mb-0">
                        <a href="/product-single">Sleeve dress</a>
                      </h2>
                      <span class="price">$59.10</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                  <div class="product">
                    <div class="product-wrap">
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-first"
                          src="assets/images/322.jpg"
                          alt="product-img"
                        />
                      </a>
                      <a href="/product-single">
                        <img
                          class="img-fluid w-100 mb-3 img-second"
                          src="assets/images/222.jpg"
                          alt="product-img"
                        />
                      </a>
                    </div>

                    <div class="product-hover-overlay">
                      <a href="#">
                        <i class="tf-ion-android-cart"></i>
                      </a>
                      <a href="#">
                        <i class="tf-ion-ios-heart"></i>
                      </a>
                    </div>

                    <div class="product-info">
                      <h2 class="product-title h5 mb-0">
                        <a href="/product-single">Stylish dress</a>
                      </h2>
                      <span class="price">$99.00</span>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <nav aria-label="Page navigation">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
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

              <section class="widget widget-popular mb-5">
                <h3 class="widget-title mb-4 h4">Popular Products</h3>
                <a class="popular-products-item media" href="/product-single">
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

                <a class="popular-products-item media" href="/product-single">
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

                <a class="popular-products-item media" href="/product-single">
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
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="section products-main">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="title text-center">
                <h2>New arrivals</h2>
                <p>The best Online sales to shop these weekend</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/322.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/444.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <span class="onsale">Sale</span>
                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Floral Kirby</a>
                  </h2>
                  <span class="price">$329.10</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/111.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/444.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Open knit switer</a>
                  </h2>
                  <span class="price">$29.10</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/222.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/322.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <span class="onsale">Sale</span>
                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Official trendy</a>
                  </h2>
                  <span class="price">$350.00 – $355.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/322.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/111.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Frock short</a>
                  </h2>
                  <span class="price">$249</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/444.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/222.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Sleeve dress</a>
                  </h2>
                  <span class="price">$59.10</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/322.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/222.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Stylish dress</a>
                  </h2>
                  <span class="price">$99.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5 ">
              <div class="product">
                <div class="product-wrap">
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/111.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/444.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Body suite</a>
                  </h2>
                  <span class="price">$329.10</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5 ">
              <div class="product">
                <div class="product-wrap">
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/222.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/322.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Sleeve linen shirt</a>
                  </h2>
                  <span class="price">
                    <del>
                      60<pre wp-pre-tag-3=""></pre>
                    </del>
                    $50.10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section class="ads section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 offset-lg-6">
              <div class="ads-content">
                <span class="h5 deal">Deal of the day 50% Off</span>
                <h2 class="mt-3 text-white">Trendy Suit</h2>
                <p class="text-md mt-3 text-white">
                  Hurry up! Limited time offer.Grab ot now!
                </p>

                <div id="simple-timer" class="syotimer mb-5"></div>
                <a href="#" class="btn btn-main">
                  <i class="ti-bag mr-2"></i>Shop Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section products-list">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-12 col-md-12">
              <img
                src="assets/images/adsv.jpg"
                alt="Product big thumb"
                class="img-fluid w-100"
              />
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="widget-featured-entries mt-5 mt-lg-0">
                <h4 class="mb-4 pb-3">Best selllers</h4>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="/product-single">
                    <img
                      src="assets/images/p-1.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">Keds - Kickstart Pom Pom</a>
                    </h6>
                    <p class="featured-entry-meta">$42.99</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-2.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">Nike - Brasilia Medium Backpack</a>
                    </h6>
                    <p class="featured-entry-meta">$27.99</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-3.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">Guess - GU7295</a>
                    </h6>
                    <p>$38.00</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-4.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">Adidas Originals Cap</a>
                    </h6>
                    <p class="featured-entry-meta">$35.00</p>
                  </div>
                </div>
                <div class="media">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-5.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">Big Star Flip Tops</a>
                    </h6>
                    <p class="featured-entry-meta">$10.60</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="widget-featured-entries mt-5 mt-lg-0">
                <h4 class="mb-4 pb-3">New Arrivals</h4>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="/product-single">
                    <img
                      src="assets/images/p-7.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">Keds - Kickstart Pom Pom</a>
                    </h6>
                    <p class="featured-entry-meta">$42.99</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-8.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">Nike - Brasilia Medium Backpack</a>
                    </h6>
                    <p class="featured-entry-meta">$27.99</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-1.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">Guess - GU7295</a>
                    </h6>
                    <p>$38.00</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-2.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">Adidas Originals Cap</a>
                    </h6>
                    <p class="featured-entry-meta">$35.00</p>
                  </div>
                </div>
                <div class="media">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-4.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">Big Star Flip Tops</a>
                    </h6>
                    <p class="featured-entry-meta">$10.60</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section class="features border-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="feature-block">
                <i class="tf-ion-android-bicycle"></i>
                <div class="content">
                  <h5>Free Shipping</h5>
                  <p>On all order over $39.00</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="feature-block">
                <i class="tf-wallet"></i>
                <div class="content">
                  <h5>30 Days Return</h5>
                  <p>Money back Guarantee</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="feature-block">
                <i class="tf-key"></i>
                <div class="content">
                  <h5>Secure Checkout</h5>
                  <p>100% Protected by paypal</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="feature-block">
                <i class="tf-clock"></i>
                <div class="content">
                  <h5>24/7 Support</h5>
                  <p>All time customer support </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
