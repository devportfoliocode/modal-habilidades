function mostrar(habilidade) {
    const boxModal = document.querySelector('.habilidades-modal')

    const habilidades = {
        html: 'HTML é uma linguagem de marcação usada para criar páginas da web. Na qual é usado tags para estruturar o conteúdo.',
        css: 'CSS é uma linguagem usada para estilizar a apresentação de páginas da web, definindo o design, layout e aparência visual dos elementos HTML.',
        js: 'JavaScript é uma linguagem de programação, amplamente usada para criar interatividade em páginas da web, permitindo manipulação dinâmica de conteúdo e comportamento dos elementos da página.',
        tailwind: 'Tailwind CSS é um framework de CSS utilitário que permite a construção de interfaces web de forma eficiente, usando classes predefinidas para estilização.',
        sass: 'Sass é uma linguagem de estilo (CSS preprocessor) que estende a sintaxe do CSS, permitindo o uso de funções e aninhamento para facilitar a escrita e organização do código CSS.',
        bootstrap: 'Bootstrap é um framework que facilita a criação de sites e aplicações web responsivos e modernos. Oferece uma coleção de ferramentas CSS, JavaScript e componentes pré-estilizados que ajudam a padronizar o design e o desenvolvimento de interfaces.',
        git: 'Git é um sistema de controle de versão que registra alterações em arquivos, facilitando o gerenciamento do histórico de um projeto de software.',
        react: 'React é uma biblioteca JavaScript para construir interfaces de usuário. Baseia-se em componentes reutilizáveis e utiliza um Virtual DOM para otimizar as atualizações de UI, sendo popular em aplicações web dinâmicas.',
        vue: 'Vue.js é um framework JavaScript para a construção de interfaces de usuário. É conhecido por sua simplicidade e flexibilidade, permitindo a criação de componentes reativos e sendo fácil de integrar em projetos existentes.'
    }

    const conteudo = habilidades[habilidade]

    if (boxModal.classList.contains('habilidades-modal-fechar')) {
        boxModal.classList.remove('habilidades-modal-fechar')
    }

    mostrarConteudo()

    
    function mostrarConteudo() {
        const divConteudo = `
            <img class="habilidades-modal-btn" src="img/fechar.svg" alt="Botão de fechar modal de habilidade">
            <p class="habilidades-modal-texto">${conteudo}</p>
        `

       boxModal.innerHTML = divConteudo

        fecharHabilidade()
    }


    function fecharHabilidade() {
        const btnFechar = document.querySelector('.habilidades-modal-btn')

        btnFechar.addEventListener('click', esconder)

        function esconder() {
            boxModal.classList.add('habilidades-modal-fechar')
        }
    }
}