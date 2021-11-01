/* FOLHA DE PAGAMENTO

Desafio

Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, porém temos apenas a quantidade de horas trabalhadas e o valor hora. Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse colaborador. Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.
Entrada

Você receverá 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada.
Saída

Exiba o número e o salário do colaborador, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.

*/

let idFunc = Math.floor(Math.random() * 50);
let horasTrab = Math.floor(Math.random() * 160);
let valorHoraTrab = (Math.random() * 250).toFixed(2);
let salario = horasTrab * valorHoraTrab; // Digite aqui o calculo do salário

console.log(`NUMBER = ${idFunc}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);