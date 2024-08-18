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

// doom
const targetSequence = 'iddad';
let currentSequence = '';

// Fonction pour vérifier la séquence de touches
function handleKeyPress(event) {
    // Ajouter la touche actuelle à la séquence
    currentSequence += event.key;

    // Garder la séquence à la longueur de la séquence cible
    if (currentSequence.length > targetSequence.length) {
        currentSequence = currentSequence.slice(-targetSequence.length);
    }

    // Vérifier si la séquence actuelle correspond à la séquence cible
    if (currentSequence === targetSequence) {
        // Ouvrir le site web lorsque la séquence est détectée
        window.open('https://audiard-jerome.github.io/doom/', '_blank');
        
        // Réinitialiser la séquence après détection
        currentSequence = '';
    }
}

document.addEventListener('keydown', handleKeyPress);