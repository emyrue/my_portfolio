import '../style/navbar.css';

function NavBar() {
  return (
    <nav>
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
  );
}

export default NavBar;