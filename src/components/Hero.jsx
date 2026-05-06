import './Hero.css';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__top">
        <div className="hero__top-inner">
          <div className="hero__big-text">PORTFOLIO</div>

          <div className="hero__center-row">
            <div className="hero__name-block">
              <h1 className="hero__name">{personalInfo.name}</h1>
              <div className="hero__tagline">{personalInfo.tagline}</div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-btn">
        Scroll Down
      </a>

      <span className="hero__star hero__star--1">✦</span>
      <span className="hero__star hero__star--2">✦</span>
    </section>
  );
}