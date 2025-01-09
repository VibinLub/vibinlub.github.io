// JavaScript for Interactivity

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Dynamic progress bars in Stats section
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const value = bar.getAttribute('data-value');
    bar.style.setProperty('--progress-value', `${value}%`);
  });
  
  // Scroll-triggered animation for sections
  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    root: null,
    threshold: 0.2
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
  
  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill out all fields before submitting.');
    }
  });
  