import './About.css';
import { personalInfo } from '../data';
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="about">
   <Reveal> 
  <div className="your-section-content">
    ...
  </div>

      <div className="about__inner">
        {/* Left: text content */}
        <div className="about__text">
          <h2 className="about__heading">Hi, I'm {personalInfo.name}</h2>

          <p className="about__bio">{personalInfo.bio}</p>

          <a href="#projects" className="about__btn">
            View Projects →
          </a>
        </div>

        {/* Right: social links card */}
        <div className="about__card">
  <div className="about__card-row">
    <span className="about__card-icon">◎</span>
    <a
      className="about__card-link"
      href={personalInfo.instagram}
      target="_blank"
      rel="noreferrer"
    >
      Instagram
    </a>
  </div>

  <div className="about__card-divider" />

  <div className="about__card-row">
    <span className="about__card-icon">in</span>
    <a
      className="about__card-link"
      href={personalInfo.linkedin}
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>
  </div>

  <div className="about__card-divider" />

  <div className="about__card-row">
    <span className="about__card-icon">▶</span>
    <a
      className="about__card-link"
      href={personalInfo.youtube}
      target="_blank"
      rel="noreferrer"
    >
      YouTube Channel
    </a>
  </div>
</div>

      </div>
      </Reveal>  
    </section>
  );
}