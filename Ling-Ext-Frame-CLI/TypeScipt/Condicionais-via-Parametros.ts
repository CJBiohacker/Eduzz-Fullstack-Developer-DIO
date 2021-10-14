// Criação de uma Interface Geral

interface classeRPG {
    nome: string;
    nivel: number;
}

// SubInterface Aprendiz de classeRPG 
interface Aprendiz extends classeRPG {
    habilidades?: string
}

// SubInterface Bruxo de Aprendiz
interface Bruxo extends Aprendiz {
    classeSpec: 'Lobo' | 'Víbora' | 'Grifo' | 'Gato' | 'Urso' | 'Mantícora';
    habilidades?: 'Treino Básico' | 'Treino Intermediário' | 'Treino Avançado' | 'Treino Mestre';
    habilidadeSpec: 'Alquimia' | 'Esgrima' | 'Magia';
}

let Geralt: Bruxo = {
    nome: 'Geralt of Rivia',
    nivel: 30,
    classeSpec: "Lobo",
    habilidades: "Treino Avançado",
    habilidadeSpec: 'Alquimia'
}

let Ciri: Aprendiz = {
    nome: "Cirilla Fiona Elen Riannon",
    nivel: 6,
    habilidades: 'Sobrevivência'
}

// Função Condicional de nível.
function evoluirClasse(personagem: Aprendiz | Bruxo) {

    if (personagem.nivel > 10) {
        console.log(`Personagem: ${personagem.nome} Nível atual ${personagem.nivel}`);
        console.log(`Você é um bruxo(a) experiente e bem treinado(a).`);
    } else {
        console.log(`Personagem: ${personagem.nome} Nível atual ${personagem.nivel}`);
        console.log(`Você é apenas um(a) novato(a) e precisa de treinamento.`);

        for (let level = personagem.nivel; level <= 10; level++) {
            console.log(`Aplicando o treino.....`);
            console.log(`Nível: ${level}`);
            personagem.nivel = level;
        }
    }
}

evoluirClasse(Ciri)

console.log(`Nível do Geralt ${Geralt.nivel}`);
console.log(`Nível da Ciri ${Ciri.nivel}`);
