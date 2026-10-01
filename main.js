const english = document.documentElement.lang === 'en';
const nav = document.querySelector('header nav');
const toggle = document.createElement('button');
toggle.className = 'menu-toggle';
toggle.type = 'button';
toggle.textContent = english ? 'Menu' : 'Menú';
toggle.setAttribute('aria-expanded', 'false');
toggle.setAttribute('aria-controls', 'main-nav');
nav.id = 'main-nav';
nav.before(toggle);
document.documentElement.classList.add('js');

function closeMenu() {
  nav.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('menu-open')) {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('header')) closeMenu();
});
window.matchMedia('(max-width: 760px)').addEventListener('change', closeMenu);

// Keep the same section when opening the other language version.
document.querySelectorAll('.lang a').forEach(link => {
  link.addEventListener('click', () => {
    link.hash = window.location.hash;
  });
});

// Track reading position without changing the URL while scrolling.
const links = [...nav.querySelectorAll('a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  links.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  });
}
