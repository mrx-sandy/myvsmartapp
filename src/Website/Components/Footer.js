import React from 'react'

const Footer = () => {
  return (
    <div>
  <footer className="footer-part">
  <div className="container">
    <div className="footer-row">
      <div className="col-sm-6 col-xl-4">
        <div className="footer-widget">
          <a className="footer-logo" href="/"><img style={{width: 150, height: 90}} src="https://vsmart.ajspire.com/images\logo1.png" alt="logo" /></a>
          <p className="footer-desc">Vishwakarma Super Mart Private Limited, is a direct selling company
            that deals with the distribution of a wide range of high quality, lifestyle products for day
            to day life.</p>
          <ul className="footer-social">
            <li>
              <a className="icofont-facebook" href="#" />
            </li>
            <li>
              <a className="icofont-twitter" href="#" />
            </li>
            <li>
              <a className="icofont-linkedin" href="#" />
            </li>
            <li>
              <a className="icofont-instagram" href="#" />
            </li>
            <li>
              <a className="icofont-pinterest" href="#" />
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="footer-widget contact">
          <h3 className="footer-title">contact us</h3>
          <ul className="footer-contact">
            <li><i className="icofont-ui-email" />
              <p><a className="link-secondary" href="mailto:vsmart0932@gmail.com"><span>vsmart0932@gmail.com</span></a></p>
            </li>
            <li><i className="icofont-ui-touch-phone" />
              <p> <a className="link-secondary" href="tel:8446092500"><span>+91 8446092500</span></a></p>
            </li>
            <li><i className="icofont-location-pin" />
              <p>A/P Koregaon, 2978 Jalgaon Road,
                Tal - Koregaon, Dist. Satara Pin 415501</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="footer-widget">
          <h3 className="footer-title">quick Links</h3>
          <div className="footer-links">
            <ul>
              <li><a href="/profile">My Account</a></li>
              <li><a href="/customer/all-order">Order History</a></li>
              <li><a href="/banking_details">Banking Details</a></li>
              <li><a href="/download">Download</a></li>
              <li><a href="/legal">Legal</a></li>
              <li><a href="/terms_conditions">Term and Conditions</a></li>
              <li><a href="/privcy_policy">Privacy policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="footer-bottom">
          <p className="footer-copytext">V S Mart | © Copyright 2022 by <a target="blank" href="/">
              V S
              Mart </a>
            &nbsp;&nbsp;All Rights Reserved </p><br />
          <p className="footer-copytext"> Designed by <a target="blank" href="https://www.ajspire.com">Ajspire
              Technologies
              Pvt.Ltd </a> </p>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
