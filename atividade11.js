const ler = require('readline-sync');

let somapares = 0;
let countpares = 0;

while (true) {
    const numero = ler.questionFloat('Digite um número (0 para encerrar): ');
    
    if (numero === 0) {
        break; 
    
    if (numero % 2 === 0) {
        somapares += numero; 
        countpares++; 
    }
}

if (countPares > 0) {
    const mediaPares = somapares / countpares;
    console.log(`A média dos números pares digitados é: ${mediaPares.toFixed(2)}`);
} else {
    console.log('Nenhum número par foi digitado.');
}}
