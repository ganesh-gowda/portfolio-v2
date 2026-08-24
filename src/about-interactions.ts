function enhanceAbout(): void {
  const section = document.querySelector<HTMLElement>('#about');
  const photo = section?.querySelector<HTMLElement>('.about-photo-frame');

  if (!section || !photo || section.dataset.aboutEnhanced === 'true') return;

  section.dataset.aboutEnhanced = 'true';

  // Keep the original About Me prose intact; only add the visual interaction layer.
  const orbit = document.createElement('div');
  orbit.className = 'photo-orbit';
  orbit.setAttribute('aria-hidden', 'true');
  orbit.innerHTML = '<span class="orbit-dot orbit-dot-a"></span><span class="orbit-dot orbit-dot-b"></span><span class="orbit-dot orbit-dot-c"></span>';
  photo.appendChild(orbit);

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
