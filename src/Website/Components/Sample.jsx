import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faSearch,
  faWallet,
  faRandom,
  faHeart,
  faShoppingBasket,
  faMobileScreenButton

} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <>
      <div className="backdrop" />
      <a className="backtop fas fa-arrow-up" href="#" />
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5">
              <div className="header-top-welcome">
                <p>Welcome to VS Mart in Your Dream Online Store!</p>
              </div>
            </div>
            <div className="col-md-5 col-lg-3"></div>
            <div className="col-md-7 col-lg-4">
              <ul className="header-top-list">
                <li>
                  <a href="/contact-us">contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="header-part">
        <div className="container">
          <div className="header-content">
            <div className="header-media-group">
              <button className="header-user">
                <FontAwesomeIcon icon={faList} />
              </button>
              <a href="/">
                <img
                  style={{ width: 90, height: 55 }}
                  src="https://vsmart.ajspire.com/images/logo1.png"
                  alt="logo"
                />
              </a>
              <p className="text-success">
                <b>You Order, We Deliver !</b>
              </p>
              <button className="header-src">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <a href="/" className="header-logo">
              <img
                style={{ width: 150, height: 90 }}
                src="https://vsmart.ajspire.com/images/logo1.png"
                alt="logo"
              />
            </a>
            <form action="/search" className="header-form">
              <input
                type="text"
                name="search"
                placeholder="Search anything..."
                list="ecomlist"
                id="search_product"
              />
              <datalist id="ecomlist">
                {/* Add your datalist options here */}
              </datalist>
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
            <div className="header-widget-group">
              <a
                href="/customer/wallet"
                className="header-widget"
                title="Wallet List"
              >
                <FontAwesomeIcon icon={faWallet} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/compare" className="header-widget" title="Compare List">
                <FontAwesomeIcon icon={faRandom} />
                <sup>0</sup>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/wishlist" className="header-widget" title="Wishlist">
                <FontAwesomeIcon icon={faHeart} />
                <sup>0</sup>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button className="header-widget header-cart" title="Cartlist">
                <FontAwesomeIcon icon={faShoppingBasket} />
                <sup id="cart_total_products">0</sup>
                <span>
                  total price<small id="carts_total">0</small>
                </span>
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button>Login </button>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ul className="navbar-list">{/* Add your list items here */}</ul>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="navbar-content">
            <ul className="navbar-list">
              <div className="navbar-item dropdown">
                {" "}
                <a className="navbar-link " href="/">
                  Home
                </a>
              </div>
            

              <li className="navbar-item ">
                <a className="navbar-link " href="/shop">
                  Shop
                </a>
              </li>

              <li className="navbar-item ">
                <a className="navbar-link " href="/about">
                  About{" "}
                </a>
              </li>
              <li className="navbar-item ">
                <a className="navbar-link " href="/banking_details">
                  Banking Details
                </a>
              </li>
              <li className="navbar-item ">
                <a className="navbar-link " href="/download">
                  Download
                </a>
              </li>
              <li className="navbar-item ">
                <a className="navbar-link " href="/legal">
                  legal
                </a>
              </li>
              <div className="navbar-item dropdown">
                {" "}
                <a className="navbar-link " href="/blogs">
                  Blog
                </a>
              </div>
            </ul>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="navbar-info-group">
              <div className="navbar-info">
<FontAwesomeIcon icon="fa-duotone fa-mobile-screen-button" beat style={{"--fa-primary-opacity": "1",}} />     
           <p>
                  <small>call us</small>{" "}
                  <a className="link-secondary" href="tel:7057921848">
                    <span>(+91)7057921848</span>
                  </a>
                </p>
              </div>
              <div className="navbar-info">
                <i className="icofont-ui-email" />
                <p>
                  <small>email us</small>{" "}
                  <a
                    className="link-secondary"
                    href="mailto:sandipgadekar143@gmail.com"
                  >
                    <span>sandipgadekar143@gmail.com</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
