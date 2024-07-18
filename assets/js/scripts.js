    document.getElementById('submit').addEventListener('click', function() {
        alert('El correo fue enviado correctamente...');
    });

    document.getElementById('destacados').addEventListener('dblclick', function() {
        this.style.color = 'red';
    });

    document.querySelectorAll('.card-title').forEach(function(title) {
        title.addEventListener('click', function() {
            const cardText = this.nextElementSibling;
            if (cardText) {
                cardText.style.display = cardText.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
