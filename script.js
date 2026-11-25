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

const buildingPage = document.querySelector('#building-page');
const buildingCounter = document.querySelector('#building-counter');
const buildingPrev = document.querySelector('#building-prev');
const buildingNext = document.querySelector('#building-next');
let buildingIndex = 1;
function renderBuildingPage() {
  buildingPage.src = `assets/building-pages/page-${String(buildingIndex).padStart(2, '0')}.jpg`;
  buildingPage.alt = `עבודות התלמידים, עמוד ${buildingIndex} מתוך 22`;
  buildingCounter.textContent = `${buildingIndex} / 22`;
  buildingPrev.disabled = buildingIndex === 1;
  buildingNext.disabled = buildingIndex === 22;
}
buildingPrev.addEventListener('click', () => { if (buildingIndex > 1) { buildingIndex--; renderBuildingPage(); } });
buildingNext.addEventListener('click', () => { if (buildingIndex < 22) { buildingIndex++; renderBuildingPage(); } });
renderBuildingPage();

const researchButtons = document.querySelectorAll('.research-game');
const researchImage = document.querySelector('#research-page');
const researchCounter = document.querySelector('#research-counter');
const researchPrevious = document.querySelector('#research-prev');
const researchNext = document.querySelector('#research-next');
let researchGame = '3', researchTotal = 7, researchPage = 1, researchName = 'מלחמתינו';
function renderResearchPage() {
  researchImage.src = researchPage === 1
    ? `assets/research/game-${researchGame}/cover.jpg`
    : `assets/research/game-${researchGame}/page-${researchPage - 1}.jpg`;
  researchImage.alt = `מחקר המשחק ${researchName}, עמוד ${researchPage} מתוך ${researchTotal}`;
  researchCounter.textContent = `${researchPage} / ${researchTotal}`;
  researchPrevious.disabled = researchPage === 1;
  researchNext.disabled = researchPage === researchTotal;
}
researchButtons.forEach(button => button.addEventListener('click', () => {
  researchButtons.forEach(item => { item.classList.remove('selected'); item.setAttribute('aria-pressed', 'false'); });
  button.classList.add('selected'); button.setAttribute('aria-pressed', 'true');
  researchGame = button.dataset.game; researchTotal = Number(button.dataset.pages) + 1; researchName = button.textContent.trim(); researchPage = 1;
  renderResearchPage();
}));
researchPrevious.addEventListener('click', () => { if (researchPage > 1) { researchPage--; renderResearchPage(); } });
researchNext.addEventListener('click', () => { if (researchPage < researchTotal) { researchPage++; renderResearchPage(); } });
renderResearchPage();
