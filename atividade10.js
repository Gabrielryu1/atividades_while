const ler = require('readline-sync');

let somanegativos = 0;

while (true) {
    const numero = ler.questionFloat('Digite um numero (0 para encerrar): ');
    
    if (numero === 0) {
        break; 
    }
    
    if (numero < 0) {
        somanegativos += numero; 
    }
}

console.log(`O somatório dos numeros negativos é: ${somanegativos}`);
