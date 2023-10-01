const apiKey = 'MGdFz5wLRBe0Tm85uwchPN9wyg8CqI3u';
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
        searchGifs(searchTerm);
    }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();

        if (searchTerm !== '') {
            searchGifs(searchTerm);
        }
    }
});

function searchGifs(searchTerm) {
    gifContainer.innerHTML = ''; // Limpia los resultados anteriores

    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`)
        .then((response) => response.json())
        .then((data) => {
            data.data.forEach((gif) => {
                const gifElement = document.createElement('img');
                gifElement.classList.add('gif');
                gifElement.src = gif.images.fixed_height.url;
                gifContainer.appendChild(gifElement);
            });
        })
        .catch((error) => {
            console.error('Error al buscar GIFs:', error);
        });
}
