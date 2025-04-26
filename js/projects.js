// Project Filtering Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Filter projects based on category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.dataset.filter;

            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Smooth transition for filtering
    function fadeOut(element) {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = 'none';
        }, 300);
    }

    function fadeIn(element) {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.opacity = 1;
        }, 10);
    }
});