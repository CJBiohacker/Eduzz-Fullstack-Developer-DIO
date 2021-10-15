// OMIT
// O comando 'Omit' é utilizado para omitir/exclui algum atributo de uma interface ou subinterface.

interface Profissao {
    nome: string;
    tipo: 'Coleta' | 'Produção' | 'Serviço';
    nivel: string;
}

// Omissão do atributo 'nivel' da interface 'Profissao'.
interface Engenharia extends Omit<Profissao, 'nivel'> {
}

const engine: Engenharia = {
    nome: 'Engenharia',
    tipo: "Produção"
} 