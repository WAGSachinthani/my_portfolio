document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Project card hover effect enhancement
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // View More Projects Toggle
    const viewMoreBtn = document.getElementById('view-more-btn');
    const extraProjects = document.querySelectorAll('.extra-project');
    
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            const isHidden = extraProjects[0].classList.contains('d-none');
            
            extraProjects.forEach(project => {
                if (isHidden) {
                    project.classList.remove('d-none');
                    // Trigger reveal animation for newly shown projects
                    setTimeout(() => {
                        project.classList.add('reveal-active');
                    }, 100);
                } else {
                    project.classList.add('d-none');
                    project.classList.remove('reveal-active');
                }
            });
            
            viewMoreBtn.textContent = isHidden ? 'Show Less' : 'View More Projects';
        });
    }

    // Dark mode toggle (placeholder)
    // const toggle = document.querySelector('.dark-mode-toggle');

});
