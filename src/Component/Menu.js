import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'
export default function Menu() {
  return (
    <>
      <div className="food_menu_section">
        <div className="container_fluid">
          <div className="about_content1">
            <h1>Food's Menu</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-flex justify-content-center">
                <li className="breadcrumb-item ">
                  <a href="#" className="home_item">
                    Home
                  </a>
                </li>
                <li
                  className="breadcrumb-item active about_item"
                  aria-current="page"
                >
                  Menu
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="menu_section py-5">
        <div className="container-fluid">
          <div className="col-lg-8 mx-auto">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link menu_btn2 menu_btn1 active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link menu_btn2 menu_btn1"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Breakfast
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link menu_btn2 menu_btn1"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Lunch
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link menu_btn2 menu_btn1"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Dinner
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link menu_btn2 menu_btn1"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Coffee
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link menu_btn2 menu_btn1"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Snacks
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div class="row   menu_padding">
                  <div class="col-md-12 mt-4">
                    <div class="row ">
                      <div class="col-md-5">
                        <img
                          src="images/menu_img.jpg"
                          class="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div class="col-md-4">
                        <div>
                          <h2 class="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div class="py-3 menu_p1_padding">
                          <p class="menu_p menu_p1">Food Type: chicken stick</p>
                          <p class="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p class="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div class="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" class="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-3 px-5 star_padding">
                        <h4 class="menu_price menu_price_ch my-2">$86</h4>
                        <span class="star_res_span">Restaurant:</span>
                        <p class="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr class="menu_tr">
                              <td> 50</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 35</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 10</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 6</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 2</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 mt-4">
                    <div class="row ">
                      <div class="col-md-5">
                        <img
                          src="images/burger1.jpg"
                          class="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div class="col-md-4">
                        <div>
                          <h2 class="menu_h2_ch pb-3 m-0">Burger</h2>
                        </div>
                        <div class="py-3 menu_p1_padding">
                          <p class="menu_p menu_p1">Food Type: chicken stick</p>
                          <p class="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p class="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div class="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" class="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-3 px-5 star_padding">
                        <h4 class="menu_price menu_price_ch my-2">$86</h4>
                        <span class="star_res_span">Restaurant:</span>
                        <p class="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr class="menu_tr">
                              <td> 50</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 35</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/sandwich.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">Sandwich</h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr className="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/fastfood_img1.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr className="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/fastfood_img2.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr className="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/menu_img.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr class="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
            <div class="row   menu_padding">
                  <div class="col-md-12 mt-4">
                    <div class="row ">
                      <div class="col-md-5">
                        <img
                          src="images/menu_img.jpg"
                          class="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div class="col-md-4">
                        <div>
                          <h2 class="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div class="py-3 menu_p1_padding">
                          <p class="menu_p menu_p1">Food Type: chicken stick</p>
                          <p class="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p class="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div class="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" class="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-3 px-5 star_padding">
                        <h4 class="menu_price menu_price_ch my-2">$86</h4>
                        <span class="star_res_span">Restaurant:</span>
                        <p class="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr class="menu_tr">
                              <td> 50</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 35</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                <FontAwesomeIcon icon={faStar} />
                                   <FontAwesomeIcon icon={faStar} />
                                   <FontAwesomeIcon icon={faStar} />
                                     <FontAwesomeIcon icon={faStar} />
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 10</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 6</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 2</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 mt-4">
                    <div class="row ">
                      <div class="col-md-5">
                        <img
                          src="images/burger1.jpg"
                          class="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div class="col-md-4">
                        <div>
                          <h2 class="menu_h2_ch pb-3 m-0">Burger</h2>
                        </div>
                        <div class="py-3 menu_p1_padding">
                          <p class="menu_p menu_p1">Food Type: chicken stick</p>
                          <p class="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p class="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div class="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" class="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-3 px-5 star_padding">
                        <h4 class="menu_price menu_price_ch my-2">$86</h4>
                        <span class="star_res_span">Restaurant:</span>
                        <p class="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr class="menu_tr">
                              <td> 50</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 35</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/sandwich.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">Sandwich</h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr className="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/fastfood_img1.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr className="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/fastfood_img2.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr className="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/menu_img.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr class="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
         <div class="row   menu_padding">
                  <div class="col-md-12 mt-4">
                    <div class="row ">
                      <div class="col-md-5">
                        <img
                          src="images/menu_img.jpg"
                          class="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div class="col-md-4">
                        <div>
                          <h2 class="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div class="py-3 menu_p1_padding">
                          <p class="menu_p menu_p1">Food Type: chicken stick</p>
                          <p class="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p class="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div class="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" class="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-3 px-5 star_padding">
                        <h4 class="menu_price menu_price_ch my-2">$86</h4>
                        <span class="star_res_span">Restaurant:</span>
                        <p class="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr class="menu_tr">
                              <td> 50</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 35</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 10</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 6</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 2</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 mt-4">
                    <div class="row ">
                      <div class="col-md-5">
                        <img
                          src="images/burger1.jpg"
                          class="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div class="col-md-4">
                        <div>
                          <h2 class="menu_h2_ch pb-3 m-0">Burger</h2>
                        </div>
                        <div class="py-3 menu_p1_padding">
                          <p class="menu_p menu_p1">Food Type: chicken stick</p>
                          <p class="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p class="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div class="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" class="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-3 px-5 star_padding">
                        <h4 class="menu_price menu_price_ch my-2">$86</h4>
                        <span class="star_res_span">Restaurant:</span>
                        <p class="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr class="menu_tr">
                              <td> 50</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 35</td>
                              <td>
                                <div class="small-ratings ms-2 small-ratings1">
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                  <i class="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/sandwich.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">Sandwich</h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr className="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/fastfood_img1.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr className="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr class="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/fastfood_img2.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-3 px-5 star_padding">
                        <h4 className="menu_price menu_price_ch my-2">$86</h4>
                        <span className="star_res_span">Restaurant:</span>
                        <p className="span_star_p">Dallas Pizza - USA </p>
                        <table>
                          <tbody>
                            <tr className="menu_tr">
                              <td> 50</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 35</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 10</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 6</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                            <tr className="menu_tr">
                              <td> 2</td>
                              <td>
                                <div className="small-ratings ms-2 small-ratings1">
                                  <i className="fa fa-star rating-color"></i>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="row ">
                      <div className="col-md-5">
                        <img
                          src="images/menu_img.jpg"
                          className="img-fluid lazy   menu_img1 menu_img_ch"
                        />
                      </div>
                      <div className="col-md-4">
                        <div>
                          <h2 className="menu_h2_ch pb-3 m-0">
                            Heirloom Tomato Caprese
                          </h2>
                        </div>
                        <div className="py-3 menu_p1_padding">
                          <p className="menu_p menu_p1">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_p menu_p1">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                          <p className="menu_p menu_p1">
                            Duis mauris augue, efficitur eu arcu sit amet,
                          </p>
                        </div>
                        <div className="mt-1">
                          <a href="checkout.php">
                            {" "}
                            <button type="button" className="menu_add_btn">
                              Add to Cart
                            </button>
                          </a>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
