const vermelho = window.document.getElementById('vermelho');
const amarelo = window.document.getElementById('amarelo');
const verde = window.document.getElementById('verde');

const botaoVermelho = window.document.getElementById('botaoVermelho');
const botaoAmarelo = window.document.getElementById('botaoAmarelo');
const botaoVerde = window.document.getElementById('botaoVerde');


function acenderVermelho() {
    vermelho.style.backgroundColor = 'red';
    amarelo.style.backgroundColor = 'gray';
    verde.style.backgroundColor = 'gray';
}

function acenderAmarelo() {
    vermelho.style.backgroundColor = 'gray';
    amarelo.style.backgroundColor = 'yellow';
    verde.style.backgroundColor = 'gray';
}

function acenderVerde() {
    vermelho.style.backgroundColor = 'gray';
    amarelo.style.backgroundColor = 'gray';
    verde.style.backgroundColor = 'green';
}

botaoVermelho.addEventListener('click', acenderVermelho);
botaoAmarelo.addEventListener('click', acenderAmarelo);
botaoVerde.addEventListener('click', acenderVerde);
