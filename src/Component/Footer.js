import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope,faHouse } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
 <>
 <div className="footer_block">
    <div className="container-fluid">
        <div className="col-md-8 mx-auto pt-5 footer_block1">
            <div className="row footer_block2">

                <div className="col-lg-4 ">
                    <div className="pe-4 pt-3">
                        <div className="footer_heading">
                            <span className="about_head_span"> ⮞⮞⮞⮞⮞</span>
                            <h5 className="footer_h5 mt-2">About Food</h5>
                        </div>
                        <div className="footer_body mt-5">
                            <p className="footer_p1 pe-4">There are many variations of passages of Lorem Ipsum</p>
                            <div className="d-flex">
                                <span className="footer_icon2"><FontAwesomeIcon icon={faHouse} /></span>
                                <p className="footer_p2 ps-2">25/3 Abhinandan nagar, Silom road, New York,USA </p>
                            </div>
                            <div className="d-flex">
                                <span className="footer_icon2"> <FontAwesomeIcon icon={faPhone} /></span>
                                <div className="ps-2">
                                    <p className="m-0 footer_p2">123-456-7890</p>
                                    <p className="m-0 footer_p2">123-456-7890</p>
                                </div>

                            </div>
                            <div className="my-3">
                                <span className="footer_icon2"> <FontAwesomeIcon icon={faEnvelope} /></span>
                                <span className="footer_p2 ps-2">deliveryinfo@food.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="pe-4 pt-3">
                        <div className="footer_heading">
                            <span className="about_head_span"> ⮞⮞⮞⮞⮞</span>
                            <h5 className="footer_h5 mt-2">Opening Hours</h5>
                        </div>
                        <div className="footer_body mt-5">
                            <p className="m-0 footer_second_p">Monday <span className="footer_div_span2">-------------- 8.00 - 20.00</span></p>
                            <p className="m-0 footer_second_p">Tuesday <span className="footer_div_span2"> ------------- 8.00 - 20.00</span></p>
                            <p className="m-0 footer_second_p">Wednesday <span className="footer_div_span2"> ---------- 8.00 - 20.00</span></p>
                            <p className="m-0 footer_second_p">Thursday <span className="footer_div_span2"> ------------ 8.00 - 20.00</span></p>
                            <p className="m-0 footer_second_p">Friday <span className="footer_div_span2"> --------------- 8.00 - 20.00</span></p>
                            <p className="m-0 footer_second_p">Saturday <span className="footer_div_span2"> ------------ 8.00 - 20.00</span></p>
                            <p className="m-0 footer_second_p">Sunday <span className="footer_div_span2"> -------------- closed</span></p>


                        </div>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="pe-3 pt-3">
                        <div className="footer_heading">
                            <span className="about_head_span "> ⮞⮞⮞⮞⮞</span>
                            <h5 className="footer_h5 mt-2">We Are On Instagram</h5>
                        </div>
                        <div className="footer_body mt-5">
                            <div className="row justify-content-between ">
                                <div className="col-4 mb-4">

                                    <img src="images/footer1.jpg" className="img-fluid footer_images1 lazy"/>

                                </div>
                                <div className="col-4 mb-4">

                                    <img src="images/footer2.jpg" className="img-fluid footer_images1 lazy"/>

                                </div>
                                <div className="col-4  mb-4">

                                    <img src="images/footer3.jpg" className="img-fluid footer_images1 lazy"/>

                                </div>
                                <div className="col-4 mb-4">

                                    <img src="images/footer4.jpg" className="img-fluid footer_images1 lazy"/>

                                </div>
                                <div className="col-4 mb-4">

                                    <img src="images/footer5.jpg" className="img-fluid footer_images1 lazy"/>

                                </div>
                                <div className="col-4 mb-4">

                                    <img src="images/footer6.jpg" className="img-fluid footer_images1 lazy"/>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <div className="footer_part mt-5 py-4 d-flex justify-content-between">
                <div className="footer_part1">
                    <span className="footer_first">Copyright © Designed &amp; Developed by Shrinkcom Software pvt.ltd 2023</span>
                </div>

                <div className="d-flex footer_part2">

                    <a href="#" className="footer_content1 ps-3">Terms of Service</a>
                    <a href="#" className="footer_content1 ps-3">Help</a>
                    <a href="#" className="footer_content1 ps-3">Privacy Policy</a>

                </div>

            </div>
        </div>
    </div>
</div>
 </>
  );
}

export default Footer;