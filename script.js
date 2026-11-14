const projects = [
  { id:'swiftride', title:'SwiftRide', subtitle:'Ride-Booking Application', type:'BACKEND / REST API', art:'map', label:'SWIFTRIDE  /  $18.40', featured:true, description:'A ride-booking system built around clear booking flows, fare estimates, ride history, and cancellation.', details:[['Problem','Make a ride flow predictable for riders and drivers.'],['Technical decision','Express REST endpoints and MongoDB geospatial queries find nearby drivers; pickup and drop-off coordinates feed the fare estimate.'],['Contribution','Backend API design, data flow, and integration decisions.']], links:[['View Code','https://github.com/Vignesh-0319/Swift-Ride']] },
  { id:'plantnotes', title:'PlantNotes', subtitle:'iOS Plant Care App', type:'NATIVE IOS / SWIFT', art:'plant', label:'PLANTS / 06     WATERING TODAY / 02', featured:true, description:'A calm garden overview and plant-detail experience for watering schedules, favorites, and search.', details:[['Problem','Keep list, detail, and summary views in sync without fragile manual updates.'],['Technical decision','A shared Swift Observation store makes state changes flow through the app predictably.'],['Contribution','SwiftUI product flow and shared state architecture.']], links:[['View Code','https://github.com/Vignesh-0319/PlantNotes'],['Watch Demo','https://youtube.com/shorts/rJ5QC1g4a5w']] },
  { id:'speakup', title:'SpeakUp', subtitle:'Speaking Practice · Founder', type:'NATIVE IOS / AVFOUNDATION', art:'wave', description:'Peer speaking practice for students and early-career professionals. The repo is the practice flow: scenario selection, local AAC recording, live waveform feedback, and a progress chart.', details:[['Problem','Students and early-career professionals lack a low-stakes place to practise speaking and see progress.'],['Product vision','Group Discussions, Debates, and Extempore with peers, plus an offline impromptu mode with on-device scoring.'],['Technical decision','AVFoundation handles local recording and audio amplitude calculation for the live waveform.'],['Contribution','Founder: product scope, privacy approach, and the iOS prototype.'],['Label','Prototype interface; progress scores are sample data.']], links:[['View Code','https://github.com/Vignesh-0319/SpeakUp']] },
  { id:'photoad', title:'Photo to Ad', subtitle:'Video Ads for MSME Sellers', type:'NATIVE IOS / PRODUCT DESIGN', art:'flow', label:'PHOTO + VOICE → VIDEO AD', description:'A seller snaps one product photo and records a voice note. The app builds a vertical video ad and queues it on Meta, paused until they approve.', details:[['Problem','Small sellers can’t afford ad-ready visuals, and boosting a plain post wastes budget.'],['Technical decision','SwiftUI with AVFoundation for capture, PhotosUI for picking, AVKit for preview, and the Meta Marketing API to publish as paused.'],['Contribution','Product framing, flow design, and the Figma prototype with Team The Swifters.'],['Label','In design; not yet shipped.']], links:[] },
  { id:'ecobin', title:'EcoBin', subtitle:'Recycling Map Prototype', type:'NATIVE IOS / MAPS', art:'map', label:'ECOBIN  /  CHECK IN', description:'A recycling map with a selected-bin sheet and location-based check-in eligibility.', details:[['Technical decision','An async API client uses typed JSON decoding and explicit HTTP error handling.'],['Contribution','Native iOS UI, map flow, and the networking layer.'],['Label','Prototype interface; map pins and bin details use sample data.']], links:[['View Code','https://github.com/Vignesh-0319/EcoBin']] },
  { id:'hookly', title:'Hookly', subtitle:'Interactive App Prototype', type:'FIGMA CASE STUDY', art:'flow', label:'ONBOARDING → HOME → DARK MODE', description:'A Figma case study from onboarding through the main app flow, with dark-mode refinements and interaction polish.', details:[['Technical decision','Reduced visual friction by keeping the primary action and navigation hierarchy consistent across the flow.'],['Contribution','Product flow and interaction design in Figma.'],['Label','Interactive prototype; not a production app.']], links:[['Open Prototype','https://www.figma.com/make/xjAyjaj0ShJAlOoV390fcW/Hookly-By-Vega-?p=f&t=5a9Zgj8FOB0RE6sM-0']] }
];
const certificates = [
  {core:true,title:'Oracle Cloud Infrastructure 2025 Certified Developer Professional',issuer:'Oracle Cloud',year:'2025',featured:true,url:'certificates/Oracle_OCI_Developer_Professional.pdf'},
  {core:true,title:'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',issuer:'Oracle Cloud',year:'2025',featured:true,url:'certificates/Oracle_OCI_DevOps_Professional.pdf'},
  {core:true,title:'Microsoft Azure Fundamentals',issuer:'Microsoft',year:'2024'},
  {core:true,title:'IBM Web Development Fundamentals',issuer:'IBM',year:'2024'},
  {title:'Social Media Marketing in Practice Specialization',issuer:'Digital Marketing Institute'},
  {title:'Machine Learning and Image Processing',issuer:'NASSCOM Foundation · thingQbator'},
  {title:'HackerRank Orchestra',issuer:'HackerRank'},
  {title:'Basics of Python',issuer:'Infosys Springboard'},
  {title:'Digital Transformation in Financial Services Specialization',issuer:'Copenhagen Business School'},
  {title:'Finance for Everyone Specialization',issuer:'McMaster University'},
  {title:'Natural Disaster and Climate Change Risk Assessment Specialization',issuer:'Inter-American Development Bank'}
];
const $ = selector => document.querySelector(selector);
$('#year').textContent = new Date().getFullYear();

