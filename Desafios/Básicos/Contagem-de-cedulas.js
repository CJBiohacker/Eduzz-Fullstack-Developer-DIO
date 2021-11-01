/* CONTAGEM DE CÉDULAS

Desafio

Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.
Entrada

Você receberá um valor inteiro N (0 < N < 1000000).
Saída

Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

*/

let valor = Math.floor(Math.random() * 1000);
let x = valor;

// Math.floor ==> Arredonda pro número inteiro inferior mais próximo. Utilizado pra alcançar o número exato de notas de cada valor.
let notas100 = Math.floor(x / 100);
let a = (valor - (notas100 * 100));
let notas50 = Math.floor(a / 50);
let b = (a - (notas50 * 50));
let notas20 = Math.floor(b / 20);
let c = (b - (notas20 * 20));
let notas10 = Math.floor(c / 10);
let d = (c - (notas10 * 10));
let notas5 = Math.floor(d / 5);
let e = (d - (notas5 * 5));
let notas2 = Math.floor(e / 2);
let f = (e - (notas2 * 2));
let notas1 = Math.floor(f);

// Sistem de contagem baseado em condicionais. Hipótese de que o nº seja R$576,00.
// Estrutura Condicional Ternária
(valor >= 100) ? notas100 : (a >= 50) ? notas50 : (b >= 20) ? notas20 :
    (c >= 10) ? notas10 : (d >= 5) ? notas5 : (e >= 2) ? notas2 : notas1;

console.log(valor);
console.log(`${notas100} nota(s) de R$ 100,00`);
console.log(`${notas50} nota(s) de R$ 50,00`);
console.log(`${notas20} nota(s) de R$ 20,00`);
console.log(`${notas10} nota(s) de R$ 10,00`);
console.log(`${notas5} nota(s) de R$ 5,00`);
console.log(`${notas2} nota(s) de R$ 2,00`);
console.log(`${notas1} nota(s) de R$ 1,00`);



// Estrutura Condicional Tradicional (Opcional)
// if (valor >= 100) {                    // 576 >= 100 ==> TRUE
//     notas100                           // 576/100 = 5,76 ==> arredondando pra 5
// } else {
//     if (a >= 50) {                     // 76 >= 50  ==> TRUE
//         notas50                        // 76/50 = 1,52 ==> arredondando pra 1
//     } else {
//         if (b >= 20) {                 // 26 >= 20 ==> TRUE
//             notas20                    // 26/20 = 2,6 ==> arredondando pra 2
//         } else {
//             if (c >= 10) {             // 6 >= 10 ==> FALSE
//                 notas10                // 6/10 = 0,6 ==> arredondando pra 2
//             } else {
//                 if (d >= 5) {          // 6 >= 5 ==> TRUE
//                     notas5             // 6/5 = 1,2 ==> arredondando pra 1
//                 } else {
//                     if (e >= 2) {      // 1 >= 2 ==> FALSE
//                         notas2         //
//                     } else {
//                         if (f >= 1) {  // 1 >= 1 
//                             notas1     //
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };