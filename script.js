// script.js

// Modo Noturno 
const botaoModoNoturno = document.getElementById('botaoModoNoturno');
botaoModoNoturno.addEventListener('click', () => {
  document.body.classList.toggle('modoNoturno');
});

// Acordeon 
function toggleConteudo(id, elemento) {
  const conteudo = document.getElementById(id);
  const seta = elemento.querySelector('.seta');

  // Alterna classes para abrir/fechar conteúdo e rotacionar seta
  conteudo.classList.toggle('conteudo-fechado');
  conteudo.classList.toggle('conteudo-aberto');
  seta.classList.toggle('rotaciona');
}

// Carrossel 
const carrosselSlide = document.querySelector('.slideCarrossel');
const carrosselItens = document.querySelectorAll('.carrossel-item');
const btnVoltar = document.querySelector('.voltaCarrossel');
const btnAvancar = document.querySelector('.avancaCarrossel');

let indiceAtual = 0;
let larguraSlide = 0;

// Atualiza largura do slide e ajusta posição
function ajustarLarguraSlide() {
  larguraSlide = carrosselItens[0].clientWidth;
  moverSlide();
}

// Move o slide para a posição do índice atual
function moverSlide() {
  carrosselSlide.style.transform = `translateX(${-larguraSlide * indiceAtual}px)`;
}

// Evento para voltar slide
btnVoltar.addEventListener('click', () => {
  if (indiceAtual > 0) {
    indiceAtual--;
    moverSlide();
  }
});

// Evento para avançar slide
btnAvancar.addEventListener('click', () => {
  if (indiceAtual < carrosselItens.length - 1) {
    indiceAtual++;
    moverSlide();
  }
});

// Atualiza tamanho do slide ao carregar e redimensionar janela
window.addEventListener('load', ajustarLarguraSlide);
window.addEventListener('resize', ajustarLarguraSlide);
