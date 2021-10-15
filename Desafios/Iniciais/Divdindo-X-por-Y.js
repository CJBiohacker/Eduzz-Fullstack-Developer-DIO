/*  DIVIDINDO X POR Y
Desafio

Você terá o desafio de escrever um algoritmo que leia 2 números e imprima o resultado da divisão do primeiro pelo segundo. Caso não for possível, mostre a mensagem “divisao impossivel” para os valores em questão.
Entrada

A entrada contém um número inteiro N. Este N será a quantidade de pares de valores inteiros (X e Y) que serão lidos em seguida.
Saída

Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, ou “divisao impossivel” caso não seja possível efetuar o cálculo.
*/

let x = Math.round(Math.random() * 100);
let y = Math.round(Math.random() * 100);
let N = 100;

console.log("Digite quantas divisões serão realizadas:", N);

for (let i = 1; i <= N; i++) {

    console.log("Digite o valor de x. => x = ", x);
    console.log("Digite o valor de y. => y = ", y);

    if (x == 0) {
        console.log("Divisão impossível !!!");
    } else {
        console.log(x / y);

    }
    x = Math.round(Math.random() * 100);
    y = Math.round(Math.random() * 100);

};
