const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.style.color = 'var(--text)';
    }
  });
}


window.addEventListener('scroll', highlightNav);
/* ===== Modern Scroll Reveal ===== */

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});

