// ScrollReveal Config
ScrollReveal().reveal('.animate', {
    delay: 300,
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile Menu
const menuMobile = document.querySelector('.menu-mobile');
const navLinks = document.querySelector('.nav-links');

menuMobile.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuMobile.classList.toggle('active');
});

// Form Submission
document.querySelector('.contato-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Simulação de envio
    setTimeout(() => {
        e.target.reset();
        Swal.fire({
            icon: 'success',
            title: 'Mensagem enviada!',
            text: 'Entrarei em contato em até 24 horas',
            confirmButtonColor: 'var(--primary)'
        });
    }, 1000);
});

// Project Card Hover Effect
document.querySelectorAll('.projeto-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});