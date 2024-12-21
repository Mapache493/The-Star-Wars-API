document.getElementById('loadCharacters').addEventListener('click', loadCharacters);
document.getElementById('loadEpisodes').addEventListener('click', loadEpisodes);
document.getElementById('loadProducts').addEventListener('click', loadProducts);

// Cargar personajes
function loadCharacters() {
    const charactersList = document.getElementById('charactersList');
    charactersList.innerHTML = ''; // Limpiar la lista antes de cargar nuevos datos

    // Hacer la solicitud a la API de Los Simpsons para obtener personajes
    fetch('https://api.sampleapis.com/simpsons/characters')
        .then(response => response.json())
        .then(data => {
            data.forEach(character => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.innerHTML = `${character.name} <button class="btn btn-info btn-sm float-end" data-bs-toggle="modal" data-bs-target="#characterModal" onclick="showCharacterDetails(${JSON.stringify(character)})">Ver Detalles</button>`;
                charactersList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error al cargar los personajes:', error);
        });
}

// Cargar episodios
function loadEpisodes() {
    const episodesList = document.getElementById('episodesList');
    episodesList.innerHTML = ''; // Limpiar la lista antes de cargar nuevos datos

    // Hacer la solicitud a la API de Los Simpsons para obtener episodios
    fetch('https://api.sampleapis.com/simpsons/episodes')
        .then(response => response.json())
        .then(data => {
            data.forEach(episode => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.innerHTML = `${episode.title} <button class="btn btn-info btn-sm float-end" data-bs-toggle="modal" data-bs-target="#episodeModal" onclick="showEpisodeDetails(${JSON.stringify(episode)})">Ver Detalles</button>`;
                episodesList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error al cargar los episodios:', error);
        });
}

// Cargar productos
function loadProducts() {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = ''; // Limpiar la lista antes de cargar nuevos datos

    // Hacer la solicitud a la API de Los Simpsons para obtener productos
    fetch('https://api.sampleapis.com/simpsons/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.innerHTML = `${product.name} - ${product.price} <button class="btn btn-info btn-sm float-end" data-bs-toggle="modal" data-bs-target="#productModal" onclick="showProductDetails(${JSON.stringify(product)})">Ver Detalles</button>`;
                productsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
}

// Mostrar detalles del personaje
function showCharacterDetails(character) {
    const characterDetails = document.getElementById('characterDetails');
    characterDetails.innerHTML = `
        <p><strong>Nombre:</strong> ${character.name}</p>
        <p><strong>Cita:</strong> ${character.quote}</p>
        <p><strong>Especie:</strong> ${character.species}</p>
        <p><strong>Género:</strong> ${character.gender}</p>
    `;
}

// Mostrar detalles del episodio
function showEpisodeDetails(episode) {
    const episodeDetails = document.getElementById('episodeDetails');
    episodeDetails.innerHTML = `
        <p><strong>Título:</strong> ${episode.title}</p>
        <p><strong>Temporada:</strong> ${episode.season}</p>
        <p><strong>Episodio:</strong> ${episode.episode}</p>
        <p><strong>Resumen:</strong> ${episode.summary}</p>
    `;
}

// Mostrar detalles del producto
function showProductDetails(product) {
    const productDetails = document.getElementById('productDetails');
    productDetails.innerHTML = `
        <p><strong>Nombre:</strong> ${product.name}</p>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Descripción:</strong> ${product.description}</p>
    `;
}
