document.addEventListener('DOMContentLoaded', function () {
    const chantForm = document.getElementById('chantForm');
    const titreChant = document.getElementById('titreChant');
    const texteChant = document.getElementById('texteChant');
    const nomPersonne = document.getElementById('nomPersonne');
    const listeChants = document.getElementById('listeChants');

    chantForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Récupérer les valeurs des champs
        const titre = titreChant.value;
        const texte = texteChant.value;
        const nom = nomPersonne.value;
        const date = new Date().toLocaleDateString();

        // Créer un nouvel élément de liste pour le chant
        const li = document.createElement('li');
        li.innerHTML = `<h3>${titre}</h3><p>${texte}</p><div class="details">Ajouté par ${nom} le ${date}</div>`;

        // Ajouter le nouvel élément à la liste
        listeChants.appendChild(li);

        // Réinitialiser le formulaire
        chantForm.reset();
    });
});