// Dados das galerias de imagens para cada espetu00e1culo
const galleryData = {
    'estranho-amor': {
        title: 'Nosso Estranho Amor (2009 - 2020)',
        fichaTecnica: 'Em cena: Bárbara Campos, Carolina Grigoli, Guilherme Thiago, João Paulo Valadares, Kenya Goulart, Luciene Bernardes',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        images: [
            './images/estranho-amor.webp'
        ]
    },
    'sagrado-feminino': {
        title: 'Sagrado Feminino (2021 - 2022)',
        fichaTecnica: 'Em cena: Carolina Grigoli, Kenya Goulart, Luciene Bernardes, Luísa Couto, Mariana Tozzi, Rachel de Andrade',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        images: [
            './images/sagrado-feminino.webp'
        ]
    },
    'ultima-noite': {
        title: 'A Última Noite (2023)',
        fichaTecnica: 'Em cena: Guilherme Thiago, João Paulo Valadares, Max Gonçalves, Renato Amado, Ronaldo Queiroz, Thiago Prata',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        images: [
            './images/a-ultima-noite.webp'
        ]
    },
    'fausto': {
        title: 'Fausto(s!) (2010 - 2016)',
        fichaTecnica: 'Em cena: Guilherme Thiago, João Paulo Valadares, Max Gonçalves, Renato Amado, Ronaldo Queiroz, Thiago Prata',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        images: [
            './images/fausto.webp'
        ]
    },
    'windsor': {
        title: 'As Alegres Comadres de Windsor (2017 - 2023)',
        fichaTecnica: 'Em cena: Bárbara Campos, Carolina Grigoli, Guilherme Thiago, João Paulo Valadares, Kenya Goulart, Luciene Bernardes',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        images: [
            './images/windsor.webp'
        ]
    },
    'saga': {
        title: 'Saga - Uma História do Povo Preto (2023 - Atual)',
        fichaTecnica: 'Em cena: Bárbara Campos, Carolina Grigoli, Guilherme Thiago, João Paulo Valadares, Kenya Goulart, Luciene Bernardes',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        images: [
            './images/gallery/saga/1.webp',
            './images/gallery/saga/2.webp',
            './images/gallery/saga/3.webp',
            './images/gallery/saga/4.webp',
            './images/gallery/saga/5.webp'
        ]
    },
    'qorpo-santo': {
        title: 'Qorpo Santo (2006 - 2008)',
        fichaTecnica: 'Em cena: Bárbara Campos, Carolina Grigoli, Guilherme Thiago, João Paulo Valadares, Kenya Goulart, Luciene Bernardes',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
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
        fichaTecnica: 'Em cena: Max Gonçalves, Rachel de Andrade, Renato Amado, Ronaldo Queiroz, Tacyane Guimarães, Thiago Prata',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.',
        images: [
            './images/gallery/tribunal/1.webp',
            './images/gallery/tribunal/2.webp',
            './images/gallery/tribunal/3.webp',
            './images/gallery/tribunal/4.webp',
            './images/gallery/tribunal/5.webp',
        ]
    },
    'conversa': {
        title: 'Conversa Séria de Calcinha e Soutien (2011 - 2016)',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
        fichaTecnica: [
            'Carolina Grigoli',
            'Kenya Goulart',
            'Luciene Bernardes',
            'Luísa Couto',
            'Mariana Tozzi',
            'Tacyane Guimarães'
        ],
        images: [
            './images/gallery/calcinha-e-soutien/1.webp',
            './images/gallery/calcinha-e-soutien/2.webp',
            './images/gallery/calcinha-e-soutien/3.webp',
            './images/gallery/calcinha-e-soutien/4.webp',
            './images/gallery/calcinha-e-soutien/5.webp',
        ]
    },
    'praca': {
        title: 'A Praça Dr. Sem Graça (2013 - 2016)',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.',
        fichaTecnica: [
            'Guilherme Thiago',
            'João Paulo Valadares',
            'Max Gonçalves',
            'Renato Amado',
            'Ronaldo Queiroz',
            'Thiago Prata'
        ],
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
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        fichaTecnica: [
            'Bárbara Campos',
            'Carolina Grigoli',
            'Kenya Goulart',
            'Luísa Couto',
            'Mariana Tozzi',
            'Rachel de Andrade'
        ],
        images: [
            './images/gallery/princesa-gaia/1.webp',
            './images/gallery/princesa-gaia/2.webp',
            './images/gallery/princesa-gaia/3.webp',
            './images/gallery/princesa-gaia/4.webp',
            './images/gallery/princesa-gaia/5.webp',
        ]
    },
    'palhacos': {
        title: 'Palhaços (2011 - 2021)',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
        fichaTecnica: [
            'Guilherme Thiago',
            'João Paulo Valadares',
            'Max Gonçalves',
            'Renato Amado',
            'Ronaldo Queiroz',
            'Thiago Prata'
        ],
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
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        fichaTecnica: [
            'Bárbara Campos',
            'Carolina Grigoli',
            'Guilherme Thiago',
            'João Paulo Valadares',
            'Kenya Goulart',
            'Luciene Bernardes'
        ],
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
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
        fichaTecnica: [
            'Max Gonçalves',
            'Rachel de Andrade',
            'Renato Amado',
            'Ronaldo Queiroz',
            'Tacyane Guimarães',
            'Thiago Prata'
        ],
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
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum.',
        fichaTecnica: [
            'Bárbara Campos',
            'Carolina Grigoli',
            'Kenya Goulart',
            'Luciene Bernardes',
            'Luísa Couto',
            'Mariana Tozzi'
        ],
        images: [
            './images/gallery/lua/1.webp',
            './images/gallery/lua/2.webp',
            './images/gallery/lua/3.webp',
            './images/gallery/lua/4.webp',
            './images/gallery/lua/5.webp',
        ]
    },
    'ceu-constelado': {
        title: 'Céu Constelado (2022 - 2023)',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
        fichaTecnica: [
            'Guilherme Thiago',
            'João Paulo Valadares',
            'Max Gonçalves',
            'Renato Amado',
            'Ronaldo Queiroz',
            'Thiago Prata'
        ],
        images: [
            './images/gallery/ceu-estelado/1.webp',
            './images/gallery/ceu-estelado/2.webp',
            './images/gallery/ceu-estelado/3.webp',
            './images/gallery/ceu-estelado/4.webp',
            './images/gallery/ceu-estelado/5.webp',
        ]
    },
    'essencias': {
        title: 'Essências (2022 - 2023)',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        fichaTecnica: [
            'Carolina Grigoli',
            'Guilherme Thiago',
            'João Paulo Valadares',
            'Kenya Goulart',
            'Luciene Bernardes',
            'Luísa Couto'
        ],
        images: [
            'images/gallery/essencias/1.webp',
            'images/gallery/essencias/2.webp',
            'images/gallery/essencias/3.webp',
            'images/gallery/essencias/4.webp',
            'images/gallery/essencias/5.webp',
        ]
    },
    'cinema-waterapoc': {
        title: 'Waterapoc (2009)',
        fichaTecnica: 'Direção: Max Gonçalves. Elenco: Rachel de Andrade, Renato Amado, Ronaldo Queiroz, Tacyane Guimarães',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
        images: [
            './images/waterapoc.webp',
           
        ]
    },
    'cinema-pipoca': {
        title: 'Humanamente Mefisto (2005)',
        fichaTecnica: 'Direção: Thiago Prata. Elenco: Bárbara Campos, Carolina Grigoli, Guilherme Thiago, João Paulo Valadares',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.',
        images: [
            './images/mefisto.webp',
         
        ]
    },
    'cinema-outros-dias': {
        title: 'Coisa Feita pelo Coração (2025)',
        fichaTecnica: 'Direção: Mariana Tozzi. Elenco: Kenya Goulart, Luciene Bernardes, Luísa Couto, Max Gonçalves, Rachel de Andrade',
        textoApresentacao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna.',
        images: [
            './images/coracao.webp',
          
        ]
    }
};

