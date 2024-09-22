import React from "react";
import "./navbar.scss";
import { FiMenu } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <FiMenu />
        <img
          className="img1"
          src="https://static.ada.support/images/5a93af0b-c1ec-45fc-9cc8-0a3aa12ee4d0.svg"
          alt=""
        />
        <img
          className="img2"
          src="https://printify.com/pfh/assets/logo-full.svg"
          alt=""
        />
      </div>
      <div className="links">
        <ul>
          <li>Catalog</li>
          <li className="dropdown">
            How it works &nbsp;
            <GoTriangleDown />
            <ul className="dropdown-content">
              <div className="dropdown-wrapper">
                <li>How Printify Works</li>
                <li>Printify On Demend</li>
                <li>Printify Quality Promise</li>
                <li>What to Sell?</li>
              </div>
            </ul>
          </li>
          <li>Pricing</li>
          <li>Blog</li>
          <li className="dropdown">
            Services &nbsp;
            <GoTriangleDown />
            <ul className="dropdown-content">
              <div className="dropdown-wrapper">
                <li>Printify Studio</li>
                <li>Printify Express Delivery</li>
                <li>Transfer Products</li>
                <li>Order In Bulk</li>
                <li>Expert Program</li>
              </div>
            </ul>
          </li>
          <li className="dropdown">
            Use-cases &nbsp;
            <GoTriangleDown />
            <ul className="dropdown-content">
              <div className="dropdown-wrapper">
                <li>Printify Studio</li>
                <li>Printify Express Delivery</li>
                <li>Transfer Products</li>
                <li>Order In Bulk</li>
                <li>Expert Program</li>
              </div>
            </ul>
          </li>
          <li className="dropdown">
            Need help? &nbsp;
            <GoTriangleDown />
            <ul className="dropdown-content">
              <div className="dropdown-wrapper">
                <li>Printify Studio</li>
                <li>Printify Express Delivery</li>
                <li>Transfer Products</li>
                <li>Order In Bulk</li>
                <li>Expert Program</li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
      <div className="btns">
        <div className="login btn">Log in</div>
        <div className="signup btn">Sing up</div>
      </div>
      <div className="bot-btn">
        <img
          src="https://static.ada.support/images/5a93af0b-c1ec-45fc-9cc8-0a3aa12ee4d0.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
