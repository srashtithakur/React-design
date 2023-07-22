import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <>
      <div className="banner-section">
        <div className="container-fluid">
          <div className="search_box">
            <h1>Good Food For Your Everyday</h1>
            <p>
              Maecenas sometimes lorem eleifend orci some soft. Some do not have
              a large farm. Stress
            </p>
            <form className="d-flex gap-2 text-white">
              <div>
                <input
                  type="text"
                  className="form-control cstm_cntrl form_placeholder"
                  id=""
                  placeholder="City,Place,Division"
                />
              </div>
              <div>
                <select
                  className="form-select cstm_select"
                  aria-label="Default select example"
                >
                  <option selected>Resturant</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div>
                <button type="button" className="btn cstm_btn">
                  {" "}
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
                </button>
              </div>
            </form>
          </div>
          <div className="img_box">
            <img
              src="images/slider_img1.png"
              className="img_box_height"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="work_block_section">
        <div className="container-fluid">
          <div className="col-md-8 mx-auto">
            <div className="how_work pt-5">
              <div className="text-center">
                <span className="icon_color"> ⮞⮞⮞⮞⮞</span>
                <h4>How it work</h4>
                <p className="choose_content">The Process of our service</p>
              </div>
              <div className="mt-4 px-5 row">
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <div className="d-flex align-items-center gap-2">
                    {" "}
                    <div>
                      <img
                        src="images/restaurant_mini.png"
                        className=""
                        alt="..."
                      />
                    </div>
                    <div>
                      <span className="choose">Choose Restaurant</span>
                    </div>
                  </div>

                  <p className="choose_content">
                    Duis pretium gravida enim, vel maximus ligula fermentum a
                    sed rhoncus eget ex.
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <div className="d-flex align-items-center gap-2">
                    {" "}
                    <div>
                      <img
                        src="images/burger_mini.png"
                        className=""
                        alt="..."
                      />
                    </div>
                    <div>
                      <span className="choose">Select, you love to eat</span>
                    </div>
                  </div>

                  <p className="choose_content">
                    Duis pretium gravida enim, vel maximus ligula fermentum a
                    sed rhoncus eget ex.
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
                  <div className="d-flex align-items-center gap-2">
                    {" "}
                    <div>
                      <img
                        src="images/delivery-man.png"
                        className=""
                        alt="..."
                      />
                    </div>
                    <div>
                      <span className="choose">Pickup or delivery</span>
                    </div>
                  </div>

                  <p className="choose_content">
                    Duis pretium gravida enim, vel maximus ligula fermentum a
                    sed rhoncus eget ex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category_section">
        <div className="container-fluid">
          <div className="col-md-8 mt-5 mx-auto">
            <div className="text-center ">
              <span className="icon_color"> ⮞⮞⮞⮞⮞</span>
              <h4>How it work</h4>
              <p className="choose_content">The Process of our service</p>
            </div>

            <div className="row mb-5">
              <div className="col-lg-4 col-md-4">
                <div className="box_item position-relative">
                  <div className="box_image_header">
                    <img
                      src="images/breakfast.jpg"
                      className="box_img"
                      alt="..."
                    />
                  </div>
                  <div className="box_item_footer">
                    <p className="box_p">Breakfast</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="box_item position-relative">
                  <div className="box_image_header">
                    <img src="images/lunch.jpg" className="box_img" alt="..." />
                  </div>
                  <div className="box_item_footer">
                    <p className="box_p">Lunch</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="box_item position-relative">
                  <div className="box_image_header">
                    <img
                      src="images/dinner.jpg"
                      className="box_img"
                      alt="..."
                    />
                  </div>
                  <div className="box_item_footer">
                    <p className="box_p">Dinner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="timer_section">
        <div className="container-fluid">
          <div className="col-md-6 mx-auto">
            <div className="d-flex py-5 gap-5">
              <div className="timer_box">
                <h3>275</h3>
                <span className="time_content"> Daily Orders</span>
              </div>
              <div className="timer_box">
                <h3>925</h3>
                <span className="time_content"> Active Reataurant</span>
              </div>
              <div className="timer_box">
                <h3>989</h3>
                <span className="time_content">Daily traffic</span>
              </div>
              <div className="timer_box">
                <h3>275</h3>
                <span className="time_content"> Delivery Boy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu_section pb-5">
        <div className="container-fluid">
          <div className="col-md-9 mx-auto ">
            <div className="text-center py-5">
              <span className="icon_color"> ⮞⮞⮞⮞⮞</span>
              <h4>Restaurant With Special Menu All</h4>
              <p className="choose_content">The Process of our service</p>
            </div>
            <div className="menu_box ">
              <ul
                class="nav nav-pills mb-3 py-5 justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active menu_btn_tab"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Alll
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link menu_btn_tab"
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link menu_btn_tab"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    lunch
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link menu_btn_tab"
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link menu_btn_tab"
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link menu_btn_tab"
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
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row px-4 pb-5">
                    <div className="col-lg-6 mb-3">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="col-lg-6">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className="row px-4 pb-5">
                    <div className="col-lg-6 mb-3">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="col-lg-6">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="row px-4 pb-5">
                    <div className="col-lg-6 mb-3">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="col-lg-6">
                      <div className="tab_boxes d-flex p-2 gap-3">
                        <div className="tab_img">
                          <img
                            src="images/lunch.jpg"
                            class="img-fluid menu_img1 "
                          />
                        </div>
                        <div className="dish_name text-white">
                          <h3 className="menu_head_content">
                            Heirloom Tomato caprese
                          </h3>
                          <p className="menu_sub_content">
                            Food Type: chicken stick
                          </p>
                          <p className="menu_sub_content">
                            Delivery time, 60 minutes, Delivery Cost Free
                          </p>
                        </div>
                        <div className="dollar_box">
                          <span className="dollar_rupees">$86</span>
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
      {/* <div className="testimonal_section">
        <div className="contanier-fluid">
          <div className="col-md-7 py-5">
            <div className="row">
              <div className="col-md-3">
                <div class="d-flex align-items-start">
                  <div
                    className="nav flex-column nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active test_tab mb-2"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <span>
                        {" "}
                        <img
                          src="images/testimonial1.png"
                          className="img-fluid testimonial_tab_img"
                        />
                      </span>
                    </button>
                    <button
                      className="nav-link test_tab mb-2"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      {" "}
                      <span>
                        {" "}
                        <img
                          src="images/testimonial3.png"
                          className="img-fluid testimonial_tab_img"
                        />
                      </span>
                    </button>
                    <button
                      className="nav-link test_tab mb-2"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <span>
                        {" "}
                        <img
                          src="images/testimonial2.png"
                          className="img-fluid testimonial_tab_img"
                        />
                      </span>
                    </button>
                    <button
                      className="nav-link test_tab mb-2"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-settings"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span>
                        {" "}
                        <img
                          src="images/testimonial1.png"
                          className="img-fluid testimonial_tab_img"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                ></div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
       <div className="blog_section">
        <div className="container-fluid">
          <div className="col-md-8 mt-5 mx-auto">
            <div className="text-center ">
              <span className="icon_color"> ⮞⮞⮞⮞⮞</span>
              <h4>How it work</h4>
              <p className="choose_content">The Process of our service</p>
            </div>

            <div className="row mb-5">
              <div className="col-lg-4 col-md-4">
                <div className="box_item position-relative">
                  <div className="work_box_header">
                    <img
                      src="images/blog1.jpg"
                      className="work_img"
                      alt="..."
                    />
                  </div>
                  <div className="blog_content pb-3 pt-2 px-4 ">
                    <p className="blog_span">Fast Food</p>
                    <h5 class="blog_h5 mt-2"> Air Fryer French Fries</h5>
                    <p className="BLOG_P">There are many variations of passages of Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="box_item position-relative">
                  <div className="work_box_header">
                    <img
                      src="images/blog2.jpg"
                      className="work_img"
                      alt="..."
                    />
                  </div>
                  <div className="blog_content pb-3 pt-2 px-4 ">
                    <p className="blog_span">Fast Food</p>
                    <h5 class="blog_h5 mt-2"> Any-kind-of-fruit Galette</h5>
                    <p className="BLOG_P">There are many variations of passages of Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="box_item position-relative">
                  <div className="work_box_header">
                    <img
                      src="images/blog3.jpg"
                      className="work_img"
                      alt="..."
                    />
                  </div>
                  <div className="blog_content pb-3 pt-2 px-4 ">
                    <p className="blog_span">Fast Food</p>
                    <h5 class="blog_h5 mt-2"> Layered Yogurt Flatbreads</h5>
                    <p className="BLOG_P">There are many variations of passages of Lorem Ipsum</p>
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
