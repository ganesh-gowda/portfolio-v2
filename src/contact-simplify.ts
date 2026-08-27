function renderContact(section: HTMLElement): void {
  section.classList.add('contact-simplified');
  section.dataset.simplified = 'true';
  section.innerHTML = `
    <div class="contact-header">
      <p class="eyebrow">[ 03C / REACH OUT ]</p>
      <h2>have something<br /><em>worth building?</em></h2>
      <p class="contact-intro">Got a project, opportunity, or just want to say hello? Reach out and let's build something interesting.</p>
    </div>
    <div class="contact-actions-row" aria-label="Contact options">
      <a class="contact-action-card" href="mailto:ganeshgowdam@gmail.com">
        <span class="contact-action-kicker">01 / DIRECT</span>
        <strong>EMAIL ME</strong>
        <span class="contact-action-meta">ganeshgowdam@gmail.com ↗</span>
      </a>
      <a class="contact-action-card" href="/resume.html" target="_blank" rel="noopener noreferrer">
        <span class="contact-action-kicker">02 / PROFILE</span>
        <strong>GET RESUME</strong>
        <span class="contact-action-meta">view / print ↗</span>
      </a>
    </div>
  `;
}

export function initContactSimplify(): void {
  const section = document.querySelector<HTMLElement>('.workbench-reach');
  if (!section || section.dataset.simplified === 'true') return;
  renderContact(section);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactSimplify, { once: true });
} else {
  initContactSimplify();
}
