const ler = require('readline-sync');

let somaIdades = 0;
let contador = 0;
let idade;

console.log("Digite as idades separadas por enter. Digite -1 para terminar.");

do {
    idade = ler.questionInt("Digite uma idade (ou -1 para terminar): ");
    if (idade >= 0) {
        somaIdades += idade;
        contador++;
    }
} while (idade >= 0);

if (contador > 0) {
    const media = somaIdades / contador;
    console.log(`A media das idades digitadas e: ${media.toFixed(2)}`);
} else {
    console.log("Nenhuma idade valida foi digitada.");
}
