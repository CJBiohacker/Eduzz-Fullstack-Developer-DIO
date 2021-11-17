// Apesar de serem constantes. No JavaScript é possível, 'burlar' o conceito de imutabilidade em objetos e arrays.
const x = { nome: "CJ" };
const y = x;

console.log("x =>", x);
console.log("y =>", y);

y.nome = 'Carlos';

console.log(x === y);

console.log("x =>", x);
console.log("y =>", y);


const a = ["C", "J"];
const b = a;

console.log(a);
console.log(b);

b[1] = "T";

console.log(b);

// // Aplicando a biblioteca Immutable.js para a "correção"

// const ObjetoImutavel = Immutable.Record({ nome: null });

// const t = new ObjetoImutavel({ nome: "Carlos" });
// const u = t.set('nome', 'CJ');
// const v = t.set('nome', 'C J');

// console.log(t === u);
// console.log(t === v);