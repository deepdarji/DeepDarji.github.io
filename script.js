document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from('.hero-content', {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.2
    });

    gsap.from('.tech-orbits .orbit', {
        opacity: 0,
        scale: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.5)'
    });

    // Section Headers Animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });
    });

    // Skill Cards Animation
    gsap.utils.toArray('.skill-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            rotation: 5,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    });

    // Timeline Items Animation
    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -100,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Project Cards Animation
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Certifications Animation
    gsap.utils.toArray('.certification-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.9,
            rotation: -5,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    });

    // Education Items Animation
    gsap.utils.toArray('.education-item').forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: 100,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Contact Section Animation
    gsap.from('.contact-container > *', {
        scrollTrigger: {
            trigger: '.contact-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Form Input Animation
    gsap.utils.toArray('.form-group').forEach(group => {
        const input = group.querySelector('input, textarea');
        input.addEventListener('focus', () => {
            gsap.to(group.querySelector('.form-underline'), {
                width: '100%',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        input.addEventListener('blur', () => {
            if (!input.value) {
                gsap.to(group.querySelector('.form-underline'), {
                    width: '0',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });

    // Footer Animation
    gsap.from('.footer-content > *', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });
});