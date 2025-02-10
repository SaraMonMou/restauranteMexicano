document.addEventListener('DOMContentLoaded', function() {
    // Load and insert header
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => console.error('Error loading header:', error));

    // Load and insert footer
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Añadir al principio del body ->          <script src="include.js"></script>
// No hace falta poner <header></header> ni <footer></footer>