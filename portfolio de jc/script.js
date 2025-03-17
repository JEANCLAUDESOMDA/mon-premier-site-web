// Sélectionne tous les liens du menu de navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Empêche le comportement par défaut du lien

        // Récupère l'ID de la section cible
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Vérifie si l'élément existe avant de défiler
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});