document.addEventListener('DOMContentLoaded', function () {
    const linkElement = document.createElement('link');
    linkElement.rel = 'icon';
    linkElement.type = 'logos/logoVersionResumida/resumidoFondoAmarelo.png';
    linkElement.href = 'ruta/al/favicon.ico';

    document.head.appendChild(linkElement);

    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => console.error('Error loading header:', error));

    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Añadir al principio del body ->          <script src="include.js"></script>
// No hace falta poner <header></header> ni <footer></footer>