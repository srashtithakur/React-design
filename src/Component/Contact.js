import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope,faHouse } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
  return (
    <>
      <div className="gallery_section">
        <div className="container_fluid">
          <div className="about_content1">
            <h1>Contact Us</h1>
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
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-md-8 mx-auto mt-5 mb-5">
          <div className="row  justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="about_div_img">
                <img src="images/delivery-boy.jpg" className="img-fluid lazy" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex p-4 rounded contact_part mt-3">
                <div className="contact_icon mt-2">
                  {" "}
                  <FontAwesomeIcon icon={faHouse} />
                </div>

                <div className="ms-3">
                  <label className="con_label">Visit Us:</label>
                  <br />
                  <p className="con_p m-0">
                    {" "}
                    3184 Ben Street, <br />
                    New Jersey, USA
                  </p>
                </div>
              </div>
              <div className="d-flex p-4 rounded contact_part mt-3">
                <div className="contact_icon mt-2">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div className="ms-3">
                  <label className="con_label">Email:</label>
                  <br />
                  <p className="con_p m-0"> Sayhello@food.com</p>
                  <p className="con_p m-0"> Sayhello@food.com</p>
                </div>
              </div>
              <div className="d-flex p-4 rounded contact_part mt-3">
                <div className="contact_icon mt-2">
                  {" "}
                  <FontAwesomeIcon icon={faPhone} />
                </div>

                <div className=" ms-3">
                  <label className="con_label">Visit Us:</label>
                  <br />
                  <p className="con_p m-0"> 123-456-7890</p>
                  <p className="con_p m-0"> 123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">

    <div className="col-md-8 mx-auto my-5">
        <div className="row form_contact_1">

            <div className="col-md-7 pt-3">
                <div>
                    <span className="about_head_span"> ⮞⮞⮞⮞⮞</span>
                    <h2 className="about_h2 mt-1">Get Touch It</h2>
                    <form className="mt-4">
                        <div className="row mb-3">
                            <div className="col-md-6 mt-3">
                                <label className="concat_form_label">Full Name</label>
                                <input type="email" className="form-control mt-2" placeholder="Full name"/>
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="concat_form_label">Email</label>
                                <input type="email" className="form-control mt-2" placeholder="Email"/>
                            </div>


                            <div className="col-md-6 mt-3">
                                <label className="concat_form_label">Phone</label>
                                <input type="phone" className="form-control mt-2" placeholder="Phone"/>
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="concat_form_label">Subject</label>
                                <input type="phone" className="form-control mt-2" placeholder="Add to my Restaurant"/>
                            </div>
                        </div>
                        <div class="my-3">
                            <label className="concat_form_label">Message</label>
                            <textarea className="form-control mt-2 " placeholder="Start write here your message"></textarea>
                        </div>

                        <div className="">
                            <button className="btn btn-sm px-4 res_form_btn" type="button">SUBMIT NOW</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-5 pt-3">
                <div>
                    <img src="images/Smoothies.jpg" className="img-fluid res_form_img lazy"/>
                </div>
            </div>
        </div>
    </div>


</div>
<div className="container-fluid">
    <div className="col-md-12">
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14724.395313782004!2d75.85563203956859!3d22.687364618053554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce4e3fb47b5%3A0xc0233b393fbd54de!2sBhanwar%20Kuwa%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1686748719913!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="google_map"></iframe>
        </div>
    </div>

</div>
    </>
  );
}
