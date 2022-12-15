import '../style/navbar.css';
import hamburger from '../images/hamburger.svg'
import { useState } from 'react';

function NavBar() {
  const [listClasses, setListClasses] = useState("mobile-nav");
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
      <img src={hamburger} className={"menu-icon"}/>
      <div className={listClasses}>
        <ul className="mobile-nav-links">
          <li>
            <a className="mobile-nav-link" href="/" onClick={() => setListClasses("mobile-nav")}>Home</a>
          </li>
          <li>
            <a className="mobile-nav-link" href="#projects" onClick={() => setListClasses("mobile-nav")}>Projects</a>
          </li>
          <li>
            <a className="mobile-nav-link" href="#about" onClick={() => setListClasses("mobile-nav")}>About</a>
          </li>
          <li>
            <a className="mobile-nav-link" href="#contact" onClick={() => setListClasses("mobile-nav")}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;