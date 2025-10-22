// Smooth nav scroll + reveal on scroll + small shrink header
(function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('.navlink').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Reveal-on-scroll
  const items = document.querySelectorAll('[data-animate]');
  const onScroll = () => {
    const trigger = window.innerHeight * 0.85;
    items.forEach(i=>{
      const r = i.getBoundingClientRect();
      if(r.top < trigger) i.classList.add('show');
    });
  };
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  document.addEventListener('DOMContentLoaded', ()=>{ onScroll(); setTimeout(onScroll,300); });

  // header shrink on scroll
  const topbar = document.getElementById('topbar');
  const shrink = ()=> {
    if(window.scrollY > 30) topbar.style.backdropFilter = 'blur(6px)';
    else topbar.style.backdropFilter = 'none';
  };
  window.addEventListener('scroll', shrink);
})();

