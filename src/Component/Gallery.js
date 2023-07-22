import React from "react";
export default function Gallery() {
  return (
    <>
      <div className="gallery_section">
        <div className="container_fluid">
          <div className="about_content1">
            <h1>Gallery</h1>
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
                  Gallery
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pt-5 gallery-section" id="gallery">
          <div id="btncontainer" className="filter">
            <a className="gallery_tab gallery_tab-active" href="#all">
              ALL
            </a>
            <a className="gallery_tab" href="#italian">
              Italian
            </a>
            <a className="gallery_tab" href="#cheesy">
              Cheesy
            </a>
            <a className="gallery_tab" href="#vegeterian">
              Vegeterian
            </a>
          </div>

          <div className="gallery sets">
            <a className="all italian">
              <img
                src="images/gallery1.jpg"
                className="img-fluid lazy gallery_img"
              />
            </a>

            <a className="all italian">
              <img
                src="images/gallery2.jpg"
                className="img-fluid lazy gallery_img"
              />
            </a>

            <a className="all italian">
              <img
                src="images/gallery3.jpg"
                className="img-fluid lazy gallery_img"
              />
            </a>

            <a className="all italian">
              <img
                src="images/gallery4.jpg"
                className="img-fluid lazy gallery_img"
              />
            </a>

            <a className="all cheesy">
              <img
                src="images/gallery5.jpg"
                className="img-fluid lazy gallery_img"
              />
            </a>

            <a className="all cheesy">
              <img
                src="images/gallery6.jpg"
                className="img-fluid lazy gallery_img"
              />
            </a>

            <a className="all vegeterian">
              <img
                src="images/gallery7.jpg"
                className="img-fluid lazy gallery_img"
              />
            </a>
            <a className="all vegeterian">
              <img
                src="images/blog2.jpg"
                className="img-fluid lazy gallery_img"
              />
            </a>
          </div>
        </div>
      </div>
  
        <div className="container">
          <div className="work_heading pt-5">
            <span className="work_head_span category_head_span"> ⮞⮞⮞⮞⮞</span>
            <h2 className="work_head_h2 my-1">Popular Dishes</h2>
            <p className="work_head_p">The Process of our service</p>
          </div>
        </div>
        <div className="wrapper">
          <div className="my-slider slider_slick">
            <div className="three_columns">
              <figure className="img_flip img_flip-hor position-relative">
                <img
                  src="images/swiper1.jpg"
                  className="img-fluid lazy   slick_img"
                />

                <figcaption className="fig_back_hover">
                  <p className="out_img_p mt-3">Food</p>
                </figcaption>
              </figure>
            </div>
            <div className="three_columns">
              <figure className="img_flip img_flip-hor position-relative">
                <img
                  src="images/blog1.jpg"
                  className="img-fluid lazy   slick_img"
                />

                <figcaption className="fig_back_hover">
                  <p className="out_img_p mt-3">Food</p>
                </figcaption>
              </figure>
            </div>
            <div className="three_columns">
              <figure className="img_flip img_flip-hor position-relative">
                <img
                  src="images/footer1.jpg"
                  className="img-fluid lazy   slick_img"
                />

                <figcaption className="fig_back_hover">
                  <p className="out_img_p mt-3">Food</p>
                </figcaption>
              </figure>
            </div>
            <div className="three_columns">
              <figure className="img_flip img_flip-hor position-relative">
                <img
                  src="images/swiper4.jpg"
                  className="img-fluid lazy   slick_img"
                />

                <figcaption className="fig_back_hover">
                  <p className="out_img_p mt-3">Food</p>
                </figcaption>
              </figure>
            </div>
            <div class="three_columns">
              <figure className="img_flip img_flip-hor position-relative">
                <img
                  src="images/swiper5.jpg"
                  className="img-fluid lazy   slick_img"
                />

                <figcaption className="fig_back_hover">
                  <p className="out_img_p mt-3">Food</p>
                </figcaption>
              </figure>
            </div>
            <div className="three_columns">
              <figure className="img_flip img_flip-hor position-relative">
                <img
                  src="images/footer4.jpg"
                  className="img-fluid lazy   slick_img"
                />

                <figcaption className="fig_back_hover">
                  <p className="out_img_p mt-3">Food</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

      
    </>
  );
}
