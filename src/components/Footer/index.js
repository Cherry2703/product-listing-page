import React from 'react';

import { Link } from 'react-router-dom';

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div className="footer-subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p><img src="https://res.cloudinary.com/ramcharan/image/upload/v1728495535/product-listing-page/footer/United_States_of_America_US_ipwy84.png" alt="USD" /> USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-links">
          <div className="footer-column">
            <h3>mettā muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <h3 className='follow-us-heading'>FOLLOW US</h3>
          <div className="footer-social-icons">
            <Link to="#"><FaInstagram/></Link>
            <Link to="#"><FaLinkedin/></Link>
          </div>
          <h3>mettā muse ACCEPTS</h3>
          <div className="footer-payment-icons">
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728495535/product-listing-page/footer/gpay-icon_uzkypj.png" alt='gpay' />
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728495535/product-listing-page/footer/master-card-icon_vct9hd.png" alt="MasterCard"/>
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728495535/product-listing-page/footer/paypal-icon_hsdbsw.png" alt="PayPal" />
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728495535/product-listing-page/footer/amex-pay-icon_vsomrh.png" alt="Amex" />
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728495535/product-listing-page/footer/apple-pay-icon_nie6ej.png" alt="Apple Pay" />
            <img src="https://res.cloudinary.com/ramcharan/image/upload/v1728495535/product-listing-page/footer/q-pay-icon_hmgqpy.png" alt="O Pay" />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



