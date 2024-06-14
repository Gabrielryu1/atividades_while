const ler = require('readline-sync');


const n = ler.questionFloat('Digite quantos numeros deseja processar: ');

for (let i = 0; i < n; i++) {

    const numero = ler.questionFloat('Digite um numero para calcular o fatorial: ');


    let fatorial = 1;
    for (let x = 2; x <= numero; x++) {
        fatorial *= x;
    }

    console.log(`Valor: ${numero} - Fatorial: ${fatorial}`);
}
