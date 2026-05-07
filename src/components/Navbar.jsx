import { useEffect, useState } from 'react';
import './Navbar.css';
import { personalInfo } from '../data';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      const searchableElements = document.querySelectorAll(
        '#hero, .about__text, .about__card, .skills__card, .project-card, .contact__info, .contact__form-wrap'
      );

      const match = Array.from(searchableElements).find((element) =>
        element.innerText.toLowerCase().includes(query)
      );

      if (match) {
        match.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 350);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo">
        <span className="navbar__logo-star">&#10035;</span>{personalInfo.logo}
      </a>

      <div className="navbar__center">
        <input
          className="navbar__search"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
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