function renderProjects() {
  $('#projectsGrid').innerHTML = projects.map(project => `<article class="project-card ${project.featured ? 'featured' : ''}">
    <div class="project-art ${project.art}" data-label="${project.label || ''}"><div class="map-grid"></div>${project.art === 'map' ? `<div class="phone-screen" data-label="${project.label}"></div>` : ''}</div>
    <div class="project-card-copy"><span class="panel-index">${project.type}</span><h3>${project.title}</h3><p>${project.description}</p><div class="project-meta"><span>${project.subtitle}</span><span>↗</span></div><div class="project-actions"><button data-project="${project.id}">Open case study</button>${project.links.map(link => `<a href="${link[1]}" target="_blank" rel="noopener">${link[0]} ↗</a>`).join('')}</div></div>
  </article>`).join('');
}
function certEntry(item) {
  return `<article class="certificate-entry ${item.featured ? 'featured' : ''}"><div><small>${item.issuer.toUpperCase()}${item.year ? ` · ${item.year}` : ''}</small><h3>${item.title}</h3></div>${item.url ? `<a href="${item.url}" target="_blank" rel="noopener">VIEW ↗</a>` : ''}</article>`;
}
function renderCertificates() {
  const core = certificates.filter(item => item.core), more = certificates.filter(item => !item.core);
  $('#certificateList').innerHTML = core.map(certEntry).join('');
  $('#moreCertificates').innerHTML = more.map(certEntry).join('');
  $('#moreSummary').textContent = `MORE LEARNING (${more.length})`;
}
renderProjects(); renderCertificates();

document.querySelectorAll('.scene-nav a').forEach(link => {
  link.addEventListener('mouseenter', () => { $('#navPreview').textContent = link.dataset.preview; });
  link.addEventListener('focus', () => { $('#navPreview').textContent = link.dataset.preview; });
});
const caseStudy = $('#caseStudy');
let lastFocus = null;
function openCase(id) {
  lastFocus = document.activeElement;
  const project = projects.find(item => item.id === id); if (!project) return;
  $('#caseNumber').textContent = `${project.type} / CASE STUDY`; $('#caseTitle').textContent = `${project.title} — ${project.subtitle}`; $('#caseDescription').textContent = project.description;
  $('#caseMedia').className = `case-media ${project.art}`; $('#caseMedia').innerHTML = project.art === 'map' ? `<div class="map-grid"></div><div class="phone-screen" data-label="${project.label}"></div>` : project.art === 'wave' ? '<span class="wave-large">∿∿∿∿∿∿∿</span>' : project.art === 'flow' ? '<span class="plant-large">▢ → ▢</span>' : '<span class="plant-large">✳</span>';
  $('#caseDetails').innerHTML = project.details.map(detail => `<div class="case-detail"><b>${detail[0]}</b><span>${detail[1]}</span></div>`).join('');
  $('#caseLinks').innerHTML = project.links.map(link => `<a href="${link[1]}" target="_blank" rel="noopener">${link[0]} ↗</a>`).join('');
  caseStudy.classList.add('open'); caseStudy.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; $('.close-case').focus();
}
$('#projectsGrid').addEventListener('click', event => { const button = event.target.closest('[data-project]'); if (button) openCase(button.dataset.project); });
function closeCase() { caseStudy.classList.remove('open'); caseStudy.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
caseStudy.addEventListener('click', event => { if (event.target.matches('[data-close-case]')) closeCase(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && caseStudy.classList.contains('open')) closeCase(); });

$('.copy-email').addEventListener('click', async event => { const button = event.currentTarget; try { await navigator.clipboard.writeText(button.dataset.email); $('#copyMessage').textContent = 'Copied — ready to paste'; } catch { $('#copyMessage').textContent = button.dataset.email; } });

const introVideo = $('#introVideo'), skipIntro = $('#skipIntro'), replayIntro = $('#replayIntro'), introStatus = $('#introStatus');
const introSeen = sessionStorage.getItem('vb-intro-seen');
function finishIntro() {
  document.body.classList.add('intro-finished');
  if (skipIntro) skipIntro.hidden = true;
  if (replayIntro) replayIntro.hidden = false;
  introVideo?.pause();
}
function playIntro() {
  document.body.classList.remove('intro-finished');
  if (skipIntro) skipIntro.hidden = false;
  if (replayIntro) replayIntro.hidden = true;
  introVideo?.play().catch(() => finishIntro());
}
if (introSeen) finishIntro(); else window.setTimeout(finishIntro, 4000);
skipIntro?.addEventListener('click', () => { sessionStorage.setItem('vb-intro-seen', '1'); finishIntro(); });
replayIntro?.addEventListener('click', () => { sessionStorage.removeItem('vb-intro-seen'); playIntro(); });
introVideo?.addEventListener('timeupdate', () => { introStatus.textContent = `INTRO / 00:${String(Math.floor(introVideo.currentTime)).padStart(2, '0')}`; });
