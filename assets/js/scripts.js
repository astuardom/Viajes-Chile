document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    document.getElementById('enviar').addEventListener('click', function() {
        alert('enviado correctamente...');
    });

    document.getElementById('DESTACADOS').addEventListener('dblclick', function() {
        this.style.color = '#00ffff';
    });
    
    document.getElementById('CONTACTO').addEventListener('dblclick', function() {
        this.style.color = '#00ffff';
    });

    document.querySelectorAll('.card-title').forEach(function(title) {
        title.addEventListener('click', function() {
            const cardText = this.nextElementSibling;
            if (cardText) {
                cardText.style.display = cardText.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});
