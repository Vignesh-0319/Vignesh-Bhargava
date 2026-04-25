// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Skills marquee
const skills = ["Java","Python","C","JavaScript","React","Node.js","MongoDB","MySQL","Git","GitHub","VS Code","Oracle Cloud","Azure","DSA","Computer Architecture"];
const marquee = document.getElementById('marquee');
const all = [...skills, ...skills];
marquee.innerHTML = all.map(s => `
  <div class="skill">
    <div class="badge">${s.slice(0,2).toUpperCase()}</div>
    <span class="name">${s}</span>
  </div>`).join('');

// Projects
const projects = [
  {
    name:"Drug Inventory & Supply Chain Tracking",
    tools:["Node.js","MongoDB","Express","React"],
    role:"Backend Developer",
    description:"Built a real-time system to monitor drug distribution and availability. Improved supply visibility and reduced shortage risks through optimized tracking logic, with strong focus on data consistency and efficient inventory management."
  },
  {
    name:"Social Media Analytics Dashboard",
    tools:["React","Node.js","Chart.js","REST APIs"],
    role:"Full Stack Developer",
    description:"Developed a dashboard to aggregate and analyze multi-platform social data. Implemented insights and visualization for performance tracking with clean, responsive components."
  },
  {
    name:"Quiz Web Application",
    tools:["React","JavaScript","Tailwind CSS"],
    role:"Frontend Developer",
    description:"Created an interactive platform with dynamic question generation. Designed responsive UI with smooth animations and a focus on improved user experience."
  }
];

const list = document.getElementById('projects-list');
list.innerHTML = projects.map((p,i) => `
  <div class="project ${i%2===1?'reverse':''}">
    <div>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="tags">${p.tools.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    </div>
    <div class="proj-card">
      <div class="card-bar"><span></span><span></span><span></span></div>
<pre><span class="c-pink">const</span> <span class="c-blue">project</span> = {
  <span class="c-blue">name</span>: <span class="c-yellow">'${p.name}'</span>,
  <span class="c-blue">tools</span>: [<span class="c-yellow">${p.tools.map(t=>`'${t}'`).join(", ")}</span>],
  <span class="c-blue">myRole</span>: <span class="c-orange">'${p.role}'</span>,
};</pre>
    </div>
  </div>`).join('');

// Contact form -> mailto
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent(f.subject.value);
  const body = encodeURIComponent(`Name: ${f.name.value}\nEmail: ${f.email.value}\n\n${f.message.value}`);
  window.location.href = `mailto:vignesh@example.com?subject=${subject}&body=${body}`;
});
