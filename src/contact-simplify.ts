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
      <a class="contact-action-card" href="mailto:ganeshgowdam6@gmail.com?subject=Hiring%20Ganesh%20Gowda">
        <span class="contact-action-kicker">01 / DIRECT</span>
        <strong>EMAIL ME</strong>
        <span class="contact-action-meta">ganeshgowdam6@gmail.com ↗</span>
      </a>
      <a class="contact-action-card" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <span class="contact-action-kicker">02 / PROFILE</span>
        <strong>GET RESUME</strong>
        <span class="contact-action-meta">open / download ↗</span>
      </a>
    </div>
  `;
}

function initContactSimplify(): void {
  const mount = () => {
    const section = document.querySelector<HTMLElement>('.workbench-reach');
    if (!section || section.dataset.simplified === 'true') return false;
    renderContact(section);
    return true;
  };

  if (mount()) return;

  const observer = new MutationObserver(() => {
    if (mount()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  window.setTimeout(() => {
    if (mount()) observer.disconnect();
  }, 0);
}

initContactSimplify();
