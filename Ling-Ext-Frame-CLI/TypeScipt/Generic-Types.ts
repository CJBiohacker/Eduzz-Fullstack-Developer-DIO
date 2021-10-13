// GENERIC TYPES
// Quando você declara um argumento de uma função sem especificar/tipificar ou "tipar" ela, o TypeScript automaticamente associa seu tipo à 'any' ou 'qualquer tipo'.
// Sendo o 'any' um tipo especial, que você pode usar quando você não quer um valor particular causando erros de checagem de tipo.
// Basicamente, 'any' é útil quando você não quer escrever um tipo longo para convencer o TypeScript que uma linha de código está correta.

// Apesar de não declarar como number, o TypeScript julga que a variável é uma array do tipo number, por causa dos seus elementos.
let vetor: any = [1, 3, 7, 12, 22, 39];

let arraySomaValor = (array, incremento) => {
    return array.map(item => incremento + item);
}

console.log(arraySomaValor(vetor, 3));

// É possível mudar esse panorama adicionando o tipo 'any' nos argumentos de função. Ou utilizar um nome qualquer entre tags. Ex.: <Type>, <T>, <QualquerCoisa>, etc.
// Lembrando que o ideal é que não se repitam os tipos genéricos customizados durante operações aritméticas. (Com exceção do 'any' que é um tipo genérico primitivo do TypeScript).

function arraySomaValorAny<QualquerCoisa>(array: any[], incremento: QualquerCoisa) {
    return array.map(item => incremento + item);
};

// vetor = ['CJ', true, 2, 3, NaN]; // => Tentando inserir outros tipos de dados, na array ocorre um erro, pois o TypeScript já havia 'tipado' automaticamente, a variável vetor como number.
// vetor:any = ['CJ', true, 2, 3, NaN]; // => Outro caso de erro, pois a variável vetor já havia sido declarada acima como number, devido a inserção de uma array somente de números.
// O correto é redefinir o tipo na hora da declaração da variável/constante.

vetor = ['CJ', true, 2, 3, NaN, undefined, null];

console.log(arraySomaValorAny(vetor, 2));
console.log(arraySomaValorAny(vetor, NaN));
console.log(arraySomaValorAny(vetor, `OK`));
console.log(arraySomaValorAny(vetor, false));
console.log(arraySomaValorAny(vetor, true));