document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const heroSection = document.getElementById('heroSection');
    const mainBanner = document.getElementById('mainBanner');
    const loaderContainer = document.getElementById('loaderContainer');
    const slider = document.getElementById('slider');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.getElementById('sliderIndicators');
    
    // Contador de imagens carregadas
    let imagesLoaded = 0;
    const totalImages = document.querySelectorAll('.image').length;
    
    // Funu00e7u00e3o para verificar se todas as imagens relevantes carregaram
    function checkAllImagesLoaded() {
        imagesLoaded++;
        if (imagesLoaded >= totalImages) {
            // Esconde o loader
            loaderContainer.classList.add('hidden');
        }
    }
    
    // Verifica todas as imagens (banners)
    document.querySelectorAll('.image').forEach(img => {
        if (img.complete) {
            checkAllImagesLoaded();
        } else {
            img.addEventListener('load', checkAllImagesLoaded);
            img.addEventListener('error', checkAllImagesLoaded); // Conta mesmo em caso de erro
        }
    });
    
    // Configurau00e7u00e3o do Slider
    let currentIndex = 0;
    let interval;
    const slideInterval = 5000; // 5 segundos para cada slide
    
    // Criar indicadores baseados no nu00famero de slides
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicator.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = document.querySelectorAll('.indicator');
    
    // Funu00e7u00e3o para ir para um slide especu00edfico
    function goToSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        
        slider.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        
        // Atualizar indicadores
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Eventos dos botu00f5es de navegau00e7u00e3o
    prevButton.addEventListener('click', function() {
        goToSlide(currentIndex - 1);
        resetInterval();
    });
    
    nextButton.addEventListener('click', function() {
        goToSlide(currentIndex + 1);
        resetInterval();
    });
    
    // Iniciar slider automu00e1tico
    function startInterval() {
        interval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, slideInterval);
    }
    
    // Reiniciar o timer quando o usuu00e1rio interage
    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }
    
    // Iniciar o slider automu00e1tico
    startInterval();
    
    // Pausa o slider ao passar o mouse sobre ele
    slider.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    
    slider.addEventListener('mouseleave', () => {
        startInterval();
    });
    
    // Habilita navegau00e7u00e3o com teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentIndex - 1);
            resetInterval();
        } else if (e.key === 'ArrowRight') {
            goToSlide(currentIndex + 1);
            resetInterval();
        }
    });
    
    // Suporte para gestos de deslize em dispositivos mu00f3veis
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Deslize para a esquerda (pru00f3ximo slide)
            goToSlide(currentIndex + 1);
            resetInterval();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Deslize para a direita (slide anterior)
            goToSlide(currentIndex - 1);
            resetInterval();
        }
    }
});
