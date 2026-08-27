function bootWorkbenchPointer(): void {
  const update = (event: PointerEvent) => {
    const page = document.querySelector<HTMLElement>('.workbench-page');
    if (!page) return;

    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;

    page.style.setProperty('--mouse-x', `${x}%`);
    page.style.setProperty('--mouse-y', `${y}%`);
  };

  const reset = () => {
    document.querySelector<HTMLElement>('.workbench-page')?.style.setProperty('--mouse-x', '50%');
    document.querySelector<HTMLElement>('.workbench-page')?.style.setProperty('--mouse-y', '42%');
  };

  window.addEventListener('pointermove', update, { passive: true });
  window.addEventListener('blur', reset);
  reset();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootWorkbenchPointer, { once: true });
} else {
  window.requestAnimationFrame(bootWorkbenchPointer);
}
