// Pede o nome do usuário
const nome = window.prompt("Qual seu nome?");
// Mostra o nome e conta quantas letras ele possui
document.write(`Olá <strong>${nome}</strong>, seu nome tem <strong>${nome.length}</strong> letras.<br>`);
// Converte o nome para letras MAIÚSCULAS
document.write(`Seu nome em maiúsculas fica assim: <strong>${nome.toUpperCase()}</strong>.<br>`);
// Converte o nome para letras minúsculas
document.write(`Seu nome em minúsculas fica assim: <strong>${nome.toLowerCase()}</strong>.<br>`);
// Pede o salário e transforma o valor digitado em número
const salario = Number(window.prompt("Digite seu salário:"));
// Formata o salário colocando 2 casas decimais
document.write(`Seu salário com casas decimais é: <strong>${salario.toFixed(2)}</strong>.<br>`);
// Troca o ponto das casas decimais por vírgula
document.write(`Seu salário com vírgula nas casas decimais é: <strong>${salario.toFixed(2).replace(".", ",")}</strong>.<br>`);
// Formata o salário como moeda brasileira (Real - R$)
document.write(`Seu salário em real: <strong>${salario.toLocaleString("pt-BR", {style: "currency",currency: "BRL"})}</strong>.<br>`);
//Converte o salário para dólar americano (USD)
document.write(`Seu salário em dólar: <strong>${salario.toLocaleString("en-US", {style: "currency",currency: "USD"})}</strong>.<br>`);
//Converte o salário para euro (EUR)
document.write(`Seu salário em euro: <strong>${salario.toLocaleString("de-DE", {style: "currency",currency: "EUR"})}</strong>.<br>`);