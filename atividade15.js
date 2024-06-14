const ler = require('readline-sync');


let numero = ler.questionInt('Digite um numero inteiro positivo: ');

if (numero > 0) {
    console.log(`Os divisores de ${numero} são:`);
    for (let x = 1; x <= numero; x++) {
        if (numero % x === 0) {
            console.log(x);
        }
    }
} else {
    console.error('Por favor, digite um numero inteiro positivo válido.');
}
