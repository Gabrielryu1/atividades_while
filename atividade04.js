const ler = require('readline-sync');

let contagemBH = 0;
let contagemforaBH = 0;

for (let i = 0; i < 20; i++) {
    let nome = ler.question(`Digite o nome do usuario ${i + 1}:`);
    let cidade = ler.question(`Digite a cidade natal de ${nome}:`).toLowerCase();

    if (cidade === "bh") {
        contagemBH++;
    } else {
        contagemforaBH++;
    }
}

console.log(`Numero de usuarios que moram em BH: ${contagemBH}`);
console.log(`Numero de usuarios que moram fora de BH: ${contagemforaBH}`);

