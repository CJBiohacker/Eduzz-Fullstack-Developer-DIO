let ordem = [];                 // Array com a sequência de desafio do jogo.
let ordemClicada = [];          // Array com a sequência jogada pelo usuário.
let pontuacao = 0;                  // Contagem de pontos do usuário

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
    numero = numero * 500;
    setTimeout(() => {
        elemento.classList.add('selected');
    }, numero - 250);
    setTimeout(() => {
        elemento.classList.remove('selected');
    });
};


// Estrutura de repetição que compara cada posição clicada com a sequência de desafio.
let checaOrdem = () => {
    for (let i in ordemClicada) {
        if (ordemClicada[i] != ordem[i]) {
            derrota();
            break;
        }
    }
    if (ordemClicada.length == ordem.length) {
        alert(`Você acertou a sequência!!!\nPontuação atual: ${pontuacao}`)
        proximoNivel();
    }
};

// Função de clique do Usuário
let clicar = (cor) => {
    ordemClicada[ordemClicada.length] = cor;
    criarCorElemento(cor).classList.add('selected');

    setTimeout(() => {
        criarCorElemento(cor).classList.remove('selected');
        checaOrdem();
    }, 250);

};

// Função condicional que retorna as cores (relação de número e cor). - [1 = verde , 2 = vermelho , 3 = azul , 4 = amarelo]
let criarCorElemento = (cor) => {
    if (cor == 1) {
        return verde;
    } else if (cor == 2) {
        return vermelho;
    } else if (cor == 3) {
        return azul;
    } else if (cor == 4) {
        return amarelo;
    }
}

// Função que passa pro próximo nível do jogo.
let proximoNivel = () => {
    pontuacao++;
    randomizarOrdem();
}

// Função de Fim de Jogo (Game Over).
let fimDeJogo = () => {
    alert(`ERRRROOOOUUUUU!!!\nPontuação final: ${pontuacao}`);
    ordem = [];
    ordemClicada = [];

    jogarJogo();
};

// Função pra iniciar um novo jogo.
let jogarJogo = () => {
    alert("Uma sequência aleatória das cores será gerada ! Seu objetivo é repetir a sequência! Preparado para o desafio ?!?!");
    pontuacao = 0;

    proximoNivel();
};

// Eventos de clique para cada cor.
verde.onclick = () => clicar(1);
vermelho.onclick = () => clicar(2);
azul.onclick = () => clicar(3);
amarelo.onclick = () => clicar(4);

jogarJogo();