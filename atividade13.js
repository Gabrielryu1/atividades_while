
let linhas = 9;


for (let i = 1; i <= linhas; i++) {
    let linha = '';
    for (let x = 1; x <= i; x++) {
        linha += '*';
    }
    console.log(linha);
}
