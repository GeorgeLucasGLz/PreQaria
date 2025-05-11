document.addEventListener('DOMContentLoaded', function() {
    // Header transparente que aparece ao rolar
    const header = document.querySelector('header');
    const backToTop = document.getElementById('backToTop');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Função para verificar a posição de rolagem
    function checkScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            backToTop.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('visible');
        }
    }

    // Verificar a posição de rolagem ao carregar a página
    checkScroll();

    // Verificar a posição de rolagem ao rolar a página
    window.addEventListener('scroll', checkScroll);

    // Botão de voltar ao topo
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Menu burger
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('mobile-active');
    });

    // Fechar o menu ao clicar em um link
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            nav.classList.remove('mobile-active');
        });
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target) && nav.classList.contains('mobile-active')) {
            menuToggle.classList.remove('active');
            nav.classList.remove('mobile-active');
        }
    });
});
