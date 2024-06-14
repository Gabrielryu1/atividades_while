const ler = require('readline-sync');

let soma = 0;

for (let i = 0; i < 18; i++) {
    let numero = ler.questionFloat(`Digite o numero ${i + 1}: `);
    soma += numero;
}


if (soma > 500) {
    soma -= 100;
}

console.log(`A soma dos numeros e: ${soma}`);
