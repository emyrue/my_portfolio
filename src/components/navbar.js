import '../style/navbar.css';
import { useState } from 'react';

function NavBar() {
  const [classes, setClasses] = useState("mobile-nav");
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
      <div className={classes}>
        <ul className="mobile-nav-links">
          <li>
            <a className="mobile-nav-link" href="/">Home</a>
          </li>
          <li>
            <a className="mobile-nav-link" href="#projects">Projects</a>
          </li>
          <li>
            <a className="mobile-nav-link" href="#about">About</a>
          </li>
          <li>
            <a className="mobile-nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;