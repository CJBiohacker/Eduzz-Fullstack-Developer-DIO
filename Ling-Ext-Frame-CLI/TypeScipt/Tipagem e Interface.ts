// CONCEITOS BÁSICOS DE TYPESCRIPT
alert('Pressione F12 e verifique a lista do Console do navegador.')
console.log('Introdução ao TypeScript');

function soma(a, b: number) {                           // Tipagem de variável/constante. Característica específica do TypeScript.
    let sum = (a + b);
    return console.log(`Soma ${a} + ${b} = ${sum}`);
}

soma(2, 12); // Parâmetros válidos para a função. Sendo 2 números, conforme o tipado na declaração da função.

// soma('a', 'b'); // ERRO ESPERADO: "O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'."


// INTERFACES
// Nas versões mais atualizadas do JavaScript, não é possível a criação de interface com os 'protótipos' nativos da linguagem. Essa é outra funcionalidade adicionada pelo TypeScript ao JS.
// A declaração de interface é outra forma de nomear um tipo de objeto. O TypeScript somente se "preocupa" com a estrutura do valor passado, ou seja, se tem/recebe as propriedades esperadas (que foram declaradas).
// A interface é semelhante ao 'Type Alias', porém somente a Interface pode ser modificada após criada. E o 'Type Alias', possui método de declaração via atribuição.

// Criação da interface e declaração de cada atributo/característica. ( '|' = OR  '&' = AND )
interface Monstro {
    nome: string
    tipo: 'Beasts' | 'Cursed One' | 'Draconids' | 'Elementa' | 'Hybrid' | 'Insectoid' | 'Necrophage' | 'Ogroid' | 'Relict' | 'Specter' | 'Vampire'
    status: boolean     // true = vivo , false = morto
}

// Interface 'Hybrid' que é estendida da geral 'Monstro'
interface Hybrid extends Monstro {
    inteligencia: 'Senciente' | 'Instintivo';
    tipo: 'Hybrid'
}

// Atribuição da interface 'Monstro' à uma variável/constante.    
const succubus: Monstro = {
    nome: 'Succubus',
    tipo: "Hybrid",
    status: true
}

console.log(`Nome: ${succubus.nome} - Tipo: ${succubus.tipo}`);

// Adicionando uma função/método dentro da interface estendida 'Hybrid'.
interface Hybrid extends Monstro {
    seduzirOponente(action: boolean): void;
    restaurarMana(pontosMana: number): void;
}

// Atribuição da interface estendida 'Hybrid' à uma variável/constante. (Incluindo a característica/atributo 'inteligencia')
const succubi: Hybrid = {
    nome: 'Salma the Succubus',
    tipo: 'Hybrid',
    status: true,
    inteligencia: 'Senciente',
    seduzirOponente(action) {           // Função clássica do JS.
        return action;
    },
    restaurarMana: (pontosMana) => (`${pontosMana} pontos`)         // Arrow Function ES6+.
}

console.log(`Nome: ${succubi.nome} 
Tipo: ${succubi.tipo}
Inteligência: ${succubi.inteligencia}
Status: ${succubi.status}
Seduzir: ${succubi.seduzirOponente(true)}
Restaurar Mana: ${succubi.restaurarMana(15)}`);


// TYPE ALIAS
// Conforme dito acima, o 'type' funciona de forma parecida com a interface, mas com a limitação de não sofrer alteração nos seus atributos/características.

// Declaração de um type.
type Pessoa = {
    nome: string;
    cor: string;
    altura: number;
    peso: number;
}

// Exemplo de aplicação de type. (Relação entre interfaces)
interface Humano {
    nome: string;
    cor: string;
    altura: number;
    peso: number;
}

interface HomoSapiens extends Humano {
    inteligencia: 'Baixa' | 'Média' | 'Avançada'
    postura: 'Ereta'
}

interface Sahelanthropus extends Humano {
    mobilidade: 'Quadrúpede' | 'Bípede'
}

// Type de relação entre as 2 interfaces. ('LEFT OU RIGHT JOIN')
type SubFamiliaHumano = HomoSapiens | Sahelanthropus;

const humano: SubFamiliaHumano = {
    nome: 'Jan-Michael Vincent',
    cor: 'Branco',
    altura: 1.79,
    peso: 75,
    mobilidade: 'Bípede',
}

console.log(`Nome: ${humano.nome} 
Cor: ${humano.cor}
Altura: ${humano.altura}m
Peso: ${humano.peso}kg
Mobilidade: ${humano.mobilidade}`);

// Type de relação entre as 2 interfaces. ('UNION JOIN')
type SubFamiliaHumanoHibrida = HomoSapiens & Sahelanthropus;

const humanoideHibrido: SubFamiliaHumanoHibrida = {
    nome: 'Morty Smith',
    cor: 'Branco',
    altura: 1.60,
    peso: 54,
    mobilidade: 'Bípede',
    inteligencia: "Média",
    postura: "Ereta"
}

console.log(`Nome: ${humanoideHibrido.nome} 
Cor: ${humanoideHibrido.cor}
Altura: ${humanoideHibrido.altura}m
Peso: ${humanoideHibrido.peso}kg
Inteligência: ${humanoideHibrido.inteligencia}
Mobilidade: ${humanoideHibrido.mobilidade}
Postura: ${humanoideHibrido.postura}`);