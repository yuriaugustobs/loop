// ==============================================
// RENI CORRETOR - MAIN JAVASCRIPT
// ==============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ==============================================
    // SCROLL REVEAL ANIMATIONS
    // ==============================================
    
    class ScrollReveal {
        constructor() {
            this.elements = document.querySelectorAll('[class*="reveal-"]');
            this.windowHeight = window.innerHeight;
            this.init();
        }

        init() {
            this.revealElements();
            window.addEventListener('scroll', () => this.revealElements());
            window.addEventListener('resize', () => {
                this.windowHeight = window.innerHeight;
                this.revealElements();
            });
        }

        revealElements() {
            this.elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 100;

                if (elementTop < this.windowHeight - elementVisible) {
                    this.addRevealClass(element);
                }
            });
        }

        addRevealClass(element) {
            if (element.classList.contains('reveal-up')) {
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            } else if (element.classList.contains('reveal-down')) {
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            } else if (element.classList.contains('reveal-left')) {
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
            } else if (element.classList.contains('reveal-right')) {
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
            }
        }
    }

    // Aplicar estilos CSS iniciais para as animações
    function initRevealStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .reveal-up, .reveal-down, .reveal-left, .reveal-right {
                opacity: 0;
                transition: all 0.8s ease-out;
            }
            
            .reveal-up {
                transform: translateY(50px);
            }
            
            .reveal-down {
                transform: translateY(-50px);
            }
            
            .reveal-left {
                transform: translateX(-50px);
            }
            
            .reveal-right {
                transform: translateX(50px);
            }
        `;
        document.head.appendChild(style);
    }

    // ==============================================
    // SMOOTH SCROLL
    // ==============================================
    
    function initSmoothScroll() {
        const smoothScrollLinks = document.querySelectorAll('.smooth-scroll, a[href^="#"]');
        
        smoothScrollLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href.startsWith('#') && href.length > 1) {
                    e.preventDefault();
                    
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                        const targetPosition = targetElement.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // ==============================================
    // MOBILE MENU
    // ==============================================
    
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
                
                // Animar ícone do menu
                const icon = this.querySelector('svg');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    icon.style.transform = 'rotate(90deg)';
                }
            });

            // Fechar menu ao clicar em um link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.querySelector('svg').style.transform = 'rotate(0deg)';
                });
            });
        }
    }

    // ==============================================
    // SEARCH FORM FUNCTIONALITY
    // ==============================================
    
    function initSearchForm() {
        const searchForm = document.getElementById('search-form');
        
        if (searchForm) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const searchData = {
                    keyword: formData.get('keyword'),
                    neighborhood: formData.get('neighborhood'),
                    type: formData.get('type')
                };
                
                console.log('Pesquisa realizada:', searchData);
                
                // Scroll para a seção de imóveis
                const imoveisSection = document.getElementById('imoveis');
                if (imoveisSection) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                    const targetPosition = imoveisSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Aqui você pode implementar a lógica de busca real
                // Por exemplo: filtrar imóveis, chamar API, etc.
                
                // Feedback visual temporário
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<svg class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"></circle><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" class="opacity-75"></path></svg>Buscando...';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                }, 1500);
            });
        }
    }

    // ==============================================
    // FILTROS DE IMÓVEIS
    // ==============================================
    
    function initPropertyFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', 'bg-blue-600', 'text-white');
                    btn.classList.add('bg-white', 'text-gray-700');
                });
                
                // Add active class to clicked button
                this.classList.add('active', 'bg-blue-600', 'text-white');
                this.classList.remove('bg-white', 'text-gray-700');
                
                const filter = this.dataset.filter;
                console.log('Filtro selecionado:', filter);
                // Aqui você pode implementar a lógica de filtro quando conectar com a API
            });
        });
    }

    // ==============================================
    // FORMULÁRIO DE CONTATO
    // ==============================================
    
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const submitBtn = this.querySelector('button[type="submit"]');
                const btnText = document.getElementById('btn-text');
                const btnLoading = document.getElementById('btn-loading');
                const formMessage = document.getElementById('form-message');
                
                // Mostrar loading
                btnText.textContent = 'Enviando...';
                btnLoading.classList.remove('hidden');
                submitBtn.disabled = true;
                
                // Coletar dados do formulário
                const formData = new FormData(this);
                const data = {
                    nome: formData.get('nome'),
                    email: formData.get('email'),
                    telefone: formData.get('telefone'),
                    assunto: formData.get('assunto'),
                    mensagem: formData.get('mensagem'),
                    lgpd: formData.get('lgpd')
                };
                
                try {
                    // Simular envio (substitua pela sua API)
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    
                    // Sucesso
                    formMessage.className = 'p-4 rounded-lg text-center font-medium bg-green-100 text-green-700';
                    formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                    formMessage.classList.remove('hidden');
                    
                    // Limpar formulário
                    this.reset();
                    
                } catch (error) {
                    // Erro
                    formMessage.className = 'p-4 rounded-lg text-center font-medium bg-red-100 text-red-700';
                    formMessage.textContent = 'Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.';
                    formMessage.classList.remove('hidden');
                    
                } finally {
                    // Restaurar botão
                    btnText.textContent = 'Enviar Mensagem';
                    btnLoading.classList.add('hidden');
                    submitBtn.disabled = false;
                    
                    // Ocultar mensagem após 5 segundos
                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                    }, 5000);
                }
            });
        }
    }

    // ==============================================
    // CARREGAMENTO DE IMÓVEIS (API)
    // ==============================================
    
    function initPropertyLoader() {
        const loadingElement = document.getElementById('imoveis-loading');
        const gridElement = document.getElementById('imoveis-grid');
        const placeholderElement = document.getElementById('imoveis-placeholder');
        
        // Simular carregamento da API
        setTimeout(() => {
            if (loadingElement) loadingElement.classList.add('hidden');
            if (placeholderElement) placeholderElement.classList.remove('hidden');
            
            // Aqui você implementaria a chamada real para a API do WordPress
            // loadPropertiesFromAPI();
        }, 1000);
    }

    // Função para carregar imóveis da API (para implementação futura)
    async function loadPropertiesFromAPI() {
        try {
            // const response = await fetch('https://sua-api-wordpress.com/wp-json/wp/v2/imoveis');
            // const properties = await response.json();
            // renderProperties(properties);
            console.log('API de imóveis será implementada aqui');
        } catch (error) {
            console.error('Erro ao carregar imóveis:', error);
        }
    }

    // ==============================================
    // NAVBAR SCROLL EFFECT (DESABILITADO)
    // ==============================================
    
    function initNavbarEffect() {
        // Efeito de transparência removido - header sempre branco sólido
        return;
    }

    // ==============================================
    // BACK TO TOP BUTTON
    // ==============================================
    
    function initBackToTop() {
        // Criar botão
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
        `;
        backToTopBtn.className = 'fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform translate-y-16 opacity-0 z-50';
        backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
        document.body.appendChild(backToTopBtn);

        // Mostrar/ocultar baseado no scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.style.transform = 'translateY(0)';
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.transform = 'translateY(64px)';
                backToTopBtn.style.opacity = '0';
            }
        });

        // Ação do clique
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==============================================
    // INICIALIZAÇÃO
    // ==============================================
    
    // Inicializar todas as funcionalidades
    initRevealStyles();
    new ScrollReveal();
    initSmoothScroll();
    initMobileMenu();
    initSearchForm();
    initPropertyFilters();
    initContactForm();
    initPropertyLoader();
    initNavbarEffect();
    initBackToTop();
    
    console.log('🏠 Reni Corretor - Site carregado com sucesso!');
});

// ==============================================
// UTILS E FUNÇÕES AUXILIARES
// ==============================================

// Formatação de telefone
function formatPhone(phone) {
    return phone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

// Formatação de preço
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Debounce para otimizar eventos de scroll
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}