// Função tradicional 

function soma(a, b){
    return a + b
}
const somaArrow = (a, b) => a+b;

console.log(soma(3, 4));

console.log(`Function arrow ${somaArrow(3, 4)}`);

function ehPar(numero){
    return numero%2 === 0
}

console.log(ehPar(5));

const ehParArrow = numero => numero % 2 === 0

console.log(ehParArrow(5));

console.log("<---------------------- Calculadora ----------------------->")

function Calculadora(n1, n2, operacao){
    switch(operacao){
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            return "Operação inválida"
    }
}

console.log(Calculadora(10, 5, '+'))
console.log(Calculadora(10, 5, '-'))
console.log(Calculadora(10, 5, '*'))
console.log(Calculadora(10, 5, '/'))
console.log(Calculadora(10, 5, '%'))