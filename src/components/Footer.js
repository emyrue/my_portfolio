import open from '../images/resume.svg';
import angellist from '../images/angellist.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import '../style/footer.css';

function Footer() {
  return (
    <footer>
      <button className="resume" type="button">
        <span>Get my resume</span>
        <img className="resume-icon" alt="" src={open} />
      </button>
      <div className="socials">
        <img src={github} alt="github" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
        <img src={angellist} alt="angellist" />
      </div>
    </footer>
  );
}

export default Footer;
