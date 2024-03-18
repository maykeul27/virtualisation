const searchInput = document.getElementById('search-input'); // Récupère le champ de recherche
const linksList = document.getElementById('links-list'); // Récupère la liste des liens Git

// Remplacez ce tableau par les liens Git réels provenant de votre base de données
const gitLinks = [
    { title: 'Project 1', url: 'https://github.com/user/project1' },
    { title: 'Project 2', url: 'https://github.com/user/project2' },
    { title: 'Project 3', url: 'https://github.com/user/project3' },
];

function displayLinks() {
    linksList.innerHTML = ''; // Vide la liste des liens
    gitLinks.forEach((link) => {
        const li = document.createElement('li'); // Crée un nouvel élément de liste
        const linkElement = document.createElement('a'); // Crée un nouvel élément de lien
        linkElement.textContent = link.title; // Définit le texte du lien
        linkElement.href = link.url; // Définit l'URL du lien
        li.appendChild(linkElement); // Ajoute le lien à l'élément de liste
        linksList.appendChild(li); // Ajoute l'élément de liste à la liste des liens
    });
}

function filterLinks() {
    const searchTerm = searchInput.value.toLowerCase(); // Récupère la valeur du champ de recherche
    const filteredLinks = gitLinks.filter((link) => link.title.toLowerCase().includes(searchTerm)); // Filtre les liens en fonction du terme de recherche
    displayLinks(filteredLinks); // Affiche les liens filtrés
}

searchInput.addEventListener('input', filterLinks); // Ajoute un écouteur d'événements sur le champ de recherche pour filtrer les liens lors de la saisie

displayLinks(); // Affiche les liens Git au chargement de la page
