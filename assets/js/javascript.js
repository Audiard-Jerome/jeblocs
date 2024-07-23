document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.10 // 10% du container doit etre visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // entry.target.classList.remove('active'); // 
            }
        });
    }, options);

    containers.forEach(container => {
        observer.observe(container);
    });
});

  