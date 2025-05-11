// Dados das galerias de imagens para cada espetu00e1culo
const galleryData = {
    'qorpo-santo': {
        title: 'Qorpo Santo (2006 - 2008)',
        images: [
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/espetaculo3.jpg',
            'images/companhia.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'tribunal': {
        title: 'Tribunal Quarto de Zona (2008 - 2009)',
        images: [
            'images/qorpo-santo.webp',
            'images/espetaculo3.jpg',
            'images/espetaculo1.jpg',
            'images/companhia.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'conversa': {
        title: 'Conversa Su00e9ria de Calcinha e Soutien (2011 - 2016)',
        images: [
            'images/espetaculo3.jpg',
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/companhia.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'praca': {
        title: 'A Prau00e7a Dr. Sem Grau00e7a (2013 - 2016)',
        images: [
            'images/praca-sem-graca.webp',
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/espetaculo3.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'princesa': {
        title: 'A Princesa Gaia (2015 - 2021)',
        images: [
            'images/centro-cultural.jpg',
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/espetaculo3.jpg',
            'images/companhia.jpg'
        ]
    },
    'palhacos': {
        title: 'Palhau00e7os (2011 - 2021)',
        images: [
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/espetaculo3.jpg',
            'images/companhia.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'amor': {
        title: 'Amor (2017 - 2021)',
        images: [
            'images/espetaculo2.jpg',
            'images/espetaculo3.jpg',
            'images/espetaculo1.jpg',
            'images/companhia.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'tartufo': {
        title: 'Tartufo\'s 80 (2018 - 2023)',
        images: [
            'images/espetaculo3.jpg',
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/companhia.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'raio-lua': {
        title: 'Num Raio de Lua (2022 - 2023)',
        images: [
            'images/companhia.jpg',
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/espetaculo3.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'ceu-constelado': {
        title: 'Cu00e9u Constelado (2022 - 2023)',
        images: [
            'images/centro-cultural.jpg',
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/espetaculo3.jpg',
            'images/companhia.jpg'
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
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/espetaculo3.jpg',
            'images/companhia.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'cinema-pipoca': {
        title: 'Pipoca (2011)',
        images: [
            'images/espetaculo2.jpg',
            'images/espetaculo3.jpg',
            'images/espetaculo1.jpg',
            'images/companhia.jpg',
            'images/centro-cultural.jpg'
        ]
    },
    'cinema-outros-dias': {
        title: 'Outros Dias (2012)',
        images: [
            'images/espetaculo3.jpg',
            'images/espetaculo1.jpg',
            'images/espetaculo2.jpg',
            'images/companhia.jpg',
            'images/centro-cultural.jpg'
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
window.addEventListener('click', function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Navegar com as teclas do teclado quando o modal estiver aberto
window.addEventListener('keydown', function(event) {
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
