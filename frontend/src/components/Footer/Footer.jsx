import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.yummylogo} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quas labore officia consequuntur commodi voluptas sed autem fugit similique corporis dignissimos aliquid, repudiandae recusandae voluptatem unde consectetur eos ea perferendis.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>

        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li> Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2> Get in Touch</h2>
          <ul>
            <li> +1-213-456-749</li>
            <li> Contact@yummy.com</li>
          </ul>

        </div>
      </div>
      <hr />
      <p className='footer-copyright'> Copyright 2024 Tomato.com - All right reserved</p>
    </div>
  )
}

export default Footer