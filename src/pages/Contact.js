import mobileTop from '../images/image_geometry_1.png';
import topLeft from '../images/contact-top-left.png';
import bottomRight from '../images/contact-bottom-right.png';
import '../style/contact.css';

function Contact() {
  return (
    <section id="contact">
      <form action="https://formspree.io/f/mjvlwyao" method="POST">
        <h2 className="form-heading">Get started</h2>
        <p className="form-text">Enter your name, email, and a short summary of a project you would like me to help you with. I will get back to you as soon as possible.</p>
        <div className="flex-container">
          <div className="input-div">
            <label className="form-label" htmlFor="name">Your Name</label>
            <input className="input-box" type="text" id="name" name="name" required />
          </div>
          <div className="input-div">
            <label className="form-label" htmlFor="email">Your Email</label>
            <input className="input-box" type="email" id="email" name="email" required />
          </div>
        </div>
        <textarea className="text-area" name="message" id="message" placeholder="Write your message" required />
        <button type="submit" className="submit-button">Start Collaboration</button>
      </form>
      <img src={mobileTop} alt="" className="mobile-top" />
      <img src={topLeft} alt="" className="contact-top-left" />
      <img src={bottomRight} alt="" className="contact-bottom-right" />
    </section>
  );
}

export default Contact;
