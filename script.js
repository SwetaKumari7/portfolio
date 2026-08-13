// =========================================
// MOBILE NAVIGATION
// =========================================

const menuButton = document.getElementById('menuButton');

const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
});

// Close mobile menu after clicking

const navItems = document.querySelectorAll('#navigation a');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navigation.classList.remove('show');
  });
});

// =========================================
// TYPING EFFECT
// =========================================

const typingText = document.getElementById('typingText');

const roles = [
  'B.Tech IT Student',

  'AI / ML Enthusiast',

  'Computer Vision Learner',

  'Python Developer',

  'Problem Solver',
];

let roleIndex = 0;

let characterIndex = 0;

let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = currentRole.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentRole.length) {
      deleting = true;

      setTimeout(typeEffect, 1400);

      return;
    }
  } else {
    typingText.textContent = currentRole.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {
      deleting = false;

      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 75);
}

typeEffect();

// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll('section[id]');

const links = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute('id');
    }
  });

  links.forEach((link) => {
    link.classList.remove('active');

    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// =========================================
// CURSOR GLOW
// =========================================

const glowOne = document.querySelector('.glow-one');

const glowTwo = document.querySelector('.glow-two');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;

  const y = event.clientY;

  glowOne.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`;

  glowTwo.style.transform = `translate(${-x * 0.02}px, ${-y * 0.02}px)`;
});

// =========================================
// CONSOLE MESSAGE
// =========================================

console.log(
  "%c👋 Hey! Welcome to Sweta's Portfolio.",
  'color:#38bdf8;font-size:16px;font-weight:bold;'
);

console.log(
  '%cBuilt with HTML + CSS + JavaScript.',
  'color:#94a3b8;font-size:12px;'
);

// =========================================
// PROJECT CARD MOUSE EFFECT
// =========================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);

    card.style.setProperty('--mouse-y', `${y}px`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--mouse-x', '50%');

    card.style.setProperty('--mouse-y', '50%');
  });
});

// =========================================
// NUMBER COUNTER ANIMATION
// =========================================

const statNumbers = document.querySelectorAll('.stat-item strong');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;

      const original = element.textContent.trim();

      // Only animate numeric values

      if (!/^\d+(\.\d+)?$/.test(original)) {
        observer.unobserve(element);

        return;
      }

      const target = parseFloat(original);

      const decimal = original.includes('.')
        ? original.split('.')[1].length
        : 0;

      let current = 0;

      const duration = 1200;

      const start = performance.now();

      function update(time) {
        const progress = Math.min((time - start) / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);

        current = target * eased;

        element.textContent = current.toFixed(decimal);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = original;
        }
      }

      requestAnimationFrame(update);

      observer.unobserve(element);
    });
  },

  {
    threshold: 0.5,
  }
);

statNumbers.forEach((number) => {
  observer.observe(number);
});

// =========================================
// STAGGER SKILL TAGS
// =========================================

const skillGroups = document.querySelectorAll('.skill-list');

skillGroups.forEach((group) => {
  const tags = group.querySelectorAll('span');

  tags.forEach((tag, index) => {
    tag.style.transitionDelay = `${index * 50}ms`;
  });
});

// =========================================
// TERMINAL TYPING SOUND EFFECT
// =========================================

console.log(
  '%cSYSTEM INITIALIZED',
  'color:#4ade80;font-family:monospace;font-size:14px;font-weight:bold;'
);

console.log(
  "%c> Welcome to Sweta's developer portfolio",
  'color:#38bdf8;font-family:monospace;'
);
