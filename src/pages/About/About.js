import React from 'react';
import './About.css';

const about = () => {
    return (

        <>
        <div className="About-container">
           <div className="about-intro">
               <h1>Dedicated Teams.</h1>
               <h1>For Your Dedicated Needs.</h1>
           </div>
           <div className="about-header-img"></div>
           <div className="about-intro-container-2">
               <div className="about-1">
                   <h1>What We Do</h1>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum iure quia illo? Perspiciatis, molestiae itaque, voluptate maiores ut ab odio vero, illum blanditiis consequuntur quia.
                   </p>
                   <button className="high-quality">Get In Touch</button>
               </div>
               <div className="about-2">
                   <h1>Why We Do This</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt vitae minima et asperiores saepe dolorum porro distinctio soluta nesciunt!</p>
               </div>
           </div>
           
          
        </div>
        <div className="footer-container">
               <div className="footer-container-2">
                  <div className="services">
                      <h3>Services</h3>
                      <p>Food Service Design</p>
                      <p>Customize Your Supplies</p>
                      <p>Virtual Tabletop Designer</p>
                      <p>Recipe Resizer</p>
                  </div>
                  <div className="about">
                      <h3>About</h3>
                      <p>About us</p>
                      <p>Our Brands</p>
                      <p>Careers</p>
                  </div>
                  <div className="contact-us">
                      <h3>Contact Us</h3>
                      <p>Chat Online</p>
                      <p>Direct contact</p>
                      <p>Help center</p>
                  </div>
                  <div className="privacy">
                      <h3>Privacy</h3>
                      <p>Accessiblity policy</p>
                      <p>Privacy policy</p>
                  </div>
               </div>
               <p className="copyright">Copyright © 2021 Staurant. All rights reserved.</p>
            </div>
        </>
    )
}


export default about


