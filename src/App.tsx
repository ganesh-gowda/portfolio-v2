import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M5 4l14 16M19 4L5 20" />
    </svg>
  );
}

function AboutVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="about-visual" aria-hidden="true">
      <div className="about-visual-grid" />

      <motion.div
        className="portrait-frame"
        animate={reducedMotion ? undefined : { y: [-8, 8, -8], rotate: [-1, 1, -1] }}
        transition={reducedMotion ? undefined : { duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="portrait-placeholder">
          <span>GG</span>
          <small>PORTRAIT / 01</small>
        </div>
      </motion.div>

      <span className="floating-label label-a">JAVA / DSA / 550+</span>
      <span className="floating-label label-b">MYSURU / INDIA</span>
      <span className="floating-label label-c">BUILD · LEARN · SHIP</span>

      <div className="about-visual-orbit orbit-1" />
      <div className="about-visual-orbit orbit-2" />
    </div>
  );
}

function LandingPage() {
  const reducedMotion = useReducedMotion();

  const words = [
    ['CREATE', 'word-a'],
    ['BREAK', 'word-b'],
    ['BUILD', 'word-c'],
    ['SOLVE', 'word-d'],
    ['LEARN', 'word-e'],
    ['REPEAT', 'word-f'],
  ];

  return (
    <main className="landing-page">
      <section id="hero" className="landing-hero section-frame">
        <div className="landing-photo" aria-hidden="true" />
        <div className="landing-vignette" aria-hidden="true" />
        <div className="landing-scanlines" aria-hidden="true" />
        <div className="landing-grain" aria-hidden="true" />

        <motion.div className="landing-words" aria-hidden="true">
          {words.map(([word, className], index) => (
            <motion.span
              key={word}
              className={`landing-word ${className}`}
              initial={reducedMotion ? false : { opacity: 0, y: 18, filter: 'blur(10px)' }}
              animate={reducedMotion ? undefined : { opacity: 0.38, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.15 + index * 0.13, duration: 0.8 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <div className="landing-copy">
          <motion.p
            className="landing-name"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            hi, i'm
          </motion.p>

          <motion.h1
            className="landing-title"
            initial={reducedMotion ? false : { opacity: 0, y: 34, scale: 0.98 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            ganesh gowda.
          </motion.h1>

          <motion.p
            className="landing-subtitle"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={reducedMotion ? undefined : { opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.9 }}
          >
            engineer · designer · shipper
          </motion.p>
        </div>

        <motion.button
          className="landing-scroll-cue"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          aria-label="Scroll to About Me"
        >
          <span>scroll ↓</span>
          <span className="landing-scroll-line" />
        </motion.button>
      </section>

      <section id="about" className="section-frame about-page-section">
        <div className="section-heading about-heading">
          <div>
            <p className="eyebrow">[ 02 / ABOUT ME ]</p>
            <h2>Engineer first.<br /><em>Human always.</em></h2>
          </div>
          <p className="section-intro">
            A little context before the work: what I care about, what I enjoy building, and the way I approach problems.
          </p>
        </div>

        <div className="about-layout">
          <AboutVisual />

          <div className="about-copy about-copy-large">
            <p>
              I’m Ganesh, a computer science engineer who likes the space between a difficult problem and a surprisingly simple interface.
            </p>

            <p>
              I build across frontend, backend, APIs, databases and machine learning experiments. I also spend a lot of time with Java and DSA because I enjoy understanding how things work underneath the surface.
            </p>

            <p>
              Outside the code, I’m curious about design, music, sport and anything that makes me look at a familiar problem from a different angle.
            </p>

            <div className="about-stats">
              <div><strong>550+</strong><span>coding problems</span></div>
              <div><strong>9.4</strong><span>CGPA</span></div>
              <div><strong>∞</strong><span>things to learn</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-end section-frame" aria-label="End of introduction">
        <span className="eyebrow">END OF INTRO / KEEP EXPLORING</span>
      </section>
    </main>
  );
}

function WorkbenchPage({ initialSection = 'work' }: { initialSection?: 'work' | 'toolkit' }) {
  const [activeSection, setActiveSection] = useState<'work' | 'toolkit'>(initialSection);
  const [activeProject, setActiveProject] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection]);

  const selectSection = (section: 'work' | 'toolkit') => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', `/workbench/${section}`);
  };

  return (
    <main className="workbench-page">
      <section className="workbench-hero section-frame">
        <p className="eyebrow">[ 03 / WORKBENCH ]</p>
        <h1>Work <em>&</em><br />Toolkit</h1>
        <p>Everything I build with, grouped into one focused workspace.</p>

        <div className="workbench-tabs" role="tablist" aria-label="Workbench sections">
          <button
            className={activeSection === 'work' ? 'workbench-tab active' : 'workbench-tab'}
            onClick={() => selectSection('work')}
            role="tab"
            aria-selected={activeSection === 'work'}
          >
            Work
          </button>

          <button
            className={activeSection === 'toolkit' ? 'workbench-tab active' : 'workbench-tab'}
            onClick={() => selectSection('toolkit')}
            role="tab"
            aria-selected={activeSection === 'toolkit'}
          >
            Toolkit
          </button>
        </div>
      </section>

      {activeSection === 'work' ? (
        <section className="section-frame work-section workbench-section" id="workbench-work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">[ 03A / PROJECTS ]</p>
              <h2>Things I’ve<br /><em>built.</em></h2>
            </div>

            <p className="section-intro">
              Projects that combine interface design, APIs, data and machine learning into things I can actually ship.
            </p>
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
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
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
                  <a
                    href={projects[activeProject].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${projects[activeProject].title} on GitHub`}
                  >
                    <GitHubIcon size={19} />
                    <ExternalLink size={16} />
                  </a>
                </div>

                <h3>{projects[activeProject].title}</h3>
                <p>{projects[activeProject].description}</p>

                <div className="chip-row">
                  {projects[activeProject].stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <a
                  className="text-link"
                  href={projects[activeProject].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore repository <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.article>
          </div>
        </section>
      ) : (
        <section className="section-frame stack-section workbench-section" id="workbench-toolkit">
          <div className="section-heading">
            <div>
              <p className="eyebrow">[ 03B / TOOLKIT ]</p>
              <h2>Tools I<br /><em>trust.</em></h2>
            </div>

            <p className="section-intro">
              A focused map of the languages, frameworks and engineering foundations I use most.
            </p>
          </div>

          <div className="skill-map">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={reducedMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: Math.min(index * 0.025, 0.3),
                  duration: 0.45,
                }}
              >
                <small>{skill.group}</small>
                <strong>{skill.name}</strong>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section className="workbench-foot section-frame">
        <p>WORKBENCH / {activeSection.toUpperCase()} / END</p>
      </section>
    </main>
  );
}

function BottomDock({
  page,
  onNavigate,
}: {
  page: 'home' | 'work' | 'toolkit';
  onNavigate: (page: 'home' | 'work' | 'toolkit') => void;
}) {
  return (
    <nav className="bottom-dock" aria-label="Persistent navigation">
      <button
        className={`dock-main ${page === 'home' ? 'active' : ''}`}
        onClick={() => onNavigate('home')}
      >
        <span className="dock-emoji">👨🏻‍💻</span>
        <span>abt me</span>
      </button>

      <button
        className={`dock-link ${page === 'work' ? 'active' : ''}`}
        onClick={() => onNavigate('work')}
      >
        <span className="dock-arrow">↗</span>
        <span>work</span>
      </button>

      <button
        className={`dock-link ${page === 'toolkit' ? 'active' : ''}`}
        onClick={() => onNavigate('toolkit')}
      >
        <span className="dock-arrow">↗</span>
        <span>toolkit</span>
      </button>

      <div className="dock-divider" />

      <a className="dock-icon" href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
        <XIcon />
      </a>

      <a className="dock-icon" href="https://www.instagram.com/ganeshgowda.__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <InstagramIcon />
      </a>

      <a className="dock-icon" href="mailto:ganeshgowdam@gmail.com" aria-label="Email">
        <Mail />
      </a>

      <a className="dock-icon linkedin-icon" href="https://www.linkedin.com/in/ganesh-gowda-m/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>

      <a className="dock-icon" href="https://github.com/ganesh-gowda" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GitHubIcon />
      </a>
    </nav>
  );
}

export default function App() {
  const [page, setPage] = useState<'home' | 'work' | 'toolkit'>(() => {
    const path = window.location.pathname;

    if (path.includes('/workbench/toolkit')) return 'toolkit';
    if (path.includes('/workbench/work')) return 'work';

    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;

      if (path.includes('/workbench/toolkit')) {
        setPage('toolkit');
      } else if (path.includes('/workbench/work')) {
        setPage('work');
      } else {
        setPage('home');
      }

      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (next: 'home' | 'work' | 'toolkit') => {
    const path = next === 'home' ? '/' : `/workbench/${next}`;

    window.history.pushState(null, '', path);
    setPage(next);

    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <div className="site-shell">
      {page === 'home' ? <LandingPage /> : <WorkbenchPage initialSection={page} />}

      <BottomDock page={page} onNavigate={navigate} />
    </div>
  );
}
