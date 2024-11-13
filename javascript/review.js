// Fonction pour ajouter de nouveaux avis
document.getElementById('loadMoreReviews').addEventListener('click', function() {
    // Créer un nouvel élément div pour le nouvel avis
    const newReview = document.createElement('div');
    newReview.className = 'review';
    
    // Ajouter du contenu à l'avis
    newReview.innerHTML = `
        <p>"Absolutely loved it! The views were breathtaking, and the activities were so much fun!"</p>
        <h4>- Jamie Doe</h4>
    `;
    
    // Ajouter le nouvel avis à la section contenant les avis
    document.querySelector('.review-container').appendChild(newReview);
});
