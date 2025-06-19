import React from "react";
import "../styles/Footer.css";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="footer-containers">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Online Shopping</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Men
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Women
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Kids
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home and living
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Beauty
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Customer policies</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Contact us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary"></a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    T&C
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Experience Myntra app on mobile</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary"></a>
                </li>
                <li className="nav-item mb-2 download">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary individual-item"
                  >
                    <FaGooglePlay />
                  </a>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary individual-item "
                  >
                    <FaApple />
                  </a>
                </li>

                <h6>KEEP IN TOUCH</h6>
                <li className="nav-item mb-2 social-media">
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary margin"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary margin"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary margin"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="#"
                    className="nav-link p-0 text-body-secondary margin"
                  >
                    <FaInstagramSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24"></svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
