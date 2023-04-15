import '../style/navbar.css';
import { useState } from 'react';
import hamburger from '../images/hamburger.svg';
import close from '../images/close.svg';
import topLeft from '../images/image_geometry_1.png';
import banner from '../images/menu-bottom.png';
import menuTop from '../images/menu-top.png';

function NavBar() {
  const [listClasses, setListClasses] = useState('mobile-nav');
  return (
    <div>
      <nav className="desktop-nav">
        <ul className="nav-links">
          <li>
            <a className="nav-link" href="/">Home</a>
          </li>
          <li>
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li>
            <a className="nav-link" href="#about">About</a>
          </li>
          <li>
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <img src={topLeft} alt="icon" className="mobile-top-left" />
      <button type="button" className="hidden-button menu-icon" onClick={() => setListClasses('mobile-nav mobile-nav-show')}>
        <img src={hamburger} alt="menu" className="menu-icon" />
      </button>
      <div className={listClasses}>
        <img src={menuTop} alt="geometry" className="menu-top" />
        <ul className="mobile-nav-links">
          <li>
            <a className="mobile-nav-link" href="/" onClick={() => setListClasses('mobile-nav')}>Home</a>
          </li>
          <li>
            <a className="mobile-nav-link" href="#projects" onClick={() => setListClasses('mobile-nav')}>Projects</a>
          </li>
          <li>
            <a className="mobile-nav-link" href="#about" onClick={() => setListClasses('mobile-nav')}>About</a>
          </li>
          <li>
            <a className="mobile-nav-link" href="#contact" onClick={() => setListClasses('mobile-nav')}>Contact</a>
          </li>
        </ul>
        <img src={banner} alt="geometry" className="menu-banner" />
        <button type="button" className="hidden-button menu-close" onClick={() => setListClasses('mobile-nav')}>
          <img src={close} alt="close" className="menu-close" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
