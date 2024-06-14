const ler = require('readline-sync');

let numeros = [];
for (let i = 0; i < 10; i++) {
    let num = ler.questionInt(`Digite o numero ${i + 1}: `);
    numeros.push(num);
}

numeros.forEach(num => {
    if (num > 5) {
        console.log("Seu numero e maior que 5");
    } else {
        console.log("Seu numero e menor ou igual a 5");
    }
});
