// Função tradicional 

function soma(a, b){
    return a + b
}
const somaArrow = (a, b) => a+b;

console.log(soma(3, 4));

console.log(`Function arrow ${somaArrow(3, 4)}`);

function ehPar(numero){
    return numero%2 == 0
}

console.log(ehPar(5));
console.log(`ehPar? ${ehPar(5)}`);
