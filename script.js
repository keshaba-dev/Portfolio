const revealItems = document.querySelectorAll('.fade-up');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.18,
  rootMargin: '0px 0px -30px 0px'
});

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

const orbContainer = document.querySelector('.background-orbs');

if (orbContainer) {
  const orbCount = 9;

  for (let i = 0; i < orbCount; i += 1) {
    const orb = document.createElement('span');
    const size = Math.floor(Math.random() * 140) + 70;
    const duration = Math.random() * 16 + 18;
    const delay = Math.random() * 12;
    const left = Math.random() * 100;

    orb.className = 'orb';
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;
    orb.style.left = `${left}%`;
    orb.style.bottom = `${-size}px`;
    orb.style.animationDuration = `${duration}s`;
    orb.style.animationDelay = `${delay}s`;
    orb.style.opacity = `${Math.random() * 0.28 + 0.28}`;

    orbContainer.appendChild(orb);
  }
}

