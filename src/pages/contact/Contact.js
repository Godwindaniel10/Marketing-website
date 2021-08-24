import React from 'react';
import './contact.css';

const contact = () => {
    return (
        <>
           <div className="contact-container">
              <div className="header-container">
                  <div className="box1">
                      <h1>Get In Touch</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum assumenda corrupti exercitationem, ipsum facere adipisci!</p>
                      <span className="email">
                        <i className="fas fa-envelope"></i>Staurant@gmail.com
                      </span><br /><br />
                      <span className="location">
                        <i className="fas fa-map-marker-alt"></i>Mojalini Sangling, 23 street
                      </span><br /><br />
                      <span className="phone">
                        <i className="fas fa-phone-alt"></i>+1 615-344-8080
                      </span>
                  </div>
                  <div className="contact-form">
                      <h1>Say Something ...</h1>
                      <form action="">
                          <div className="fname-and-lname-container">
                             <input type="text" name="firstName" id="firstName" placeholder="First Name*" />
                             {/*<br /><br />*/}
                             <input type="text" name="lastName" id="lastName" placeholder="Last Name*" />
                             <br /><br />
                          </div>
                          <br />
                          <input type="email" name="email" id="email" placeholder="Email*"/><br /><br />
                          <input type="text" name="suggestion" id="suggestion" className="suggestion" placeholder="Suggestion*"/>
                          <br />
                          <input type="submit" value="submit" />
                      </form>
                      <p className="others">or use your social media for personal chat. </p>
                      <div className="social-media-icons">
                          <div className="facebook"><i className="fab fa-facebook-f"></i></div>
                          <div className="twitter"><i class="fab fa-twitter"></i></div>
                          <div className="instagram"><i class="fab fa-instagram"></i></div>
                      </div>
                  </div>
              </div>
              <div className="map-section">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228002.8114483617!2d-88.01211149237416!3d37.805352263619874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8842734c8b1953c9%3A0x771f6f4ec5ccdffc!2sKentucky!5e0!3m2!1sen!2sus!4v1629705999839!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
              </div>
           </div>
        </>
    )
}

export default contact
