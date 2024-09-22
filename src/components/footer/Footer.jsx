import React from "react";
import "./footer.scss";
import { useLinks } from "../../context/Context";

function Footer() {
  const { link1, link2, link3, link4 } = useLinks();
  return (
    <footer>
      <div className="top">
        <div className="logo">
          <img src="https://printify.com/pfh/assets/logo-full.svg" alt="" />
        </div>
        <div className="social">
          <div className="image">
            <img
              src="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="links">
        <div className="left">
          <div className="line1 column">
            <h4>Integrations</h4>
            <ul>
              {link1.map((e, i) => (
                <li key={i}>
                  <a href="#">{e.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="line2 column">
            <h4>Discover</h4>
            <ul>
              {link2.map((e, i) => (
                <li key={i}>
                  <a href="#">{e.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="line3 column">
            <h4>Start selling</h4>
            <ul>
              {link3.map((e, i) => (
                <li key={i}>
                  <a href="#">{e.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="line4 column">
            <h4>Printify</h4>
            <ul>
              {link4.map((e, i) => (
                <li key={i}>
                  <a href="#">{e.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="content">
          <div className="span-div">
            <span>
              <a href="">Intellectual Property Policy</a>
            </span>
            <span>
              <a href="">Terms and Services</a>
            </span>
            <span>
              <a href="">Privacy Policy</a>
            </span>
            <span>
              <a href="">Security</a>
            </span>
          </div>
          <p>© 2024 Printify, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
