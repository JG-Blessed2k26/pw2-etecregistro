const nome = window.prompt("Qual seu nome?");

const anoNascimento = Number(window.prompt("Qual seu ano de nascimento?"));

const cidade = window.prompt("Qual sua cidade?");

const salario = Number(window.prompt("Digite seu salário:"));

const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;

document.write(`Seu nome em maiúsculas: <strong>${nome.toUpperCase()}</strong>.<br>`);

document.write(`Sua idade: <strong>${idade} anos</strong>.<br>`);

document.write(`Sua cidade em maiúsculas: <strong>${cidade.toUpperCase()}</strong>.<br>`);

document.write(`Sua cidade possui <strong>${cidade.length}</strong> caracteres.<br>`);

document.write(`Seu salário em real: <strong>${salario.toLocaleString("pt-BR", {style: "currency",currency: "BRL"})}</strong>.<br>`);

const salarioDolar = salario / 5.22;

document.write(`Seu salário em dólar: <strong>${salarioDolar.toLocaleString("en-US", {style: "currency",currency: "USD"})}</strong>.<br>`);

const salarioEuro = salario / 6.05;

document.write(`Seu salário em euro: <strong>${salarioEuro.toLocaleString("de-DE", {style: "currency",currency: "EUR"})}</strong>.<br>`);