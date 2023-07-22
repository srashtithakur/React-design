import React from "react";
export default function Blogdetails() {
  return (
    <>
      <div className="gallery_section">
        <div className="container_fluid">
          <div className="about_content1">
            <h1>  Blogdetails</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb d-flex justify-content-center">
                <li className="breadcrumb-item ">
                  <a href="#" className="home_item">
                    Home
                  </a>
                </li>
                <li
                  className ="breadcrumb-item active about_item"
                  aria-current="page"
                >
                BlogDetails
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="mx-auto col-md-10">

            <div className="row">
                <div className="col-md-12 col-lg-8 ">
                    <div className="row ">
                        <div className=" col-md-12 col-sm-10 pt-5">
                            <div className="box_item ">
                                <div className="blog_images1">
                                    <img src="images/blog1.jpg" className="img-fluid blog_img blog_img_ch details_img lazy"/>
                                </div>
                                <div className="blog_content pb-3 pt-2 px-4">
                                    <span className="blog_span">Fast Food</span>
                                    <h5 className="blog_h5 mt-2"> Air Fryer French Fries</h5>
                                    <p className="BLOG_P mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione labore, consequatur natus, expedita suscipit officiis error quas voluptas, illum quisquam sit quo cumque eligendi illo? Quibusdam magnam id non! </p>

                                </div>
                                <div className="comment_part mt-3">
                                    <h4 className=" all_head_name mb-3">Comment</h4>
                                    <div className="d-flex">
                                        <div className=" me-3">
                                            <img src="images/testimonial1.png" className=" test_img lazy"/>
                                        </div>
                                        <div className="">
                                            <h5 className="test_name d-inline">Jonathan Doe</h5>
                                            <span>on June 15, 2023</span>
                                            <p className="my-3 testimonial_p d-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae, voluptas quis facere et dicta minima assumenda qui, ducimus debitis consequuntur amet nihil porro animi temporibus unde maxime itaque facilis!</p>
                                            <button type="button" className="btn btn-sm res_form_btn px-3 reply_btn">Reply</button>
                                        </div>
                                    </div>

                                    <textarea className="comment_input mt-4" placeholder="comment here..."></textarea>
                                    <div className="comment_btn">
                                        <button type="button" className="btn">CANCEL</button>
                                        <button type="button" className="btn res_form_btn reply_btn">COMMENT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-4 py-5">


                    <div className="searchInputWrapper">
                        <input className="searchInput" type="text" placeholder="Search"/>
                        <i className="searchInputIcon fa fa-search search_icon"></i>
                        
                    </div>

                    <div className="m_right_block mt-4">
                        <span className="fea_blog">Featured Recipes</span>
                        <div className="row ">
                            <div className="col-12 mt-4">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="images/dinner.jpg" className="img-fluid fea_img_blog lazy"/>
                                    </div>
                                    <div className="col-8 p-0">
                                        <h6 className="mt-2 blog_h6_right">Cream Cheese Frosting</h6>
                                        <div className="d-flex">
                                            <div className="me-5">
                                                <p className="right_blog_p">April 27,2023</p>
                                            </div>
                                            <div className="">
                                                <p className="right_blog_p"><i className="bi bi-chat-dots-fill me-1"></i>127</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="images/dinner.jpg" className="img-fluid fea_img_blog lazy"/>
                                    </div>
                                    <div className="col-8 p-0">
                                        <h6 className="mt-2 blog_h6_right">Cream Cheese Frosting</h6>
                                        <div className="d-flex">
                                            <div className="me-5">
                                                <p className="right_blog_p">April 27,2023</p>
                                            </div>
                                            <div className="">
                                                <p className="right_blog_p"><i className="bi bi-chat-dots-fill me-1"></i>127</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="images/dinner.jpg" className="img-fluid fea_img_blog lazy"/>
                                    </div>
                                    <div className="col-8 p-0">
                                        <h6 className="mt-2 blog_h6_right">Cream Cheese Frosting</h6>
                                        <div className="d-flex">
                                            <div className="me-5">
                                                <p className="right_blog_p">April 27,2023</p>
                                            </div>
                                            <div className="">
                                                <p className="right_blog_p"><i className="bi bi-chat-dots-fill me-1"></i>127</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="cat_blog_span">Categories</span>
                        <div className="row mt-3">
                            <div className="col-12">
                                <p className="categories_p categories_p1">All Categories</p>
                            </div>
                            <div className="col-12">
                                <p className="categories_p">Images Posts</p>
                            </div>
                            <div className="col-12">
                                <p className="categories_p">Life Style</p>
                            </div>
                            <div className="col-12">
                                <p className="categories_p">Photograph</p>
                            </div>
                            <div className="col-12">
                                <p className="categories_p">Recipe</p>
                            </div>
                            <div className="col-12">
                                <p className="categories_p">Asian Food</p>
                            </div>
                            <div className="col-12">
                                <p className="categories_p">Lifestyle</p>
                            </div>
                            <div className="col-12">
                                <p className="categories_p">Tour</p>
                            </div>
                            <div className="col-12">
                                <p className="categories_p">Chines Food</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 email_box mt-3">
                        <div><img src="images/email.png" className="img-fluid email_img1 lazy"/></div>
                        <h6 className="mb-2 from_b_h6">Newsletter</h6>
                        <p className="email_p">Subscribe to our newsletter &amp; stay update</p>

                        <input type="email" name="email" placeholder="Enter your Email" className="email_input"/>
                        <button type="button" className="email_btn">SUBSCRIBE</button>

                    </div>
                </div>


            </div>
        </div>
    </div>
      </>);}