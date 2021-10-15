/* QUANTA MANDIOCA ?
Os meses de Junho e Julho são tradicionalmente conhecidos por todo Brasil por suas festas típicas, e para o grupo de amigos da Marlene não é diferente, toda segunda quinzena do mês de Julho ela e seus amigos se reunem para tradicional mandiocada! Na festiva sempre se reúnem na casa da Marlene, o Chico, o Beto, o Bernardo, a Marina e a Iara. E como não poderia ser diferente o prato principal dessa reunião é a mandioca. Cada um deles come de uma a dez porções de mandioca e eles sempre avisam a Marlene com antecedência a respeito de quantas porções irão comer nesse dia. O tamanho da porção de cada um é diferente, mas sempre são os mesmos. As porções são as seguintes (em gramas):
    O Chico come 300
    O Bento come 1500
    O Bernardo come 600
    A Marina 1000
    A Iara come 150
Marlene por sua vez sempre come 225 gramas de mandioca. Cansada de todo ano ter que calcular quanta mandioca preparar ela te desafiou para escrever um programa que informe quanta mandioca deve ser preparada em gramas.
A entrada consiste de 5 inteiros cada um representando as porções que os convidados de dona Chica vão consumir. O primeiro inteiro representa as porções do Chico, o segundo do Bento, o terceiro do Bernardo, o quarto da Marina e o quinto a da Iara.
A saída consiste de um único inteiro que representa quanta mandioca Marlene deve preparar em gramas.
*/

let porcao = Math.floor(Math.random() * 5)                          // Gera um nº aleatório de 0 à 5, com arredondamento pra cima.

let chico = 300 * Math.floor(Math.random() * porcao);               // Multiplica o peso de cada porção pré-definido pela quantidade da porção. Também com arredondamento pra cima.
let bento = 1500 * Math.floor(Math.random() * porcao);
let bernardo = 600 * Math.floor(Math.random() * porcao);
let marina = 1000 * Math.floor(Math.random() * porcao);
let iara = 150 * Math.floor(Math.random() * porcao);
let marlene = 225;

let convidados = [chico, bento, bernardo, marina, iara, marlene];   // Lança todas informações num array.

let somaConvidado = (convidado1, convidado2) => {                   // Arrow function que retorna a soma entre 2 convidados.
    return convidado1 + convidado2
};

const mandiocaTotal = convidados.reduce(somaConvidado);             // Aplicando o método reduce, recebendo a função soma como argumento. Assim o método soma todos convidados e reduz a um único valor.

console.log(convidados);                                            // Imprime o valor gerado de cada convidado.
console.log(mandiocaTotal, " gramas");                              // Imprime a soma total do peso consumido de mandioca.