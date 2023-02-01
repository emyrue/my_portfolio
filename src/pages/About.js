import download from '../images/download.svg';
import '../style/about.css';

function About() {
  return (
    <section id="about">
      <div className="about-content">
        <h3 className="about-heading">About</h3>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea eiusmod
        </p>
        <button className="cv-button">
          <span>Get my CV</span>
          <img className="about-download" src={download} alt="" />
        </button>
      </div>
    </section>
  );
}

export default About;
