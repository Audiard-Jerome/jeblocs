// Effet d'apparition des sections (ajoute la class active)

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
const targetSequence = 'iddqd';
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

// gestion de la modale de contact

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector('.modalContact');
    
    if (!modal) return; // Assure que la modal existe avant d'ajouter les événements

    const openModalButtons = document.querySelectorAll('.openModal');
    const closeModalButton = modal.querySelector('.close');

    // Vérifie si des boutons d'ouverture de la modal existent
    if (openModalButtons.length > 0) {
        openModalButtons.forEach(function(button) {
            button.addEventListener('click', openModal);
        });
    }

    // Ajoute les écouteurs d'événements pour fermer la modal
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Fonction pour ouvrir la modal
    function openModal() {
        modal.classList.remove('hide');
        modal.classList.add('show');
    }

    // Fonction pour fermer la modal
    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        
        setTimeout(function() {
            modal.classList.remove('hide');
        }, 300); // durée de l'animation de fin
    }
});


// gestion de la modale de doom

document.addEventListener('DOMContentLoaded', function() {
    
    const button = document.querySelector('.openModalDoom');
    const modalFrame = document.querySelector('.modalFrame');

    if (!modalFrame) return; // Assure que la modal existe avant d'ajouter les événements

    // Code HTML à ajouter
    const newContent = `
        <div class="modal2">
            <div class="modal2Wrapper">
                <span class="close"></span>
                <iframe src="https://audiard-jerome.github.io/doom/" ></iframe>
            </div>
        </div>
        `;

    // Ajoute un écouteur d'événements pour le clic sur le bouton
    button.addEventListener('click', function() {
        // Ajoute le nouveau contenu à la fin de modalFrame
        modalFrame.insertAdjacentHTML('beforeend', newContent);

        // Sélectionne l'élément close après l'ajout du contenu
        const closeButton = modalFrame.querySelector('.modal2 .close');

        // Ajoute un écouteur d'événements pour le clic sur le bouton de fermeture
        closeButton.addEventListener('click', function() {
            // Supprime la modale
            const modal = modalFrame.querySelector('.modal2');
            if (modal) {
                modal.remove();
            }
        });
    });
});


