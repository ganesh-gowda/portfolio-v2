const liveDemos: Record<string, string> = {
  KrishiAI: '',
  'Crypto X': '',
  MediConnect: '',
};

const githubRepos: Record<string, string> = {
  KrishiAI: 'https://github.com/ganesh-gowda/KrishiAI',
  'Crypto X': 'https://github.com/ganesh-gowda/Crypto-X',
  MediConnect: '',
};

function githubIcon() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = '<path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.17c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.72 0-1.26.45-2.29 1.19-3.1.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.28 5.71.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>';
  return svg;
}

function externalIcon() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M20 4l-9 9M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/>';
  return svg;
}

function buildAction(label: string, href: string, icon: 'github' | 'live') {
  const anchor = document.createElement('a');
  anchor.className = `project-action project-action-${icon}`;
  anchor.href = href;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.setAttribute('aria-label', `${label} for project`);

  const text = document.createElement('span');
  text.textContent = label;
  anchor.append(icon === 'github' ? githubIcon() : externalIcon(), text);
  return anchor;
}

function enhanceProjectCards() {
  document.querySelectorAll<HTMLElement>('.project-feature').forEach((feature) => {
    const title = feature.querySelector('h3')?.textContent?.trim();
    if (!title || feature.dataset.actionsReady === 'true') return;

    const copy = feature.querySelector<HTMLElement>('.project-copy');
    const visual = feature.querySelector<HTMLElement>('.project-visual');
    if (!copy) return;

    visual?.remove();
    feature.classList.add('project-feature-clean');

    copy.querySelector('.chip-row')?.remove();
    copy.querySelector('.text-link')?.remove();

    const topline = copy.querySelector<HTMLElement>('.project-topline');
    if (topline) {
      const category = topline.querySelector(':scope > span');
      const actions = document.createElement('div');
      actions.className = 'project-actions';
      if (githubRepos[title]) actions.appendChild(buildAction('GitHub', githubRepos[title], 'github'));
      if (liveDemos[title]) actions.appendChild(buildAction('Vercel', liveDemos[title], 'live'));
      topline.replaceChildren(category ?? document.createTextNode(''), actions);
    }

    const description = copy.querySelector('p');
    description?.classList.add('project-brief');
    feature.dataset.actionsReady = 'true';
  });
}

let observer: MutationObserver | null = null;

export function initProjectLinks() {
  enhanceProjectCards();
  if (observer) observer.disconnect();
  observer = new MutationObserver(enhanceProjectCards);
  observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProjectLinks, { once: true });
} else {
  initProjectLinks();
}
