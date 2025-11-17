// script.js — scroll reveal + simple interactivity for Raja's portfolio (v2)

document.addEventListener('DOMContentLoaded', function(){
  // Simple scroll reveal for elements with .reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    for(const el of reveals){
      const rect = el.getBoundingClientRect();
      if(rect.top <= windowHeight - 80){
        el.classList.add('visible');
      }
    }
  };
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

  // Smooth scroll for internal nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target){
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // small micro-interactions for buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-4px)');
    btn.addEventListener('mouseleave', () => btn.style.transform = '');
  });
});
