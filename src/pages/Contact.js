import mobileTop from '../images/image_geometry_1.png';
import topLeft from '../images/contact-top-left.png';
import bottomRight from '../images/contact-bottom-right.png';
import '../style/contact.css';

function Contact() {
  return (
    <section id="contact">
      <form>
        <h2 className="form-heading">Get Started</h2>
        <p className="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="flex-container">
          <div className="input-div">
            <label htmlFor="name">Your Name</label>
            <input className="input-box" type="text" id="name" name="name" />
          </div>
          <div className="input-div">
            <label htmlFor="email">Your Email</label>
            <input className="input-box" type="text" id="email" name="email" />
          </div>
        </div>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Write your message"></textarea>
        <button type="submit" className="submit-button">Start Collaboration</button>
      </form>
      <img src={mobileTop} alt="" className="mobile-top" />
      <img src={topLeft} alt="" className="contact-top-left" />
      <img src={bottomRight} alt="" className="contact-bottom-right" />
    </section>
  );
}

export default Contact;