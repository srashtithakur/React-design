import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg coustom_navbar">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="images/food-logo.png" className="logo_cls" alt="..." />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 coustom_nav  mx-auto">
              <li className="nav-item coustom_nav_item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  <span className="nav_link_name">Home </span>
                </NavLink>
              </li>
              <li className="nav-item coustom_nav_item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/about"
                >
                  <span className="nav_link_name">About </span>
                </NavLink>
              </li>
              <li className="nav-item coustom_nav_item">
                <NavLink className="nav-link" to="/menu">
                  <span className="nav_link_name"> Menu</span>
                </NavLink>
              </li>
              <li className="nav-item coustom_nav_item">
                <NavLink className="nav-link text-center" to="/gallery">
                  <span className="nav_link_name">Gallery</span>
                </NavLink>
              </li>

              <li className="nav-item coustom_nav_item">
                <NavLink className="nav-link" to="/restaurant">
                  <span className="nav_link_name"> Restaurant</span>
                </NavLink>
              </li>
              <li className="nav-item coustom_nav_item">
                <NavLink className="nav-link" to="/blog">
                  <span className="nav_link_name"> Blog</span>
                </NavLink>
              </li>
              <li className="nav-item coustom_nav_item">
                <NavLink className="nav-link" to="/contact">
                  <span className="nav_link_name"> Contact</span>
                </NavLink>
              </li>
            </ul>
            <div className="d-flex gap-3 align-items-center">
              <div className="user_icon">
              <FontAwesomeIcon icon={ faUser} />
              </div>
              <div className="user_icon" >
              <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div>
                <NavLink className="btn login_btn" to="/login">
                  Log In
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
