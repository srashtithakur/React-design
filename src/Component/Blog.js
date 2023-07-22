import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMessage } from '@fortawesome/free-solid-svg-icons'
export default function Restaurant() {
  return (
    <>
      <div className="gallery_section">
        <div className="container_fluid">
          <div className="about_content1">
            <h1>Blog Standard</h1>
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
                  Blog
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div class="blog_block">
    <div class="container-fluid">
        <div class="mx-auto col-md-8">

            <div class="row">
                <div class="col-md-12 col-lg-8">
                    <div class="row ">
                        <div class=" col-md-6 col-sm-10 pt-5">
                           <a href="/Blogdetails">
                           <div class="box_item ">
                                <div class="blog_images1">
                                    <img src="images/blog1.jpg" class="img-fluid blog_img blog_img_ch lazy"/>
                                </div>
                                <div class="blog_content pb-3 pt-2 px-4">
                                    <span class="blog_span">Fast Food</span>
                                    <h5 class="blog_h5 mt-2"> Air Fryer French Fries</h5>
                                    <p class="BLOG_P">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                           </a>
                        </div>
                        <div class="col-md-6 col-sm-10 pt-5">
                        <a href="">
                        <div class="box_item ">
                                <div class="blog_images1">
                                    <img src="images/blog2.jpg" class="img-fluid blog_img blog_img_ch lazy"/>
                                </div>
                                <div class="blog_content pb-3 pt-2 px-4">
                                    <span class="blog_span">Fast Food</span>
                                    <h5 class="blog_h5 mt-2">Layered Yogurt Flatbreads</h5>
                                    <p class="BLOG_P">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </a>
                        </div>
                        <div class=" col-md-6 col-sm-10 pt-5">
                        <a href="">
                        <div class="box_item">
                                <div class="blog_images1">
                                    <img src="images/blog3.jpg" class="img-fluid blog_img blog_img_ch lazy"/>
                                </div>
                                <div class="blog_content pb-3 pt-2 px-4">
                                    <span class="blog_span">Fast Food</span>
                                    <h5 class="blog_h5 mt-2"> Any-kind-of-fruit Galette</h5>
                                    <p class="BLOG_P">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        </a>
                        </div>
                        <div class="col-md-6 col-sm-10 pt-5">
                        <a href="">
                        <div class="box_item">
                                <div class="blog_images1">
                                    <img src="images/blog2.jpg" class="img-fluid blog_img blog_img_ch lazy"/>
                                </div>
                                <div class="blog_content pb-3 pt-2 px-4">
                                    <span class="blog_span">Fast Food</span>
                                    <h5 class="blog_h5 mt-2">Layered Yogurt Flatbreads</h5>
                                    <p class="BLOG_P">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </a>
                        </div>
                        <div class=" col-md-6 col-sm-10 pt-5">
                        <a href="">
                        <div class="box_item">
                                <div class="blog_images1">
                                    <img src="images/blog3.jpg" class="img-fluid blog_img blog_img_ch lazy"/>
                                </div>
                                <div class="blog_content pb-3 pt-2 px-4">
                                    <span class="blog_span">Fast Food</span>
                                    <h5 class="blog_h5 mt-2"> Any-kind-of-fruit Galette</h5>
                                    <p class="BLOG_P">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        </a>
                        </div>

                    </div>
                </div>
                <div class="col-md-12 col-lg-4 pt-5">


                    <div class="searchInputWrapper">
                        <input class="searchInput" type="text" placeholder="Search"/>
                        
                        
                    </div>

                    <div class="m_right_block mt-4">
                        <span class="fea_blog">Featured Recipes</span>
                        <div class="row ">
                            <div class="col-12 mt-4">
                                <div class="row">
                                <div class="col-4">
                                    <img src="images/dinner.jpg" class="img-fluid fea_img_blog lazy"/>
                                </div>
                                <div class="col-8 p-0">
                                    <h6 class="mt-2 blog_h6_right">Cream Cheese Frosting</h6>
                                    <div class="d-flex">
                                        <div class="me-5">
                                            <p class="right_blog_p">April 27,2023</p>
                                        </div>
                                        <div class="">
                                            <p class="right_blog_p"><FontAwesomeIcon icon={faMessage} />&nbsp;127</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <div class="row">
                                <div class="col-4">
                                    <img src="images/dinner.jpg" class="img-fluid fea_img_blog lazy"/>
                                </div>
                                <div class="col-8 p-0">
                                    <h6 class="mt-2 blog_h6_right">Cream Cheese Frosting</h6>
                                    <div class="d-flex">
                                        <div class="me-5">
                                            <p class="right_blog_p">April 27,2023</p>
                                        </div>
                                        <div class="">
                                            <p class="right_blog_p"><FontAwesomeIcon icon={faMessage} /> &nbsp;127</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <div class="row">
                                <div class="col-4">
                                    <img src="images/dinner.jpg" class="img-fluid fea_img_blog lazy"/>
                                </div>
                                <div class="col-8 p-0">
                                    <h6 class="mt-2 blog_h6_right">Cream Cheese Frosting</h6>
                                    <div class="d-flex">
                                        <div class="me-5">
                                            <p class="right_blog_p">April 27,2023</p>
                                        </div>
                                        <div class="">
                                            <p class="right_blog_p"><FontAwesomeIcon icon={faMessage} /> &nbsp;127</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="mt-4">
                        <span class="cat_blog_span">Categories</span>
                        <div class="row mt-3">
                            <div class="col-12">
                                <p class="categories_p categories_p1">All Categories</p>
                            </div>
                            <div class="col-12">
                                <p class="categories_p">Images Posts</p>
                            </div>
                            <div class="col-12">
                                <p class="categories_p">Life Style</p>
                            </div>
                            <div class="col-12">
                                <p class="categories_p">Photograph</p>
                            </div>
                            <div class="col-12">
                                <p class="categories_p">Recipe</p>
                            </div>
                            <div class="col-12">
                                <p class="categories_p">Asian Food</p>
                            </div>
                            <div class="col-12">
                                <p class="categories_p">Lifestyle</p>
                            </div>
                            <div class="col-12">
                                <p class="categories_p">Tour</p>
                            </div>
                            <div class="col-12">
                                <p class="categories_p">Chines Food</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-5 email_box mt-3">
                        <div><img src="images/email.png" class="img-fluid email_img1 lazy"/></div>
                        <h6 class="mb-2 from_b_h6">Newsletter</h6>
                        <p class="email_p">Subscribe to our newsletter &amp; stay update</p>
                        
                            <input type="email" name="email" placeholder="Enter your Email" class="email_input"/>
                            <button type="button" class="email_btn">SUBSCRIBE</button>
                 
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>
      </>);}