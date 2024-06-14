const ler = require('readline-sync');

let votoscandidato1 = 0;
let votoscandidato2 = 0;
let votoscandidato3 = 0;
let votosbrancos = 0;
let votosnulos = 0;
let eleitores = 0;

while (true) {
    const voto = ler.questionFloat('Digite o voto (1, 2, 3, 0 para branco, 4 para nulo, -1 para encerrar): ');
    
    if (voto === -1) {
        break; 
    }
    
    switch (voto) {
        case 1:
            votoscandidato1++;
            break;
        case 2:
            votoscandidato2++;
            break;
        case 3:
            votoscandidato3++;
            break;
        case 0:
            votosbrancos++;
            break;
        case 4:
            votosnulos++;
            break;
        default:
            console.log('Voto inválido.');
            break;
    }
    
    eleitores++;
}


let candidatoVencedor = 0;
let maxVotos = Math.max(votoscandidato1, votoscandidato2, votoscandidato3);

if (maxVotos === votoscandidato1) {
    candidatoVencedor = 1;
} else if (maxVotos === votoscandidato2) {
    candidatoVencedor = 2;
} else if (maxVotos === votoscandidato3) {
    candidatoVencedor = 3;
}


console.log(`Número do candidato vencedor: ${candidatoVencedor}`);
console.log(`Número de votos em branco: ${votosBrancos}`);
console.log(`Número de votos nulos: ${votosNulos}`);
console.log(`Número de eleitores que compareceram às urnas: ${eleitores}`);
