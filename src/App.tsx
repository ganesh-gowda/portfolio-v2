import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { projects, skills } from './data';

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.17c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18A10.9 10.9 0 0 1 12 5.4c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.28 5.71.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8h4.3v14H.35V8Zm7.04 0h4.12v1.91h.06c.57-1.08 1.98-2.22 4.08-2.22 4.36 0 5.17 2.87 5.17 6.6V22h-4.29v-6.83c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.77-2.62 3.6V22H7.39V8Z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 4l14 16M19 4L5 20" />
    </svg>
  );
}

const navItems = [
  { id: 'about', label: 'abt me' },
  { id: 'work', label: 'work' },
  { id: 'stack', label: 'toolkit' },
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
  const [activeProject, setActiveProject] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [clock, setClock] = useState('');

  useEffect(() => {
    const tick = () => {
      setClock(new Intl.DateTimeFormat('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      }).format(new Date()));
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = ['about', 'work', 'stack', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const jump = (id: string) => scrollToSection(id);

  return (
    <div className="site-shell">
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} aria-hidden="true" />

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
            <p className="eyebrow">[ 01 / INTRO ]</p>
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
            <motion.div className="hero-bottom" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }}>
              <div className="hero-role">
                <span>Software Engineer</span>
                <span className="slash">/</span>
                <span>Frontend · Full Stack · DSA</span>
              </div>
              <button className="circle-action" onClick={() => jump('about')} aria-label="Scroll to about">
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

        <section id="about" className="section-frame about-section">
          <div className="about-art" aria-hidden="true">
            <div className="scan-ring ring-one" />
            <div className="scan-ring ring-two" />
            <div className="scan-center">GG</div>
            <span className="orbit-note note-one">JAVA · DSA · 550+</span>
            <span className="orbit-note note-two">REACT · NODE · SQL</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">[ 02 / ABOUT ME ]</p>
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

        <section id="work" className="section-frame work-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">[ 03 / SELECTED WORK ]</p>
              <h2>Things I’ve<br /><em>built.</em></h2>
            </div>
            <p className="section-intro">A handful of projects where engineering, interface design, APIs and machine learning meet.</p>
          </div>

          <div className="project-stage">
            <div className="project-index">
              {projects.map((project, index) => (
                <button key={project.title} className={index === activeProject ? 'project-tab active' : 'project-tab'} onClick={() => setActiveProject(index)} aria-pressed={index === activeProject}>
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
                <div className="visual-core"><span /><span /><span /><span /></div>
                <div className="visual-data data-a">REACT<br />API<br />DATA</div>
                <div className="visual-data data-b">BUILD<br />→<br />SHIP</div>
              </div>
              <div className="project-copy">
                <div className="project-topline">
                  <span>{projects[activeProject].category}</span>
                  <a href={projects[activeProject].href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${projects[activeProject].title} on GitHub`}>
                    <GitHubIcon size={19} />
                    <ExternalLink size={16} />
                  </a>
                </div>
                <h3>{projects[activeProject].title}</h3>
                <p>{projects[activeProject].description}</p>
                <div className="chip-row">{projects[activeProject].stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a className="text-link" href={projects[activeProject].href} target="_blank" rel="noopener noreferrer">Explore repository <ArrowUpRight size={17} /></a>
              </div>
            </motion.article>
          </div>
        </section>

        <section id="stack" className="section-frame stack-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">[ 04 / TOOLKIT ]</p>
              <h2>Tools I<br /><em>trust.</em></h2>
            </div>
            <p className="section-intro">No badge collecting. Just the technologies I use to solve real problems, with room for the next one.</p>
          </div>
          <div className="skill-map">
            {skills.map((skill, index) => (
              <motion.div key={skill.name} className="skill-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: Math.min(index * 0.025, 0.3), duration: 0.45 }}>
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
            <a className="mail-button" href="mailto:ganeshgowdam@gmail.com"><Mail size={18} />ganeshgowdam@gmail.com<ArrowUpRight size={18} /></a>
            <div className="social-row">
              <a href="https://github.com/ganesh-gowda" target="_blank" rel="noopener noreferrer"><GitHubIcon size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/ganesh-gowda-m/" target="_blank" rel="noopener noreferrer"><LinkedInIcon size={18} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <nav className="floating-dock" aria-label="Primary navigation">
        <div className="dock-main-links">
          <button className={`dock-link dock-active ${activeSection === 'about' ? 'is-current' : ''}`} onClick={() => jump('about')} aria-current={activeSection === 'about' ? 'page' : undefined}>
            <span className="dock-pixel">▦</span>
            <span>abt me</span>
          </button>
          <button className={`dock-link ${activeSection === 'work' ? 'is-current' : ''}`} onClick={() => jump('work')} aria-current={activeSection === 'work' ? 'page' : undefined}>
            <span className="dock-arrow">↗</span>
            <span>work</span>
          </button>
          <button className={`dock-link ${activeSection === 'stack' ? 'is-current' : ''}`} onClick={() => jump('stack')} aria-current={activeSection === 'stack' ? 'page' : undefined}>
            <span>toolkit</span>
          </button>
        </div>

        <span className="dock-divider" aria-hidden="true" />

        <div className="dock-socials">
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="dock-social" aria-label="X">
            <XIcon size={21} />
          </a>
          <a href="https://www.instagram.com/ganeshgowda.__/" target="_blank" rel="noopener noreferrer" className="dock-social" aria-label="Instagram">
            <InstagramIcon size={21} />
          </a>
          <a href="mailto:ganeshgowdam@gmail.com" className="dock-social" aria-label="Email">
            <Mail size={21} />
          </a>
          <a href="https://www.linkedin.com/in/ganesh-gowda-m/" target="_blank" rel="noopener noreferrer" className="dock-social" aria-label="LinkedIn">
            <LinkedInIcon size={21} />
          </a>
          <a href="https://github.com/ganesh-gowda" target="_blank" rel="noopener noreferrer" className="dock-social" aria-label="GitHub">
            <GitHubIcon size={21} />
          </a>
        </div>

        <span className="dock-clock" aria-hidden="true">IST {clock}</span>
      </nav>

      <style>{`
        .floating-dock {
          position: fixed;
          left: 50%;
          bottom: max(18px, env(safe-area-inset-bottom));
          transform: translateX(-50%);
          z-index: 200;
          display: flex;
          align-items: center;
          gap: 8px;
          width: max-content;
          max-width: calc(100vw - 28px);
          padding: 7px 9px;
          border: 1px solid rgba(255,255,255,.19);
          border-radius: 999px;
          background:
            linear-gradient(180deg, rgba(42,43,45,.9), rgba(12,13,15,.94)),
            rgba(12,13,15,.96);
          box-shadow:
            0 20px 60px rgba(0,0,0,.48),
            inset 0 1px 0 rgba(255,255,255,.1),
            inset 0 -1px 0 rgba(0,0,0,.7);
          backdrop-filter: blur(22px) saturate(125%);
          -webkit-backdrop-filter: blur(22px) saturate(125%);
        }

        .dock-main-links,
        .dock-socials {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .dock-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 17px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: rgba(244,241,235,.48);
          cursor: pointer;
          font: 500 12px/1 'DM Mono', monospace;
          letter-spacing: .03em;
          transition: color .2s ease, background .2s ease, transform .2s ease;
        }

        .dock-link:hover,
        .dock-link.is-current {
          color: rgba(255,255,255,.94);
        }

        .dock-link.dock-active.is-current,
        .dock-link.dock-active {
          background: linear-gradient(180deg, rgba(122,122,122,.46), rgba(76,76,76,.38));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.16), 0 1px 0 rgba(0,0,0,.4);
          color: rgba(255,255,255,.94);
        }

        .dock-link:active,
        .dock-social:active { transform: scale(.96); }

        .dock-pixel {
          display: inline-grid;
          place-items: center;
          width: 19px;
          height: 19px;
          border-radius: 4px;
          color: #f4f1eb;
          font-size: 17px;
          line-height: 1;
        }

        .dock-arrow { color: #d9ff60; font-size: 15px; }

        .dock-divider {
          width: 1px;
          height: 27px;
          margin-inline: 5px;
          background: rgba(255,255,255,.14);
        }

        .dock-social {
          display: grid;
          place-items: center;
          width: 39px;
          height: 39px;
          border-radius: 999px;
          color: rgba(244,241,235,.73);
          transition: color .2s ease, background .2s ease, transform .2s ease;
        }

        .dock-social:hover {
          color: #fff;
          background: rgba(255,255,255,.07);
        }

        .dock-clock {
          display: none;
          padding-left: 7px;
          color: rgba(244,241,235,.32);
          font: 500 8px 'DM Mono', monospace;
          letter-spacing: .08em;
        }

        @media (max-width: 820px) {
          .floating-dock {
            bottom: max(12px, env(safe-area-inset-bottom));
            padding: 6px;
            gap: 4px;
          }

          .dock-link {
            min-height: 40px;
            padding: 0 12px;
            font-size: 11px;
          }

          .dock-social {
            width: 37px;
            height: 37px;
          }

          .dock-divider { height: 24px; margin-inline: 2px; }
          .dock-socials { gap: 1px; }
        }

        @media (max-width: 610px) {
          .dock-link { padding: 0 10px; }
          .dock-link:not(.dock-active) span:last-child { display: none; }
          .dock-active { padding-inline: 13px; }
          .dock-social { width: 34px; height: 34px; }
          .dock-socials a:nth-child(1) { display: none; }
          .dock-divider { margin-inline: 0; }
        }

        @media (max-width: 430px) {
          .floating-dock { max-width: calc(100vw - 12px); }
          .dock-link { padding: 0 9px; }
          .dock-active { padding-inline: 11px; }
          .dock-social { width: 32px; height: 32px; }
        }
      `}</style>
    </div>
  );
}
