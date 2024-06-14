const ler = require('readline-sync');

let totalusuarios = 0;
let totalhomens = 0;
let totalmulheres = 0;

console.log("Digite o nome e sexo do usuário (M para masculino, F para feminino).");
console.log("Digite 0 para encerrar a entrada de dados.");

while (true) {
    let nome = ler.question("Nome do usuário: ");
    if (nome === '0') {
        break;
    }
    
    let sexo = ler.question("Sexo do usuário (M/F): ");
    if (sexo.toUpperCase() === 'M') {
        totalHomens++;
    } else if (sexo.toUpperCase() === 'F') {
        totalMulheres++;
    } else {
        console.log("Sexo inválido. Digite M para masculino ou F para feminino.");
        continue;
    }
    
    totalusuarios++;
}

if (totalusuarios > 0) {
    let percentualhomens = (totalhomens / totalusuarios) * 100;
    let percentualmulheres = (totalmulheres / totalusuarios) * 100;
    
    console.log(`Total de usuários: ${totalusuarios}`);
    console.log(`Porcentagem de homens: ${percentualhomens.toFixed(2)}%`);
    console.log(`Porcentagem de mulheres: ${percentualmulheres.toFixed(2)}%`);
} else {
    console.log("Nenhum usuário foi informado.");
}
