import open from '../images/resume.svg';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import resume from '../resume.pdf';
import '../style/footer.css';

function Footer() {
  return (
    <footer>
      <a className="hidden-link" href={resume} download="EmilyRobertsonResume" target="_blank" rel="noreferrer">
        <button className="resume" type="button">
          <span>Get my resume</span>
          <img className="resume-icon" alt="" src={open} />
        </button>
      </a>
      <div className="socials">
        <a href="https://github.com/emyrue/">
          <img src={github} alt="github" />
        </a>
        <a href="https://twitter.com/EmyrueRobertson">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/emilyruthrobertson/">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
