type TimelineChapter = {
  label: string;
  title: string;
  text: string;
};

const chapters: TimelineChapter[] = [
  {
    label: '01',
    title: 'GAMES',
    text: 'My curiosity started with games. I loved seeing a machine create entire worlds, rules and experiences that felt bigger than the screen.',
  },
  {
    label: '02',
    title: 'CURIOSITY',
    text: 'Whenever something broke, I wanted to know why. I would keep digging until the strange behaviour finally made sense.',
  },
  {
    label: '03',
    title: 'TRIAL & ERROR',
    text: 'Crash, search, try again, break something else, rebuild. That cycle taught me to enjoy the process instead of being afraid of the bug.',
  },
  {
    label: '04',
    title: 'ENGINEERING',
    text: 'That same mindset became how I approach software today: DSA, React, APIs, backend systems and everything I am still learning.',
  },
];

function enhanceAbout(): void {
  const section = document.querySelector<HTMLElement>('#about');
  const story = section?.querySelector<HTMLElement>('.about-story');
  const photo = section?.querySelector<HTMLElement>('.about-photo-frame');

  if (!section || !story || !photo || section.dataset.aboutEnhanced === 'true') return;

  section.dataset.aboutEnhanced = 'true';

  // 1. Add the subtle orbital detail around the portrait.
  const orbit = document.createElement('div');
  orbit.className = 'photo-orbit';
  orbit.setAttribute('aria-hidden', 'true');
  orbit.innerHTML = '<span class="orbit-dot orbit-dot-a"></span><span class="orbit-dot orbit-dot-b"></span><span class="orbit-dot orbit-dot-c"></span>';
  photo.appendChild(orbit);

  // 2. Replace the prose block with a scroll-driven story timeline.
  story.querySelectorAll(':scope > p').forEach((node) => {
    node.classList.add('timeline-source');
    node.setAttribute('hidden', 'true');
  });

  const timeline = document.createElement('div');
  timeline.className = 'about-timeline';
  timeline.setAttribute('aria-label', 'My path into technology');

  const rail = document.createElement('div');
  rail.className = 'timeline-rail';
  rail.setAttribute('aria-hidden', 'true');
  timeline.appendChild(rail);

  chapters.forEach((chapter, index) => {
    const item = document.createElement('article');
    item.className = 'timeline-item';
    item.dataset.timelineIndex = String(index);

    item.innerHTML = `
      <div class="timeline-node" aria-hidden="true"><span></span></div>
      <div class="timeline-copy">
        <span class="timeline-number">${chapter.label}</span>
        <h3>${chapter.title}</h3>
        <p>${chapter.text}</p>
      </div>
    `;

    timeline.appendChild(item);
  });

  const firstPrinciples = story.querySelector('.about-principles');
  const footerLine = story.querySelector('.about-footer-line');
  if (firstPrinciples) {
    story.insertBefore(timeline, firstPrinciples);
  } else if (footerLine) {
    story.insertBefore(timeline, footerLine);
  } else {
    story.appendChild(timeline);
  }

  // Keep the old principle/footer markup out of the visual story.
  firstPrinciples?.setAttribute('hidden', 'true');
  footerLine?.setAttribute('hidden', 'true');

  // 4. Debugging interaction.
  const debugLab = document.createElement('div');
  debugLab.className = 'debug-lab';
  debugLab.innerHTML = `
    <button type="button" class="debug-trigger" aria-expanded="false">
      <span>something isn't working?</span>
      <strong>investigate →</strong>
    </button>
    <div class="debug-output" aria-live="polite">
      <span class="debug-line">STATUS: UNKNOWN</span>
      <span class="debug-line">BUG: NOT YET FOUND</span>
      <span class="debug-line">ACTION: KEEP DIGGING</span>
    </div>
  `;
  story.appendChild(debugLab);

  const debugTrigger = debugLab.querySelector<HTMLButtonElement>('.debug-trigger');
  debugTrigger?.addEventListener('click', () => {
    const open = debugLab.classList.toggle('is-open');
    debugTrigger.setAttribute('aria-expanded', String(open));

    if (open) {
      debugLab.querySelector('.debug-output')!.innerHTML = `
        <span class="debug-line">STATUS: CURIOUS</span>
        <span class="debug-line">BUG: UNKNOWN</span>
        <span class="debug-line">ACTION: KEEP DIGGING</span>
        <span class="debug-resolution">STATUS: LEARNING ✓</span>
      `;
    } else {
      debugLab.querySelector('.debug-output')!.innerHTML = `
        <span class="debug-line">STATUS: UNKNOWN</span>
        <span class="debug-line">BUG: NOT YET FOUND</span>
        <span class="debug-line">ACTION: KEEP DIGGING</span>
      `;
    }
  });

  // Scroll-driven chapter activation.
  const timelineItems = Array.from(section.querySelectorAll<HTMLElement>('.timeline-item'));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timelineItems.forEach((item) => item.classList.remove('is-active'));
          entry.target.classList.add('is-active');
        }
      });
    },
    { root: null, rootMargin: '-38% 0px -44% 0px', threshold: 0.05 },
  );

  timelineItems.forEach((item) => observer.observe(item));
  timelineItems[0]?.classList.add('is-active');

  // 5. Mouse-reactive ambient glow / depth.
  section.addEventListener('pointermove', (event) => {
    const rect = section.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    section.style.setProperty('--mouse-x', `${x}%`);
    section.style.setProperty('--mouse-y', `${y}%`);
    section.style.setProperty('--mouse-tilt', `${(x - 50) * 0.04}deg`);
    photo.style.setProperty('--photo-tilt', `${(x - 50) * 0.035}deg`);
  });

  section.addEventListener('pointerleave', () => {
    section.style.setProperty('--mouse-x', '50%');
    section.style.setProperty('--mouse-y', '44%');
    section.style.setProperty('--mouse-tilt', '0deg');
    photo.style.setProperty('--photo-tilt', '0deg');
  });
}

function bootAboutInteractions(): void {
  enhanceAbout();

  if (document.querySelector('#about')?.dataset.aboutEnhanced !== 'true') {
    const observer = new MutationObserver(() => enhanceAbout());
    observer.observe(document.body, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 6000);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootAboutInteractions, { once: true });
} else {
  window.requestAnimationFrame(bootAboutInteractions);
}
