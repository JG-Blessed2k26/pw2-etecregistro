// Capturando div
const titulo = window.document.getElementsByTagName('h1')[0];
titulo.innerText = 'Fui Alterado Pelo JavaScript';
titulo.style.color = 'yellow';

const pagina = window.document.body;
pagina.style.backgroundColor = '#2f2f2f';


const caixaMagica = window.document.getElementById('caixamagica');

//Criando uma função para manipular o evento
function entrada() {
    caixaMagica.style.backgroundColor = 'blue';
    caixaMagica.innerText = 'Oi';
}

caixaMagica.addEventListener('mouseenter', entrada);

function saida() {
    caixaMagica.style.backgroundColor = 'red';
    caixaMagica.innerText = 'Tchau';
}

function clicar() {
    caixaMagica.style.backgroundColor = 'yellow';
    caixaMagica.innerText = 'Clicou';
}
// Escutando um evento
caixaMagica.addEventListener('mouseout', saida);
caixaMagica.addEventListener('click', clicar);