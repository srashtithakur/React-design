import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function About() {
  return (
    <>
      <div className="about_section">
        <div className="container_fluid">
          <div className="about_content1">
            <h1>About Us</h1>
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
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-md-7 mx-auto py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="images/about.jpg"
                className=" img-fluid about_img"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className=" ">
                <span className="icon_color"> ⮞⮞⮞⮞⮞</span>
                <h4>
                  Welcome to top Food where the food change woth the seasons
                </h4>
                <p className="choose_content">
                  Aenean sed lorem est. Sed quis neque ut nibh suscipit
                  imperdiet ac non augue. Aenean ornare sit amet lectus non
                  tristique. Nunc ut volutpat lectus. Nulla velit augue,
                  pulvinar sed nisi sit amet.
                </p>
                <p className="about_p2">
                  {" "}
                  <span> ✓</span> Sed a nibh et purus aliquam imperdiet
                </p>
                <p className="about_p2">
                  <span> ✓</span>Sed a nibh et purus aliquam imperdiet
                </p>
                <p className="about_p2">
                  {" "}
                  <span> ✓</span> Sed a nibh et purus aliquam imperdiet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work_block2_section">
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
      <div className="container-fluid py-5">
        <div className="col-lg-7 mx-auto">
        <div className="row">
        <div className="col-md-6">
            <div className="position-relative">
              <img src="images/restaurant1.jpg" className="rounded round-img" alt="..." />
              <div className="d-flex justify-content-between px-3 become_content">
                        <p className="becom_head">Add your Restaurant</p>
                        <p className="become_icon"><a href="#" className="anchor_arrow"><FontAwesomeIcon icon={faArrowRight }/></a></p>
                    </div>
            </div>
            
          </div>
          <div className="col-md-6">
            <div className="position-relative">
              <img src="images/restaurant2.jpg" className="rounded round-img" alt="..." />
              <div class="d-flex justify-content-between px-3 become_content">
                        <p class="becom_head">Become a Volunteer</p>
                        <p class="become_icon"><a href="#"  className="anchor_arrow"><FontAwesomeIcon icon={faArrowRight }/></a></p>
                    </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="container">
    <div className="row py-5">
        <div className="col-lg-3 col-md-6">
            <div className="time_part p-3 py-4">
                <img src="images/delivery-bike.png" className="img-fluid time_img lazy"/>
                <h5 className="mt-2 time_h5">Fast Delivery in 1 Hour</h5>
                <p className="time_p">Vestibulum blandit viverra convallis. Pellentesque ligula urna.</p>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <div className="time_part p-3 py-4">
                <img src="images/tea.png" class="img-fluid time_img lazy"/>
                <h5 className="mt-2 time_h5">Fast Delivery in 1 Hour</h5>
                <p className="time_p">Vestibulum blandit viverra convallis. Pellentesque ligula urna.</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="time_part p-3 py-4">
                <img src="images/location-pin.png" className="img-fluid time_img lazy"/>
                <h5 className="mt-2 time_h5">Fast Delivery in 1 Hour</h5>
                <p className="time_p">Vestibulum blandit viverra convallis. Pellentesque ligula urna.</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="time_part p-3 py-4">
                <img src="images/businessman.png" className="img-fluid time_img lazy"/>
                <h5 className="mt-2 time_h5">Fast Delivery in 1 Hour</h5>
                <p className="time_p">Vestibulum blandit viverra convallis. Pellentesque ligula urna.</p>
            </div>
        </div>
    </div>
</div>
    </>
  );
}