// Variáveis globais para o modal
let currentGallery = '';
let currentImageIndex = 0;

// Função para mostrar uma aba específica no modal
function showTab(tabName) {
    // Obter os elementos das abas e conteúdos
    const tabFicha = document.getElementById('tabFicha');
    const tabApresentacao = document.getElementById('tabApresentacao');
    const fichaContent = document.getElementById('fichaContent');
    const apresentacaoContent = document.getElementById('apresentacaoContent');
    
    // Remover classe active de todas as abas
    tabFicha.classList.remove('active');
    tabApresentacao.classList.remove('active');
    
    // Esconder todos os conteúdos
    fichaContent.style.display = 'none';
    apresentacaoContent.style.display = 'none';
    
    // Mostrar a aba selecionada
    if (tabName === 'ficha') {
        tabFicha.classList.add('active');
        fichaContent.style.display = 'block';
    } else if (tabName === 'apresentacao') {
        tabApresentacao.classList.add('active');
        apresentacaoContent.style.display = 'block';
    }
}

// Função para abrir o modal
function openModal(galleryId) {
    // Verificar se a galeria existe
    if (!galleryData[galleryId]) {
        console.error('Galeria não encontrada:', galleryId);
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
    const fichaTecnica = document.getElementById('fichaTecnica');
    const textoApresentacao = document.getElementById('textoApresentacao');

    // Limpar galeria anterior
    modalGallery.innerHTML = '';

    // Definir título
    modalTitle.textContent = galleryData[galleryId].title;
    
    // Adicionar ficha técnica
    if (galleryData[galleryId].fichaTecnica) {
        // Verificar se a ficha técnica é um array ou uma string
        if (Array.isArray(galleryData[galleryId].fichaTecnica)) {
            // Se for um array, formatar como lista
            fichaTecnica.innerHTML = 'Em cena: ' + galleryData[galleryId].fichaTecnica.join(', ');
        } else {
            // Se for uma string, usar diretamente
            fichaTecnica.innerHTML = galleryData[galleryId].fichaTecnica;
        }
    } else {
        // Ficha técnica padrão se não houver nenhuma definida
        fichaTecnica.innerHTML = 'Em cena: Bárbara Campos, Carolina Grigoli, Guilherme Thiago, João Paulo Valadares, Kenya Goulart, Luciene Bernardes, Luísa Couto, Mariana Tozzi, Max Gonçalves, Rachel de Andrade, Renato Amado, Ronaldo Queiroz, Tacyane Guimarães e Thiago Prata.';
    }
    
    // Adicionar texto de apresentação
    if (galleryData[galleryId].textoApresentacao) {
        textoApresentacao.innerHTML = galleryData[galleryId].textoApresentacao;
    } else {
        textoApresentacao.innerHTML = 'Informações sobre este espetáculo em breve.';
    }
    
    // Mostrar a aba de ficha técnica por padrão
    showTab('ficha');

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
