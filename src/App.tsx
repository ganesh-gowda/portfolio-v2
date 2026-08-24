import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Mail,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects, skills } from './data';

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.17c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.72 0-1.26.45-2.29 1.19-3.1.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.28 5.71.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
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

function LeetCodeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15.2 7.4 11.1 3.3" />
      <path d="M9.2 4.6 4.9 8.9c-2.2 2.2-2.2 5.8 0 8l2.2 2.2c2.2 2.2 5.8 2.2 8 0l4-4" />
      <path d="M8.8 12h8.3" />
    </svg>
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
        <div className="about-intro">
          <p className="eyebrow">[ 02 / ABOUT ME ]</p>
          <motion.h2
            className="about-pixel-heading"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            about me_
          </motion.h2>
          <p className="about-intro-line">
            the person behind the projects, the bugs, and the endless curiosity.
          </p>
        </div>

        <div className="about-layout">
          <motion.div
            className="about-photo-panel"
            initial={reducedMotion ? false : { opacity: 0, x: -28 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-photo-frame">
              <img
                src="/about-me.jpg"
                alt="Ganesh Gowda"
                className="about-photo"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                  event.currentTarget.parentElement?.classList.add('missing-photo');
                }}
              />
              <div className="photo-fallback" aria-hidden="true">
                <span>YOUR<br />PHOTO</span>
                <small>DROP / about-me.jpg</small>
              </div>
              <div className="photo-index">02 / 01</div>
              <div className="photo-caption">GANESH GOWDA / COMPUTER SCIENCE</div>
            </div>
          </motion.div>

          <motion.div
            className="about-story"
            initial={reducedMotion ? false : { opacity: 0, x: 28 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="story-lead">
              My relationship with technology started long before I knew I wanted to become a software engineer.
            </p>
            <p>
              A lot of it came from games. I was fascinated by the idea that a machine could create these entire worlds, rules and experiences from lines of code and hardware. Whenever something went wrong, I rarely just walked away from it.
            </p>
            <p>
              A game would crash. A system would behave strangely. Something on the computer simply would not work. I would spend hours trying one thing, breaking something else, searching for clues, trying again, and slowly narrowing down what was actually happening.
            </p>
            <p>
              That trial-and-error mindset stayed with me. Today I get the same satisfaction from debugging an API, figuring out why a React component behaves unexpectedly, designing a backend flow, or finally solving a problem that looked impossible an hour earlier.
            </p>
            <div className="about-principles">
              <div><span>01</span><strong>curiosity</strong><p>Ask why before memorising how.</p></div>
              <div><span>02</span><strong>iteration</strong><p>Build, break, learn, rebuild.</p></div>
              <div><span>03</span><strong>craft</strong><p>Make the result feel as good as it works.</p></div>
            </div>
            <div className="about-footer-line">
              <span>JAVA · DSA · REACT · NODE · SQL · ML</span>
              <span>STILL LEARNING →</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="landing-end section-frame" aria-label="End of introduction">
        <span className="eyebrow">END OF INTRO / KEEP EXPLORING</span>
      </section>
    </main>
  );
}

function WorkbenchPage() {
  const [activeProject, setActiveProject] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <main className="workbench-page">
      <section className="workbench-hero section-frame">
        <p className="eyebrow">[ 03 / WORKBENCH ]</p>
        <h1>work_</h1>
        <p>projects, tools, and things i've built, broken, rebuilt, and shipped.</p>
      </section>

      <section className="section-frame toolkit-section workbench-section" id="workbench-toolkit">
        <div className="section-heading">
          <div>
            <p className="eyebrow">[ 03A / TOOLKIT ]</p>
            <h2>tools I<br /><em>trust.</em></h2>
          </div>
          <p className="section-intro">Languages, frameworks and engineering foundations I use to turn ideas into working systems.</p>
        </div>

        <div className="toolkit-marquee-shell">
          <div className="toolkit-marquee-track">
            {[...skills, ...skills].map((skill, index) => (
              <div className="toolkit-pill" key={`${skill.name}-${index}`}>
                <span className="toolkit-group">{skill.group}</span>
                <strong>{skill.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame work-section workbench-section" id="workbench-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">[ 03B / BUILD LOG ]</p>
            <h2>things i've<br /><em>built.</em></h2>
          </div>
          <p className="section-intro">Projects that combine interface design, APIs, data and machine learning into things I can actually ship.</p>
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
              <div className="chip-row">
                {projects[activeProject].stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <a className="text-link" href={projects[activeProject].href} target="_blank" rel="noopener noreferrer">
                Explore repository <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="workbench-reach section-frame">
        <p className="eyebrow">[ 03C / REACH OUT ]</p>
        <h2>have something<br /><em>worth building?</em></h2>
        <a href="mailto:ganeshgowdam@gmail.com" className="reach-link">let's talk <ArrowUpRight size={22} /></a>
      </section>

      <section className="workbench-foot section-frame">
        <p>WORKBENCH / END</p>
      </section>
    </main>
  );
}

function BottomDock({ page, onNavigate }: { page: 'home' | 'work'; onNavigate: (page: 'home' | 'work') => void }) {
  return (
    <nav className="bottom-dock" aria-label="Persistent navigation">
      <button className={`dock-main ${page === 'home' ? 'active' : ''}`} onClick={() => onNavigate('home')}>
        <span className="dock-emoji">🧑🏻‍💻</span>
        <span>abt me</span>
      </button>
      <button className={`dock-link ${page === 'work' ? 'active' : ''}`} onClick={() => onNavigate('work')}>
        <span className="dock-arrow">↗</span>
        <span>work</span>
      </button>
      <div className="dock-divider" />
      <a className="dock-icon" href="https://github.com/ganesh-gowda" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
      <a className="dock-icon linkedin-icon" href="https://www.linkedin.com/in/ganesh-gowda-m/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
      <a className="dock-icon" href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><LeetCodeIcon /></a>
      <a className="dock-icon" href="https://www.instagram.com/ganeshgowda.__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
      <a className="dock-icon" href="mailto:ganeshgowdam@gmail.com" aria-label="Email"><Mail /></a>
    </nav>
  );
}

export default function App() {
  const [page, setPage] = useState<'home' | 'work'>(() => {
    const path = window.location.pathname;
    if (path.includes('/workbench/')) return 'work';
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setPage(path.includes('/workbench/') ? 'work' : 'home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (next: 'home' | 'work') => {
    const path = next === 'home' ? '/' : '/workbench/work';
    window.history.pushState(null, '', path);
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="site-shell">
      {page === 'home' ? <LandingPage /> : <WorkbenchPage />}
      <BottomDock page={page} onNavigate={navigate} />
    </div>
  );
}
