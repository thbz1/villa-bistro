document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar')
        const carousel = document.querySelector('.carousel')
        const backToTop = document.getElementById('backToTop')
    
        const navbarHeight = navbar.offsetHeight
        const carouselHeight = carousel.offsetHeight - 70
        const scrollPosition = window.scrollY
    
        // Mostrar o botão de "voltar ao topo" baseado na rolagem
        if (scrollPosition > navbarHeight) {
            backToTop.style.display = 'block'
        } else {
            backToTop.style.display = 'none'
        }
    
        // Esconde a navbar ao rolar para baixo
        if (scrollPosition > navbarHeight && scrollPosition < carouselHeight) {
            navbar.classList.add('hidden')
        } else {
            navbar.classList.remove('hidden')
        }
    
        // Torna a navbar fixa após certo ponto
        if (scrollPosition > carouselHeight) {
            navbar.classList.add('sticky')
        } else {
            navbar.classList.remove('sticky')
        }
    })
    
    // Função para voltar ao topo ao clicar no botão
    const backToTop = document.getElementById('backToTop')
    backToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    // Função para ajustar a rolagem dos links internos
    // Seleciona todos os links que possuem um href que começa com "#"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            // Obtém o valor do atributo href do link clicado e seleciona o elemento com esse id
            const targetElement = document.querySelector(this.getAttribute('href'))
        
            // Realiza a rolagem suave, considerando a altura do navbar (65px)
            window.scrollTo({
                top: targetElement.offsetTop - 65
            })
        })
    })

    const offcanvasElement = document.getElementById('offcanvasNavbar')

    // Cria a instância do Offcanvas (ou obtém a instância existente)
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement)

    // Adiciona o evento de clique diretamente no contêiner pai
    offcanvasElement.addEventListener('click', function(event) {
        // Verifica se o item clicado é um link de navegação
        if (event.target.matches('.navbar-nav .nav-link')) {
            bsOffcanvas.hide()
        }
    })

    // Função para aplicar a máscara de telefone
    function mascaraTelefone(input) {
        let value = input.value.replace(/\D/g, '')
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
        value = value.replace(/(\d{5})(\d)/, '$1-$2')
        input.value = value;
    }

    // Seleciona o campo de telefone e adiciona o ouvinte de evento
    const telefoneInput = document.getElementById('telefone')
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function() {
            mascaraTelefone(this);
        })
    }
})