import './Navbar.css';
import { personalInfo } from '../data';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo">
        <span className="navbar__logo-star">✳</span>{personalInfo.logo}
      </a>

      <div className="navbar__center">
        <input className="navbar__search" type="text" placeholder="Search" />
      </div>

      <ul className="navbar__links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
          <a href="#contact" className="navbar__cta">Get in Touch</a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="navbar__hamburger"
        onClick={() => {
          document.querySelector('.navbar__links').classList.toggle('open');
        }}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}