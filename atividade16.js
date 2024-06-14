const ler = require('readline-sync');

let frase = ler.question('Digite uma frase: ');

const vogais = 'AEIOU';

let contadorvogais = 0;

for (let caracter of frase.toUpperCase()) {
    if (vogais.includes(caracter)) {
        contadorvogais++;
    }
}

console.log(`A frase "${frase}" possui ${contadorvogais} vogais.`);
