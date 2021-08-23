import React from 'react';
import './contact.css';

const contact = () => {
    return (
        <>
           <div className="contact-container">
              <div className="header-container">
                  <div className="box1">
                      <h1>Get In Touch</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex atque dicta minima inventore nesciunt, fuga nemo. Magni, dolorum voluptates. Voluptate porro voluptatibus commodi nobis!</p>
                  </div>
                  <div className="contact-form"></div>
              </div>
              <div className="map-section">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228002.8114483617!2d-88.01211149237416!3d37.805352263619874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8842734c8b1953c9%3A0x771f6f4ec5ccdffc!2sKentucky!5e0!3m2!1sen!2sus!4v1629705999839!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
              </div>
           </div>
        </>
    )
}

export default contact
