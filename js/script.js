function menuOnClick() {
    document.getElementById("menuBar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menuBg").classList.toggle("changeBg");
}



const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'left', 'right', 'prev-left', 'next-right');
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add('right');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('left');
        } else if (index === (currentIndex + 2) % cards.length) {
            card.classList.add('next-right');
        } else if (index === (currentIndex - 2 + cards.length) % cards.length) {
            card.classList.add('prev-left');
        }
    });
}

function rotateCards() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
}

updateCards();
setInterval(rotateCards, 4000);

// Seleciona todos os botões de abas
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe active de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Adiciona a classe active ao botão clicado
            button.classList.add('active');

            // Exibe o conteúdo da aba correspondente
            const targetTab = document.querySelector(`#${button.dataset.tab}`);
            targetTab.classList.add('active');
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-item');
    const tabContent = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remover a classe 'active' de todos os botões de tab
            tabs.forEach(t => t.classList.remove('active'));

            // Adicionar a classe 'active' ao botão clicado
            tab.classList.add('active');

            // Remover a classe 'active' de todos os conteúdos das abas
            tabContent.forEach(content => content.classList.remove('active'));

            // Mostrar o conteúdo da aba correspondente ao botão clicado
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});