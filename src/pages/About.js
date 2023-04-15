// eslint-disable-next-line no-unused-vars
import download from '../images/download.svg';
import dotsWithTeal from '../images/dots_with_teal.png';
import '../style/about.css';

function About() {
  return (
    <section id="about">
      <div className="about-content">
        <h3 className="about-heading">About</h3>
        <p className="about-text">
          I am a full-stack web developer experienced in Ruby on Rails, React, JavaScript,
          HTML, and CSS. I am passionate about building web applications that
          are user-friendly and responsive.
          I look forward to working with you to build your next project.
        </p>
        {/* <button type="button" className="cv-button">
          <span>Get my CV</span>
          <img className="about-download" src={download} alt="" />
        </button> */}
      </div>
      <div className="about-squares">
        <div className="about-languages">
          <h4 className="about-square-heading">Languages</h4>
          <ul>
            <li className="about-list-item">HTML</li>
            <li className="about-list-item">CSS</li>
            <li className="about-list-item">JavaScript</li>
            <li className="about-list-item">Ruby</li>
          </ul>
        </div>
        <div className="about-frameworks">
          <h4 className="about-square-heading">Frameworks</h4>
          <ul>
            <li className="about-list-item">Bootstrap</li>
            <li className="about-list-item">Ruby on Rails</li>
            <li className="about-list-item">Rspec</li>
            <li className="about-list-item">Capybara</li>
          </ul>
        </div>
        <div className="about-skills">
          <h4 className="about-square-heading">Skills</h4>
          <ul>
            <li className="about-list-item">Terminal</li>
            <li className="about-list-item">Github</li>
          </ul>
        </div>
        <img alt="" src={dotsWithTeal} className="about-dots" />
      </div>
    </section>
  );
}

export default About;
