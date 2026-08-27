function findElementByText(root: Element, needle: string): HTMLElement | null {
  const target = needle.toLowerCase();
  const matches = Array.from(root.querySelectorAll<HTMLElement>('a, button, h1, h2, h3, h4, p, span'));
  return matches.find((element) => element.textContent?.trim().toLowerCase().includes(target)) ?? null;
}

function cardFor(element: HTMLElement, section: HTMLElement): HTMLElement | null {
  let node: HTMLElement | null = element.parentElement;

  while (node && node !== section) {
    const className = typeof node.className === 'string' ? node.className : '';
    if (node.tagName === 'ARTICLE' || /card|channel|contact/i.test(className)) return node;
    node = node.parentElement;
  }

  node = element.parentElement;
  while (node && node.parentElement !== section) node = node.parentElement;
  return node;
}

function simplifyContact(): void {
  const section = document.querySelector<HTMLElement>('.workbench-reach');
  if (!section || section.dataset.simplified === 'true') return;

  section.dataset.simplified = 'true';
  section.classList.add('contact-simplified');

  const email = findElementByText(section, 'email me');
  const book = findElementByText(section, 'book a call');
  const dm = findElementByText(section, 'dm on x');

  const primary = email ? cardFor(email, section) : null;
  const unwanted = [book, dm]
    .filter((element): element is HTMLElement => Boolean(element))
    .map((element) => cardFor(element, section))
    .filter((card): card is HTMLElement => Boolean(card));

  primary?.classList.add('contact-primary-card');
  unwanted.forEach((card) => card.classList.add('contact-remove-card'));

  if (primary) {
    const actions = Array.from(primary.querySelectorAll<HTMLElement>('a, button'));
    actions.forEach((action) => {
      const text = action.textContent?.trim().toLowerCase() ?? '';
      const aria = action.getAttribute('aria-label')?.toLowerCase() ?? '';
      const keep = /email|resume/.test(`${text} ${aria}`);
      if (!keep) action.classList.add('contact-remove-action');
    });
  }
}

export function initContactSimplify(): void {
  simplifyContact();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactSimplify, { once: true });
} else {
  initContactSimplify();
}
