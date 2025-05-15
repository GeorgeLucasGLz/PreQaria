// Dados das galerias de imagens para cada espetu00e1culo
const galleryData = {
    'qorpo-santo': {
        title: 'Qorpo Santo (2006 - 2008)',
        images: [
            './images/gallery/qorpo-santo/1.webp',
            './images/gallery/qorpo-santo/2.webp',
            './images/gallery/qorpo-santo/3.webp',
            './images/gallery/qorpo-santo/4.webp',
            './images/gallery/qorpo-santo/5.webp'
        ]
    },
    'tribunal': {
        title: 'Tribunal Quarto de Zona (2008 - 2009)',
        images: [
            './images/gallery/tribunal/1.webp',
            './images/gallery/tribunal/2.webp',
            './images/gallery/tribunal/3.webp',
            './images/gallery/tribunal/4.webp',
            './images/gallery/tribunal/5.webp',
        ]
    },
    'conversa': {
        title: 'Conversa Su00e9ria de Calcinha e Soutien (2011 - 2016)',
        images: [
            './images/gallery/calcinha-e-soutien/1.webp',
            './images/gallery/calcinha-e-soutien/2.webp',
            './images/gallery/calcinha-e-soutien/3.webp',
            './images/gallery/calcinha-e-soutien/4.webp',
            './images/gallery/calcinha-e-soutien/5.webp',
        ]
    },
    'praca': {
        title: 'A Prau00e7a Dr. Sem Grau00e7a (2013 - 2016)',
        images: [
            './images/gallery/praca/1.webp',
            './images/gallery/praca/2.webp',
            './images/gallery/praca/3.webp',
            './images/gallery/praca/4.webp',
            './images/gallery/praca/5.webp',
        ]
    },
    'princesa': {
        title: 'A Princesa Gaia (2015 - 2021)',
        images: [
            './images/gallery/princesa-gaia/1.webp',
            './images/gallery/princesa-gaia/2.webp',
            './images/gallery/princesa-gaia/3.webp',
            './images/gallery/princesa-gaia/4.webp',
            './images/gallery/princesa-gaia/5.webp',
        ]
    },
    'palhacos': {
        title: 'Palhau00e7os (2011 - 2021)',
        images: [
            './images/gallery/palhacos/1.webp',
            './images/gallery/palhacos/2.webp',
            './images/gallery/palhacos/3.webp',
            './images/gallery/palhacos/4.webp',
            './images/gallery/palhacos/5.webp',
        ]
    },
    'amor': {
        title: 'Amor (2017 - 2021)',
        images: [
            './images/gallery/amor/1.webp',
            './images/gallery/amor/2.webp',
            './images/gallery/amor/3.webp',
            './images/gallery/amor/4.webp',
            './images/gallery/amor/5.webp',
        ]
    },
    'tartufo': {
        title: 'Tartufo\'s 80 (2018 - 2023)',
        images: [
            './images/gallery/tartufo/1.webp',
            './images/gallery/tartufo/2.webp',
            './images/gallery/tartufo/3.webp',
            './images/gallery/tartufo/4.webp',
            './images/gallery/tartufo/5.webp',
        ]
    },
    'raio-lua': {
        title: 'Num Raio de Lua (2022 - 2023)',
        images: [
            './images/gallery/lua/1.webp',
            './images/gallery/lua/2.webp',
            './images/gallery/lua/3.webp',
            './images/gallery/lua/4.webp',
            './images/gallery/lua/5.webp',
        ]
    },
    'ceu-constelado': {
        title: 'Cu00e9u Constelado (2022 - 2023)',
        images: [
            './images/gallery/ceu-estelado/1.webp',
            './images/gallery/ceu-estelado/2.webp',
            './images/gallery/ceu-estelado/3.webp',
            './images/gallery/ceu-estelado/4.webp',
            './images/gallery/ceu-estelado/5.webp',
        ]
    },
    'essencias': {
        title: 'Essu00eancias (2022 - 2023)',
        images: [
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/espetaculo3.jpg',
            'images/companhia.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'cinema-waterapoc': {
        title: 'Waterapoc (2009)',
        images: [
            './images/waterapoc.webp',
           
        ]
    },
    'cinema-pipoca': {
        title: 'Humanamente Mefisto (2005)',
        images: [
            './images/mefisto.webp',
         
        ]
    },
    'cinema-outros-dias': {
        title: 'Coisa Feita pelo Coração (2025)',
        images: [
            './images/coracao.webp',
          
        ]
    }
};

// Variu00e1veis globais para o modal
let currentGallery = '';
let currentImageIndex = 0;

// Funu00e7u00e3o para abrir o modal
function openModal(galleryId) {
    // Verificar se a galeria existe
    if (!galleryData[galleryId]) {
        console.error('Galeria nu00e3o encontrada:', galleryId);
        return;
    }

    // Definir a galeria atual
    currentGallery = galleryId;
    currentImageIndex = 0;

    // Obter elementos do DOM
    const modal = document.getElementById('galleryModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGallery = document.getElementById('modalGallery');
    const imageCounter = document.getElementById('imageCounter');

    // Limpar galeria anterior
    modalGallery.innerHTML = '';

    // Definir tu00edtulo
    modalTitle.textContent = galleryData[galleryId].title;

    // Adicionar imagens
    galleryData[galleryId].images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Imagem ${index + 1} de ${galleryData[galleryId].title}`;
        img.className = index === 0 ? 'active' : '';
        modalGallery.appendChild(img);
    });

    // Atualizar contador
    updateImageCounter();

    // Exibir modal
    modal.style.display = 'block';

    // Impedir rolagem da pu00e1gina
    document.body.style.overflow = 'hidden';
}

// Funu00e7u00e3o para fechar o modal
function closeModal() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';

    // Permitir rolagem da pu00e1gina novamente
    document.body.style.overflow = 'auto';
}

// Funu00e7u00e3o para trocar de imagem
function changeImage(direction) {
    const gallery = galleryData[currentGallery];
    const images = document.querySelectorAll('#modalGallery img');

    // Remover classe active da imagem atual
    images[currentImageIndex].classList.remove('active');

    // Calcular novo u00edndice
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;

    // Adicionar classe active u00e0 nova imagem
    images[currentImageIndex].classList.add('active');

    // Atualizar contador
    updateImageCounter();
}

// Funu00e7u00e3o para atualizar o contador de imagens
function updateImageCounter() {
    const imageCounter = document.getElementById('imageCounter');
    const gallery = galleryData[currentGallery];
    imageCounter.textContent = `${currentImageIndex + 1} / ${gallery.images.length}`;
}

// Fechar o modal quando clicar fora do conteu00fado
window.addEventListener('click', function (event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Navegar com as teclas do teclado quando o modal estiver aberto
window.addEventListener('keydown', function (event) {
    const modal = document.getElementById('galleryModal');
    if (modal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'Escape') {
            closeModal();
        }
    }
});
