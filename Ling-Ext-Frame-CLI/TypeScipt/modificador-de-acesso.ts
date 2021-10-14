// MODIFICADORES DE ACESSO
// Apesar do JavaScript não ter nenhuma forma de privação ou controle de acesso aos itens criados no código.
// No TypeScript é possível definir o acesso como 'readonly'(somente leitura) ou 'private'(acesso privado).

interface Monstro {
    readonly nome: string
    tipo: 'Beasts' | 'Cursed One' | 'Draconids' | 'Elementa' | 'Hybrid' | 'Insectoid' | 'Necrophage' | 'Ogroid' | 'Relict' | 'Specter' | 'Vampire'
    status?: boolean            // o símbolo de interrogação após o atributo ('status?') significa que o item é opcional.
}

class Necrophage implements Monstro {
    nome;
    tipo;

    constructor(nome: any, tipo: any) {
        this.nome = nome;
        this.tipo = tipo;
    }
}

const drowner = new Necrophage('Drowner', 'Necrophage');