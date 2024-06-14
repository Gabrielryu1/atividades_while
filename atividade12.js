
const alturaInicialjorge = 1.72;
const alturaInicialroberto = 1.65;


const crescimentojorge = 3; 
const crescimentoroberto = 4; 


const crescimentoMetrosjorge = crescimentojorge / 100; 
const crescimentoMetrosroberto = crescimentoroberto / 100; 

let anos = 0;


let alturajorge = alturaInicialjorge;
let alturaroberto = alturaInicialroberto;

while (alturaroberto <= alturajorge) {
    alturajorge += crescimentoMetrosjorge;
    alturaroberto += crescimentoMetrosroberto;
    anos++;
}


console.log(`Serão necessários ${anos} anos para que Roberto seja maior que Jorge.`);
