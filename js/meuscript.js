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
