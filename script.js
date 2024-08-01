document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Responsive navigation menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Parallax effect
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed');
            const yOffset = window.scrollY * speed;
            element.style.transform = `translateY(${yOffset}px)`;
        });
    });

    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFadeIn() {
        const windowHeight = window.innerHeight;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn(); // Check on initial load

    // Example form submission with animation
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                showAlert('Please fill in all fields');
            } else if (!validateEmail(email)) {
                showAlert('Please enter a valid email address');
            } else {
                showAlert('Form submitted successfully!');
                contactForm.reset();
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function showAlert(message) {
            const alertBox = document.createElement('div');
            alertBox.className = 'alert';
            alertBox.textContent = message;
            document.body.appendChild(alertBox);

            setTimeout(() => {
                alertBox.classList.add('fade');
                setTimeout(() => {
                    alertBox.remove();
                }, 500);
            }, 100);
        }
    }
});
