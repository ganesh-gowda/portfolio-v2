function enhanceAbout(): void {
  const section = document.querySelector<HTMLElement>('#about');
  const photo = section?.querySelector<HTMLElement>('.about-photo-frame');

  if (!section || !photo || section.dataset.aboutEnhanced === 'true') return;

  section.dataset.aboutEnhanced = 'true';

  // Keep the subtle orbital detail around the portrait.
  const orbit = document.createElement('div');
  orbit.className = 'photo-orbit';
  orbit.setAttribute('aria-hidden', 'true');
  orbit.innerHTML = '<span class="orbit-dot orbit-dot-a"></span><span class="orbit-dot orbit-dot-b"></span><span class="orbit-dot orbit-dot-c"></span>';
  photo.appendChild(orbit);

  // Keep the ambient blue glow and photo depth responsive to the pointer.
  const onPointerMove = (event: PointerEvent) => {
    const rect = section.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    section.style.setProperty('--mouse-x', `${x}%`);
    section.style.setProperty('--mouse-y', `${y}%`);
    photo.style.setProperty('--photo-tilt', `${(x - 50) * 0.035}deg`);
  };

  const resetPointer = () => {
    section.style.setProperty('--mouse-x', '50%');
    section.style.setProperty('--mouse-y', '44%');
    photo.style.setProperty('--photo-tilt', '0deg');
  };

  section.addEventListener('pointermove', onPointerMove);
  section.addEventListener('pointerleave', resetPointer);
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
