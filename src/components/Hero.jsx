import './Hero.css';
import { personalInfo } from '../data';
import Reveal from './Reveal';
import TypewriterTagline from './TypewriterTagline';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <Reveal className="hero__reveal">
        <div className="hero__top">
          <div className="hero__top-inner">
            <div className="hero__outline-ad" aria-hidden="true">
              <span>PORTFOLIO</span>
              <span>PORTFOLIO</span>
              <span>PORTFOLIO</span>
            </div>

            <div className="hero__big-text">PORTFOLIO</div>

            <div className="hero__center-row">
              <div className="hero__name-block">
                <h1 className="hero__name">{personalInfo.name}</h1>
                <TypewriterTagline texts={personalInfo.taglines} className="hero__tagline" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <a href="#about" className="hero__scroll-btn">
        Scroll Down
      </a>

      <span className="hero__star hero__star--1">✦</span>
      <span className="hero__star hero__star--2">✦</span>
    </section>
  );
}
