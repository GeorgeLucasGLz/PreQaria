// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile menu toggle
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navMenu = document.querySelector('nav ul');
    
//     menuToggle.addEventListener('click', function() {
//         navMenu.classList.toggle('active');
//     });
    
//     // Close menu when clicking on a link
//     const navLinks = document.querySelectorAll('nav ul li a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             navMenu.classList.remove('active');
//         });
//     });
    
//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href');
//             const targetElement = document.querySelector(targetId);
            
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 80, // Adjust for header height
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
    
//     // Header scroll effect
//     const header = document.querySelector('header');
//     let lastScrollTop = 0;
    
//     window.addEventListener('scroll', function() {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
//         if (scrollTop > 100) {
//             header.style.padding = '10px 0';
//             header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
//         } else {
//             header.style.padding = '15px 0';
//             header.style.boxShadow = 'none';
//         }
        
//         lastScrollTop = scrollTop;
//     });
    
//     // Simple form validation
//     const contactForm = document.querySelector('#contato form');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Basic validation
//             let valid = true;
//             const requiredFields = contactForm.querySelectorAll('[required]');
            
//             requiredFields.forEach(field => {
//                 if (!field.value.trim()) {
//                     valid = false;
//                     field.style.borderColor = '#e63946';
//                 } else {
//                     field.style.borderColor = '#ddd';
//                 }
//             });
            
//             if (valid) {
//                 // Here you would normally send the form data to a server
//                 alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
//                 contactForm.reset();
//             } else {
//                 alert('Por favor, preencha todos os campos obrigatórios.');
//             }
//         });
//     }
    
//     // Newsletter form
//     const newsletterForm = document.querySelector('.footer-newsletter form');
//     if (newsletterForm) {
//         newsletterForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const emailInput = newsletterForm.querySelector('input[type="email"]');
//             if (emailInput.value.trim()) {
//                 alert('Obrigado por se inscrever em nossa newsletter!');
//                 newsletterForm.reset();
//             } else {
//                 alert('Por favor, insira um email válido.');
//             }
//         });
//     }
// });

// Configuração do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const formData = new FormData(contactForm);
            const formValues = {
                nome: formData.get('nome') || '',
                email: formData.get('email') || '',
                assunto: formData.get('assunto') || '',
                mensagem: formData.get('mensagem') || ''
            };
            
            // Validar campos obrigatórios
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e63946';
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
            
            if (!isValid) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Mapear o valor do assunto para o texto correspondente
            const assuntos = {
                'escola': 'Escola de Arte',
                'centro-cultural': 'Centro Cultural',
                'empresarial': 'Apresentações Empresariais',
                'outro': 'Outro Assunto'
            };
            
            // Construir a mensagem formatada seguindo o padrão que funciona
            const phoneNumber = '5531988944243'; // Número já existente no site
            const assuntoTexto = assuntos[formValues.assunto] || formValues.assunto;
            
            // Construir a mensagem exatamente como no exemplo que funciona
            let message = 'Olá! Recebi um novo contato através do site com os seguintes dados:';
            message += '%0A%0A'; // Duas quebras de linha
            message += `*Nome:* ${formValues.nome}%0A`;
            message += `*Email:* ${formValues.email}%0A`;
            message += `*Assunto:* ${assuntoTexto}%0A`;
            message += `*Mensagem:*%0A${formValues.mensagem}`;
            
            // Construir a URL do WhatsApp seguindo o mesmo padrão
            const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`;
            
            // Abrir o WhatsApp Web com a mensagem
            window.open(whatsappUrl, '_blank');
            
            // Limpar o formulário após o envio
            contactForm.reset();
            
            // Feedback para o usuário
            alert('Abrindo o WhatsApp com sua mensagem. Por favor, confirme o envio!');
        });
    }
});

// Cursor personalizado
document.addEventListener('mousemove', function(e) {
    // Verificar se a largura da tela é maior que 1000px
    if (window.innerWidth > 1000) {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    }
});

// Partículas
const particles = document.querySelector('.particles');

for(let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Tamanho aleatório
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Posição aleatória
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Duração da animação aleatória
    const duration = Math.random() * 10 + 5;
    particle.style.animationDuration = duration + 's';
    
    // Atraso da animação aleatório
    const delay = Math.random() * 5;
    particle.style.animationDelay = delay + 's';
    
    particles.appendChild(particle);
}

// Animação de aparecimento ao rolar
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('content') || 
                entry.target.classList.contains('espetaculo') || 
                entry.target.classList.contains('curso') || 
                entry.target.classList.contains('projeto-social') || 
                entry.target.classList.contains('stat-item') ||
                entry.target.classList.contains('btn')) {
                entry.target.classList.add('fade-in');
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.content, .espetaculo, .curso, .projeto-social, .stat-item, #escola-arte .btn').forEach(element => {
    observer.observe(element);
});

// Garantir que a seção 'more-shows' seja visível imediatamente
document.addEventListener('DOMContentLoaded', function() {
    // Função para controlar a visibilidade do cursor personalizado
    function checkCursorVisibility() {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            if (window.innerWidth <= 1000) {
                cursor.style.display = 'none';
            } else {
                cursor.style.display = 'block';
            }
        }
    }
    
    // Verificar inicialmente
    checkCursorVisibility();
    
    // Adicionar listener para o evento de redimensionamento
    window.addEventListener('resize', checkCursorVisibility);
    
    // Forçar a visibilidade da seção more-shows e seus cards
    const moreShowsSection = document.querySelector('.more-shows');
    if (moreShowsSection) {
        moreShowsSection.classList.add('fade-in');
        moreShowsSection.style.opacity = '1';
        moreShowsSection.style.transform = 'translateY(0)';
        moreShowsSection.style.visibility = 'visible';
    }
    
    // Forçar a visibilidade de todos os cards dentro da seção more-shows
    const showCards = document.querySelectorAll('.more-shows .show-card');
    showCards.forEach(card => {
        card.classList.add('fade-in');
        card.style.opacity = '1';
        card.style.transform = 'none';
        card.style.visibility = 'visible';
    });
});