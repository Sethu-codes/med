// State
let currentSurgeryIndex = 0;
let currentStepIndex = 0;

// DOM Elements
const tabsContainer = document.getElementById('tabs-container');
const titleEl = document.getElementById('surgery-title');
const descEl = document.getElementById('surgery-description');
const tagsContainer = document.getElementById('surgery-tags');
const infoGrid = document.getElementById('info-grid');
const infoDuration = document.getElementById('info-duration');
const infoAnesthesia = document.getElementById('info-anesthesia');
const infoRecovery = document.getElementById('info-recovery');
const infoApproach = document.getElementById('info-approach');

const progressText = document.getElementById('progress-text');
const progressPercent = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');

const timelineContainer = document.getElementById('timeline-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const incisionPointsGroup = document.getElementById('incision-points');
const stepImageContainer = document.getElementById('step-image-container');
const stepImage = document.getElementById('step-image');
const bodyDiagramContainer = document.getElementById('body-diagram-container');

// Initialization
function init() {
  renderTabs();
  loadSurgery(0);
  
  btnPrev.addEventListener('click', () => navigateStep(-1));
  btnNext.addEventListener('click', () => navigateStep(1));
}

function renderTabs() {
  tabsContainer.innerHTML = '';
  surgeries.forEach((surg, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${index === currentSurgeryIndex ? 'active' : ''}`;
    btn.onclick = () => {
      currentSurgeryIndex = index;
      currentStepIndex = 0;
      loadSurgery(index);
      renderTabs(); // update active state
    };
    
    const dot = document.createElement('div');
    dot.className = 'tab-dot';
    dot.style.backgroundColor = surg.themeColor;
    
    const text = document.createTextNode(surg.title);
    
    btn.appendChild(dot);
    btn.appendChild(text);
    tabsContainer.appendChild(btn);
  });
}

function loadSurgery(index) {
  const surg = surgeries[index];
  
  // Update CSS Variables for Theme
  document.documentElement.style.setProperty('--theme-color', surg.themeColor);
  const hex = surg.themeColor.replace('#', '');
  const r = parseInt(hex.substring(0,2), 16);
  const g = parseInt(hex.substring(2,4), 16);
  const b = parseInt(hex.substring(4,6), 16);
  document.documentElement.style.setProperty('--theme-color-light', `rgba(${r},${g},${b},0.15)`);
  
  // Update Details
  titleEl.textContent = surg.title;
  descEl.textContent = surg.description;
  
  // Tags
  tagsContainer.innerHTML = '';
  surg.tags.forEach(tag => {
    const t = document.createElement('span');
    t.className = 'tag';
    t.textContent = tag;
    tagsContainer.appendChild(t);
  });
  
  // Info Grid
  infoDuration.textContent = surg.duration;
  infoAnesthesia.textContent = surg.anesthesia;
  infoRecovery.textContent = surg.recovery;
  infoApproach.textContent = surg.approach;
  
  // Steps
  renderTimeline();
  updateProgress();
  updateVisuals();
  updateNavButtons();
}

function renderTimeline() {
  const surg = surgeries[currentSurgeryIndex];
  timelineContainer.innerHTML = '';
  
  surg.steps.forEach((step, index) => {
    const stepEl = document.createElement('div');
    stepEl.className = 'timeline-step';
    
    // Determine state
    if (index < currentStepIndex) {
      stepEl.classList.add('completed');
    }
    if (index === currentStepIndex) {
      stepEl.classList.add('active');
      stepEl.classList.add('expanded');
    }
    
    const marker = document.createElement('div');
    marker.className = 'step-marker';
    // Use checkmark for completed, number for others
    if (index < currentStepIndex) {
      marker.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else {
      marker.textContent = index + 1;
    }
    marker.onclick = (e) => {
      e.stopPropagation();
      toggleStepExpand(stepEl);
      setStep(index);
    };
    
    const content = document.createElement('div');
    content.className = 'step-content';
    content.onclick = () => {
      toggleStepExpand(stepEl);
      setStep(index);
    };
    
    const title = document.createElement('div');
    title.className = 'step-title';
    title.textContent = step.title;
    
    const desc = document.createElement('div');
    desc.className = 'step-desc';
    desc.textContent = step.description;
    
    content.appendChild(title);
    content.appendChild(desc);
    
    stepEl.appendChild(marker);
    stepEl.appendChild(content);
    
    timelineContainer.appendChild(stepEl);
  });
}

function toggleStepExpand(stepEl) {
  if (stepEl.classList.contains('expanded')) {
    stepEl.classList.remove('expanded');
  } else {
    // Collapse others
    document.querySelectorAll('.timeline-step').forEach(el => el.classList.remove('expanded'));
    stepEl.classList.add('expanded');
  }
}

function setStep(index) {
  currentStepIndex = index;
  renderTimeline();
  updateProgress();
  updateVisuals();
  updateNavButtons();
}

function navigateStep(dir) {
  const surg = surgeries[currentSurgeryIndex];
  currentStepIndex += dir;
  
  if (currentStepIndex < 0) currentStepIndex = 0;
  if (currentStepIndex >= surg.steps.length) currentStepIndex = surg.steps.length - 1;
  
  setStep(currentStepIndex);
}

function updateProgress() {
  const surg = surgeries[currentSurgeryIndex];
  const total = surg.steps.length;
  const current = currentStepIndex + 1;
  
  progressText.textContent = `Step ${current} of ${total}`;
  
  const pct = ((currentStepIndex) / (total - 1)) * 100;
  progressPercent.textContent = `${Math.round(pct)}%`;
  progressFill.style.width = `${pct}%`;
}

function updateNavButtons() {
  const surg = surgeries[currentSurgeryIndex];
  btnPrev.disabled = currentStepIndex === 0;
  btnNext.disabled = currentStepIndex === surg.steps.length - 1;
  
  if (currentStepIndex === surg.steps.length - 1) {
    btnNext.textContent = 'Finish';
  } else {
    btnNext.textContent = 'Next';
  }
}

function updateVisuals() {
  const surg = surgeries[currentSurgeryIndex];
  const step = surg.steps[currentStepIndex];
  
  if (step.imageUrl) {
    stepImageContainer.style.display = 'flex';
    bodyDiagramContainer.style.display = 'none';
    // Add a fade effect
    stepImage.style.opacity = '0';
    stepImage.src = step.imageUrl;
    setTimeout(() => {
      stepImage.style.opacity = '1';
    }, 50);
  } else {
    stepImageContainer.style.display = 'none';
    bodyDiagramContainer.style.display = 'flex';
    
    incisionPointsGroup.innerHTML = '';
    
    if (step.x && step.y) {
      // Outer Pulsing Ring
      const outerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      outerCircle.setAttribute('cx', step.x);
      outerCircle.setAttribute('cy', step.y);
      outerCircle.setAttribute('r', '6');
      outerCircle.setAttribute('fill', 'none');
      outerCircle.setAttribute('stroke', surg.themeColor);
      outerCircle.setAttribute('stroke-width', '1.5');
      outerCircle.setAttribute('class', 'pulse-ring');
      
      // Inner Solid Dot
      const innerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      innerCircle.setAttribute('cx', step.x);
      innerCircle.setAttribute('cy', step.y);
      innerCircle.setAttribute('r', '2.5');
      innerCircle.setAttribute('fill', surg.themeColor);
      innerCircle.setAttribute('stroke', '#fff');
      innerCircle.setAttribute('stroke-width', '1');
      innerCircle.setAttribute('filter', 'url(#glow)');
      
      // Label/Tooltip pointer
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', step.x);
      line.setAttribute('y1', step.y);
      line.setAttribute('x2', step.x > 50 ? step.x - 15 : step.x + 15);
      line.setAttribute('y2', step.y - 10);
      line.setAttribute('stroke', surg.themeColor);
      line.setAttribute('stroke-width', '0.75');
      line.setAttribute('stroke-dasharray', '1,1');
      
      const textBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const tx = step.x > 50 ? step.x - 35 : step.x + 15;
      const ty = step.y - 16;
      textBg.setAttribute('x', tx);
      textBg.setAttribute('y', ty);
      textBg.setAttribute('width', '20');
      textBg.setAttribute('height', '8');
      textBg.setAttribute('rx', '2');
      textBg.setAttribute('fill', 'rgba(0,0,0,0.7)');
      
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', step.x > 50 ? step.x - 25 : step.x + 25);
      text.setAttribute('y', step.y - 10.5);
      text.setAttribute('fill', '#fff');
      text.setAttribute('font-size', '4');
      text.setAttribute('font-weight', 'bold');
      text.setAttribute('text-anchor', 'middle');
      text.textContent = 'STEP ' + (currentStepIndex + 1);
      
      incisionPointsGroup.appendChild(line);
      incisionPointsGroup.appendChild(textBg);
      incisionPointsGroup.appendChild(text);
      incisionPointsGroup.appendChild(outerCircle);
      incisionPointsGroup.appendChild(innerCircle);
    }
  }
}

// Start
document.addEventListener('DOMContentLoaded', init);
