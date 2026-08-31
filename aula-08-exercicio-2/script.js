// ------------------------------------------------------
// Exercício 1
// Selecione o elemento com id "titulo" e:
// - altere o texto para "Título Alterado"
// - mude a cor do texto para azul
// ------------------------------------------------------
const titulo = window.document.getElementById('titulo');

titulo.innerText = 'Título Alterado';
titulo.style.color = 'blue';
// ------------------------------------------------------

// Exercício 2
// Selecione TODOS os elementos com a classe "paragrafo"
// e mude a cor de fundo (background-color) de todos eles para amarelo.
// ------------------------------------------------------
const paragrafos = window.document.getElementsByClassName('paragrafo');

for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].style.backgroundColor = 'yellow';
}
// ------------------------------------------------------
// Exercício 3
// Selecione o elemento com id "caixa" e adicione um evento
// de "mouseover" (quando o mouse passar por cima) que:
// - altere o innerText para "Você passou o mouse aqui!"
// - mude a borda (border) para "3px solid red"
// - mude o tamanho da fonte (fontSize) para "20px"
// ------------------------------------------------------
const caixa = window.document.getElementById('caixa');

function passarMouse() {
    caixa.innerText = 'Você passou o mouse aqui!';
    caixa.style.border = '3px solid red';
    caixa.style.fontSize = '20px';
}
caixa.addEventListener('mouseover', passarMouse);
// ------------------------------------------------------
// Exercício 4
// Selecione o item da lista com id "item2"
// e mude seu texto para "Item alterado"
// ------------------------------------------------------
const item2 = window.document.getElementById('item2');

item2.innerText = 'Item alterado';
// ------------------------------------------------------
// Exercício 5
// Selecione o botão com id "botao" e adicione um evento
// de "click" que:
// - altere o texto do botão para "Você clicou!"
// - mude a cor de fundo para verde
// - mude a cor do texto para branco
// ------------------------------------------------------
const botao = window.document.getElementById('botao');

function clicar() {
    botao.innerText = 'Você clicou!';
    botao.style.backgroundColor = 'green';
    botao.style.color = 'white';
}

botao.addEventListener('click', clicar);
//-------------------------------------------------------
