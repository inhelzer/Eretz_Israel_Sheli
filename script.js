const dialog = document.querySelector('dialog');
const processImage = dialog.querySelector('.modal-body img');
let lastOpener;
document.querySelectorAll('.hotspot').forEach(button => button.addEventListener('click', () => {
  lastOpener = button;
  processImage.src = `assets/${button.dataset.image}`;
  processImage.alt = `תיעוד תהליך העבודה: ${button.dataset.name}`;
  dialog.setAttribute('aria-label', `תהליך העבודה: ${button.dataset.name}`);
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTo({ top: 0, behavior: 'instant' });
  requestAnimationFrame(() => dialog.scrollTo({ top: 0, behavior: 'instant' }));
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); lastOpener?.focus(); });
