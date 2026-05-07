import './Skills.css';
import { skills } from '../data';
import Reveal from './Reveal';


export default function Skills() {
  return (
    <section id="skills" className="skills">
      <Reveal className="skills__header">
        <p className="section-label">MY ARSENAL</p>
        <h2 className="skills__title">SKILLS &amp; TECHNOLOGIES</h2>
      </Reveal>

      <div className="skills__grid">
        {/* Category 1 — bars */}
        <Reveal className="skills__card" delay={0}>
          <h3 className="skills__card-title">{skills.category1.title}</h3>
          <div className="skills__divider" />
          <ul className="skills__bar-list">
            {skills.category1.items.map((skill) => (
              <li key={skill.name} className="skills__bar-item">
                <div className="skills__bar-header">
                  <span className="skills__bar-name">{skill.name}</span>
                  <span className="skills__bar-pct">{skill.level}%</span>
                </div>
                <div className="skills__bar-track">
                  <div
                    className="skills__bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Category 2 — bars */}
        <Reveal className="skills__card" delay={120}>
          <h3 className="skills__card-title">{skills.category2.title}</h3>
          <div className="skills__divider" />
          <ul className="skills__bar-list">
            {skills.category2.items.map((skill) => (
              <li key={skill.name} className="skills__bar-item">
                <div className="skills__bar-header">
                  <span className="skills__bar-name">{skill.name}</span>
                  <span className="skills__bar-pct">{skill.level}%</span>
                </div>
                <div className="skills__bar-track">
                  <div
                    className="skills__bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Category 3 — tags */}
        <Reveal className="skills__card" delay={240}>
          <h3 className="skills__card-title">{skills.category3.title}</h3>
          <div className="skills__divider" />
          <div className="skills__tags">
            {skills.category3.tags.map((tag) => (
              <span key={tag} className="skills__tag">{tag}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
