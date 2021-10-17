// Relação entre número e cor.
// 1 = verde , 2 = vermelho , 3 = azul , 4 = amarelo

let ordem = [];                 // Array com a sequência de desafio do jogo.
let ordemClicada = [];          // Array com a sequência jogada pelo usuário.
let pontuacao;                  // Contagem de pontos do usuário

// Método DOM pra 'chamada' dos 'botões' de cada cor do jogo.
const verde = document.querySelector('.green');
const vermelho = document.querySelector('.red');
const azul = document.querySelector('.blue');
const amarelo = document.querySelector('.yellow');

// Função que randomiza uma ordem de cores como desafio do jogo.
let randomizarOrdem = () => {
    let ordemCor = Math.ceil(Math.random() * 4);                // Randomiza um nº de 1-4. (relacionado às cores)
    ordem[ordem.length] = ordemCor;                             // Atribui o nº sorteado à extensão atual da array.
    ordemClicada = [];                                          // Atribui a sequência clicada à vazio, caso tenha alguma sequência anterior armazenada.

    for (let i in ordem) {
        let corElemento = criarCorElemento(ordem[i]);
        iluminarCor(corElemento, Number(i) + 1);
    }
}

// Contador de tempo pra iluminar e apagar a cor.
let iluminarCor = (elemento, numero) => {
    tempo = tempo * 500;
    setTimeout(() => {
        elemento.classList.add('selected');
    }, tempo - 150);
    setTimeout(() => {
        elemento.classList.remove('selected');
    });
};

// Estrutura de repetição que compara cada posição clicada com a sequência de desafio.
let checaOrdem = () => {
    for (let i in ordemClicada) {
        if (ordemClicada[i] !== ordem[i]) {
            derrota();
            break;
        }
    }
    if (ordemClicada.length === ordem) {
        alert(`Você acertou a sequência\nPontuação atual: ${pontuacao}`)
        proximoNivel();
    }

};

// Função de clique do Usuário
let clicar = (cor) => {
    ordemClicada[ordemClicada.length] = cor;
    elementoCor(cor).classList.add('selected');
};