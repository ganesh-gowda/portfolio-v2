import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, ExternalLink, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { projects, skills } from './data';

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.28], [1, 1.12]);
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.25]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [clock, setClock] = useState('00:00:00');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(new Intl.DateTimeFormat('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      }).format(now));
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const jump = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <div className="site-shell">
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} aria-hidden="true" />

      <header className="topbar">
        <button className="wordmark" onClick={() => jump('hero')} aria-label="Back to top">
          GG<span>/</span>26
        </button>
        <div className="topbar-center">SOFTWARE ENGINEER · MYSURU / INDIA</div>
        <div className="topbar-meta">
          <span>IST {clock}</span>
          <span className="live-dot" aria-label="Currently available" />
          <button className="menu-trigger" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="menu-panel">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => jump(item.id)}>
              <span>{item.label}</span>
              <ArrowUpRight size={18} />
            </button>
          ))}
        </div>
      )}

      <main>
        <section id="hero" className="hero section-frame">
          <motion.div
            className="hero-orbit hero-orbit-a"
            animate={reducedMotion ? undefined : { rotate: 360 }}
            transition={reducedMotion ? undefined : { duration: 28, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          />
          <motion.div
            className="hero-orbit hero-orbit-b"
            animate={reducedMotion ? undefined : { rotate: -360 }}
            transition={reducedMotion ? undefined : { duration: 44, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          />
          <motion.div
            className="hero-field"
            style={reducedMotion ? undefined : { scale: heroScale, y: heroY, opacity: heroOpacity }}
            aria-hidden="true"
          >
            <div className="field-noise" />
            <div className="field-grid" />
            <div className="field-glow glow-one" />
            <div className="field-glow glow-two" />
          </motion.div>

          <div className="hero-inner">
            <p className="eyebrow reveal">[ 01 / INTRO ]</p>
            <div className="hero-title-wrap">
              <motion.p
                className="hero-side-note"
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                I build interfaces that feel<br />alive — and systems that hold up.
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                GANESH<br /><span>GOWDA</span>
              </motion.h1>
            </div>
            <motion.div
              className="hero-bottom"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
            >
              <div className="hero-role">
                <span>Software Engineer</span>
                <span className="slash">/</span>
                <span>Frontend · Full Stack · DSA</span>
              </div>
              <button className="circle-action" onClick={() => jump('work')} aria-label="Scroll to work">
                <ArrowDownRight size={22} />
              </button>
            </motion.div>
          </div>
        </section>

        <section className="ticker" aria-label="Capabilities">
          <div className="ticker-track">
            {['BUILD', 'THINK', 'DEBUG', 'LEARN', 'SHIP', 'REPEAT', 'BUILD', 'THINK', 'DEBUG', 'LEARN', 'SHIP', 'REPEAT'].map((word, index) => (
              <span key={`${word}-${index}`}>{word}<i>✳</i></span>
            ))}
          </div>
        </section>

        <section id="work" className="section-frame work-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">[ 02 / SELECTED WORK ]</p>
              <h2>Things I’ve<br /><em>built.</em></h2>
            </div>
            <p className="section-intro">A handful of projects where engineering, interface design, APIs and machine learning meet.</p>
          </div>

          <div className="project-stage">
            <div className="project-index">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  className={index === activeProject ? 'project-tab active' : 'project-tab'}
                  onClick={() => setActiveProject(index)}
                  aria-pressed={index === activeProject}
                >
                  <span>{project.number}</span>
                  <strong>{project.title}</strong>
                  <small>{project.category}</small>
                </button>
              ))}
            </div>

            <motion.article
              key={projects[activeProject].title}
              className={`project-feature accent-${projects[activeProject].accent}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="project-visual" aria-hidden="true">
                <span className="visual-label">LIVE CASE / {projects[activeProject].number}</span>
                <div className="visual-core">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="visual-data data-a">REACT<br />API<br />DATA</div>
                <div className="visual-data data-b">BUILD<br />→<br />SHIP</div>
              </div>
              <div className="project-copy">
                <div className="project-topline">
                  <span>{projects[activeProject].category}</span>
                  <a href={projects[activeProject].href} target="_blank" rel="noreferrer" aria-label={`Open ${projects[activeProject].title} on GitHub`}>
                    <Github size={19} />
                    <ExternalLink size={16} />
                  </a>
                </div>
                <h3>{projects[activeProject].title}</h3>
                <p>{projects[activeProject].description}</p>
                <div className="chip-row">
                  {projects[activeProject].stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <a className="text-link" href={projects[activeProject].href} target="_blank" rel="noreferrer">
                  Explore repository <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          </div>
        </section>

        <section id="about" className="section-frame about-section">
          <div className="about-art" aria-hidden="true">
            <div className="scan-ring ring-one" />
            <div className="scan-ring ring-two" />
            <div className="scan-center">GG</div>
            <span className="orbit-note note-one">JAVA · DSA · 550+</span>
            <span className="orbit-note note-two">REACT · NODE · SQL</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">[ 03 / PROFILE ]</p>
            <h2>Engineer first.<br /><em>Curious always.</em></h2>
            <p>I’m Ganesh, a computer science engineer who enjoys the space between a hard problem and a good interface. I like building products that are expressive on the surface and thoughtfully structured underneath.</p>
            <p>My work spans frontend development, APIs, databases, machine learning experiments and a lot of algorithmic problem solving. I care about clarity, performance, accessibility and learning the “why” behind the tools I use.</p>
            <div className="about-stats">
              <div><strong>550+</strong><span>coding problems</span></div>
              <div><strong>9.4</strong><span>CGPA</span></div>
              <div><strong>∞</strong><span>things to learn</span></div>
            </div>
          </div>
        </section>

        <section id="stack" className="section-frame stack-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">[ 04 / ENGINEERING STACK ]</p>
              <h2>Tools I<br /><em>trust.</em></h2>
            </div>
            <p className="section-intro">No badge collecting. Just the technologies I use to solve real problems, with room for the next one.</p>
          </div>
          <div className="skill-map">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: Math.min(index * 0.025, 0.3), duration: 0.45 }}
              >
                <small>{skill.group}</small>
                <strong>{skill.name}</strong>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-frame contact-section">
          <div className="contact-beam" aria-hidden="true" />
          <div>
            <p className="eyebrow">[ 05 / CONTACT ]</p>
            <h2>Have a problem<br /><em>worth solving?</em></h2>
          </div>
          <div className="contact-side">
            <p>For internships, software engineering roles, interesting side projects or conversations about building on the web.</p>
            <a className="mail-button" href="mailto:ganeshgowdam@gmail.com">
              <Mail size={18} />
              ganeshgowdam@gmail.com
              <ArrowUpRight size={18} />
            </a>
            <div className="social-row">
              <a href="https://github.com/ganesh-gowda" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/ganesh-gowda-m/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>GG / PORTFOLIO 2026</span>
        <span>BUILT WITH CURIOSITY · SHIPPED WITH CARE</span>
        <button onClick={() => jump('hero')}>BACK TO TOP ↑</button>
      </footer>
    </div>
  );
}
