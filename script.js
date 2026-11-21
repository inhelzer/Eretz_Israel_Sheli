const dialog = document.querySelector('dialog');
const openers = document.querySelectorAll('.hotspot, [data-open]');
let lastOpener;
openers.forEach(button => button.addEventListener('click', () => { lastOpener = button; dialog.showModal(); document.body.classList.add('modal-open'); }));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); lastOpener?.focus(); });
