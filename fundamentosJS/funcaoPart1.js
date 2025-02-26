

// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);

}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN


// função com retorno
function soma(a, b = 100) {
    return a + b;
}

console.log(soma(98));
console.log(soma(98, 10)); // sobescreveu o valor de b
