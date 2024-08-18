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

// doom via cheatcode
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

//gestion de la modale
document.addEventListener("DOMContentLoaded", function() {
    const openModalButtons = document.querySelectorAll('.openModal');
    const modal = document.querySelector('.modal');
    const closeModalButton = modal.querySelector('.close');

    openModalButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            modal.classList.remove('hide');
            modal.classList.add('show');
        });
    });

    closeModalButton.addEventListener('click', function() {
        closeModal();
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Ajouter un écouteur d'événement pour la touche Échap
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') { // Vérifie si la touche appuyée est Échap
            closeModal();
        }
    });

    // Fonction pour fermer la modal
    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        
        // Optionally, use setTimeout to remove modal after animation finishes
        setTimeout(function() {
            modal.classList.remove('hide');
        }, 300); // Match the duration of fadeOut animation
    }
});
