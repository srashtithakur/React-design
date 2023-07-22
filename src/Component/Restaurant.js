import React from "react";
export default function Restaurant() {
  return (
    <>
      <div className="gallery_section">
        <div className="container_fluid">
          <div className="about_content1">
            <h1>Restaurant</h1>
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
                  Restaurant
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="col-md-8 mx-auto">
          <div className="row align-items-center rest_center">
            <div className="col-md-8 pt-3">
              <span className="about_head_span"> ⮞⮞⮞⮞⮞</span>
              <h2 className="work_head_h2 my-1 res_near">
                Your Nearest Restaurant
              </h2>
              <p className="work_head_p res_near_p">
                Duis mauris augue, efficitur eu arcu sit.
              </p>
            </div>
            <div className="col-md-4 pt-3">
              <div className="about_head_part">
                <span className="res_drop_span">SHOW</span>
                <div className="dropdown d-inline ms-3">
                  <button
                    className="btn res_drop_back dropdown-toggle px-4"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    6 Restaurant
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="search_slider d-flex mt-4">
            <div className="">
              <input
                type="text"
                placeholder="Type, Place, City, Division"
                className="input_slider1 input_slider about_search1 rest_search1 me-1 place_color"
              />
            </div>
            <div className="">
              <select
                className="form-select form-select1 input_slider2 input_slider me-1 about_search1 rest_search2"
                aria-label="Default select example"
              >
                <option selected="">Restaurant</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div>
              <button
                type="button"
                className="input_slider3 input_slider about_search1 rest_search3"
              >
                <span>
                  <img src="images/search.png" className="img-fluid lazy  " />
                </span>
                &nbsp;&nbsp;Search
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mt-2">
              <a href="restaurant_details.php">
                <div className="all_restaurant">
                  <div className="position-relative">
                    <img
                      src="images/footer1.jpg"
                      className="img-fluid lazy   all_res_img"
                    />
                    <span className="time_span1">Open at 10:00 AM</span>
                  </div>

                  <div className="d-flex justify-content-between mt-2">
                    <div className="all_res_name ">Indore Sweets</div>
                    <div className="all_res_rat">
                      <span>4.6</span>
                      <span className="ms-1">
                        <i className="bi bi-star"></i>{" "}
                      </span>
                    </div>
                  </div>
                  <p className="all_res_p my-2">
                    Burger • Pizza • Pasta • Asian
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-2">
              <a href="restaurant_details.php">
                <div className="all_restaurant">
                  <div className="position-relative">
                    <img
                      src="images/footer2.jpg"
                      className="img-fluid lazy   all_res_img"
                    />
                    <span className="time_span1">Open at 10:00 AM</span>
                  </div>

                  <div className="d-flex justify-content-between mt-2">
                    <div className="all_res_name">Indore Sweets</div>
                    <div className="all_res_rat">
                      <span>4.6</span>
                      <span className="ms-1">
                        <i className="bi bi-star"></i>{" "}
                      </span>
                    </div>
                  </div>
                  <p className="all_res_p my-2">
                    Burger • Pizza • Pasta • Asian
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-2">
              <a href="restaurant_details.php">
                <div className="all_restaurant">
                  <div className="position-relative">
                    <img
                      src="images/all_res_2.jpg"
                      className="img-fluid lazy   all_res_img"
                    />
                    <span className="time_span1">Open at 10:00 AM</span>
                  </div>

                  <div className="d-flex justify-content-between mt-2">
                    <div className="all_res_name">Indore Sweets</div>
                    <div className="all_res_rat">
                      <span>4.6</span>
                      <span className="ms-1">
                        <i className="bi bi-star"></i>{" "}
                      </span>
                    </div>
                  </div>
                  <p class="all_res_p my-2">Burger • Pizza • Pasta • Asian</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-2">
              <a href="restaurant_details.php">
                <div className="all_restaurant">
                  <div className="position-relative">
                    <img
                      src="images/all_res_1.jpg"
                      className="img-fluid lazy   all_res_img"
                    />
                    <span className="time_span1">Open at 10:00 AM</span>
                  </div>

                  <div className="d-flex justify-content-between mt-2">
                    <div className="all_res_name">Indore Sweets</div>
                    <div className="all_res_rat">
                      <span>4.6</span>
                      <span className="ms-1">
                        <i className="bi bi-star"></i>{" "}
                      </span>
                    </div>
                  </div>
                  <p className="all_res_p my-2">
                    Burger • Pizza • Pasta • Asian
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-2">
              <a href="restaurant_details.php">
                <div className="all_restaurant">
                  <div className="position-relative">
                    <img
                      src="images/footer5.jpg"
                      className="img-fluid lazy   all_res_img"
                    />
                    <span className="time_span1">Open at 10:00 AM</span>
                  </div>

                  <div class="d-flex justify-content-between mt-2">
                    <div className="all_res_name">Indore Sweets</div>
                    <div className="all_res_rat">
                      <span>4.6</span>
                      <span className="ms-1">
                        <i className="bi bi-star"></i>{" "}
                      </span>
                    </div>
                  </div>
                  <p className="all_res_p my-2">
                    Burger • Pizza • Pasta • Asian
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 mt-2">
              <a href="restaurant_details.php">
                <div className="all_restaurant">
                  <div className="position-relative">
                    <img
                      src="images/footer6.jpg"
                      className="img-fluid lazy   all_res_img"
                    />
                    <span className="time_span1">Open at 10:00 AM</span>
                  </div>

                  <div className="d-flex justify-content-between mt-2">
                    <div className="all_res_name">Indore Sweets</div>
                    <div className="all_res_rat">
                      <span>4.6</span>
                      <span className="ms-1">
                        <i className="bi bi-star"></i>{" "}
                      </span>
                    </div>
                  </div>
                  <p className="all_res_p my-2">
                    Burger • Pizza • Pasta • Asian
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="pagination d-flex justify-content-center mt-5">
          <ul className="pagination modal-4 px-2 d-flex">
            <li>
              <a href="#" className="prev">
                <i className="fa fa-chevron-left me-2"></i>
                Previous
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              {" "}
              <a href="#">2</a>
            </li>
            <li>
              {" "}
              <a href="#">3</a>
            </li>
            <li>
              {" "}
              <a href="#">4</a>
            </li>
            <li>
              {" "}
              <a href="#" class="active">
                5
              </a>
            </li>
            <li>
              {" "}
              <a href="#">6</a>
            </li>
            <li>
              {" "}
              <a href="#">7</a>
            </li>
            <li>
              <a href="#" className="next next_mobile">
                {" "}
                Next
                <i className="fa fa-chevron-right ms-2"></i>
              </a>
            </li>
          </ul>
        </div>
 
      </div>
      <div class="container-fluid">

    <div className="col-md-8 mx-auto my-5">
        <div className="row">
            <div className="col-md-7 pt-3">
                <div>
                    <img src="images/res_form.png" className="img-fluid lazy   res_form_img"/>
                </div>
            </div>
            <div className="col-md-5 pt-3">
                <div>
                    <span className="about_head_span"> ⮞⮞⮞⮞⮞</span>
                    <h2 className="about_h2 mt-1">Partner With <span className="name_ff">Food </span><br/>And Do More for Your<br/> Restaurant</h2>
                    <form className="mt-4">
                        <div className="mb-3">
                            <input type="text" className="form-control res_form_input" placeholder="Restaurant Name"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control res_form_input" placeholder="Restaurant Address"/>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="email" className="form-control res_form_input" placeholder="Email"/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <input type="phone" className="form-control res_form_input" placeholder="Phone"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control res_form_input" placeholder="Type of Cruisine"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" class="form-check-input res_form_check " id="exampleCheck1"/>
                            <label className="form-check-label res_form_label" for="exampleCheck1">Are you agree with Food? Read before submit<br/> Food <span><a href="#"  className="dec_a">Terms and Conditions</a></span> </label>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn res_form_btn" type="button">SUBMIT NOW</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</div>
    </>
  );
}
