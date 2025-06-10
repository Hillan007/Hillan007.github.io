// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading-animation');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add Animation to Skills Section
const skillItems = document.querySelectorAll('#skills li');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-skill');
        }
    });
});

skillItems.forEach(item => observer.observe(item));

// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#64f4ac'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#64f4ac',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 3
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        }
    });
});

// Typewriter effect
const text = document.querySelector('.typewriter');
if(text) {
    let typewriter = new Typewriter(text, {
        loop: true,
        delay: 75,
    });

    typewriter
        .typeString('Software Engineer')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Web Developer')
        .pauseFor(1000)
        .deleteAll()
        .typeString('AI Enthusiast')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Innovation Explorer')
        .pauseFor(1000)
        .start();
}

// GSAP Animations
gsap.from('.hero-content', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Add VanillaTilt effect to project cards
VanillaTilt.init(document.querySelectorAll('.project-card'), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

// Initialize VanillaTilt for contact cards
VanillaTilt.init(document.querySelectorAll(".contact-card"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
    scale: 1.02
});

// Custom cursor effect
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Scroll Progress Indicator
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
};

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        projects.forEach(project => {
            if (filter === 'all' || project.dataset.category === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Expertise Progress Animation
const circularProgress = document.querySelectorAll('.circular-progress');
const progressValue = document.querySelectorAll('.progress-value');

circularProgress.forEach((progress, index) => {
    const targetPercentage = progress.getAttribute('data-percentage');
    let currentValue = 0;
    
    const progressAnimation = setInterval(() => {
        if (currentValue >= targetPercentage) {
            clearInterval(progressAnimation);
        } else {
            currentValue++;
            progressValue[index].textContent = `${currentValue}%`;
            progress.style.background = `conic-gradient(
                var(--secondary-color) ${currentValue * 3.6}deg,
                #ededed ${currentValue * 3.6}deg
            )`;
        }
    }, 20);
});

// Client Counter Animation
const counter = document.querySelector('.counter');
const targetNumber = parseInt(counter.getAttribute('data-target'));
let count = 0;

const counterAnimation = setInterval(() => {
    if (count >= targetNumber) {
        clearInterval(counterAnimation);
    } else {
        count++;
        counter.textContent = count + "+";
    }
}, 200);