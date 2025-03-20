function menuOnClick() {
    document.getElementById("menuBar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menuBg").classList.toggle("changeBg");
  }


// // Seleciona os elementos necessários
// const hamburger = document.querySelector('.hamburger');
// const navBar = document.querySelector('.navBar');
// const navLinks = document.querySelectorAll('.navBar li a');

// // Alterna o menu ao clicar no botão hambúrguer
// hamburger.addEventListener('click', () => {
//     navBar.classList.toggle('active');
// });

// // Fecha o menu ao clicar em qualquer link dentro dele
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         navBar.classList.remove('active');
//     });
// });
