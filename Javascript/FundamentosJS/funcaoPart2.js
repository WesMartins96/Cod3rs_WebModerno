

// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(2, 5)


// Armazenanso uma funcao arrow em uma variavel
const mult = (a, b) => {
    return a * b;
}
console.log(mult(2, 10));


// Retorno implícito
const sub = (a, b) => a - b;
console.log(sub(20, 2));

const imprimirFrase = a => console.log(a);
imprimirFrase('Testando funções em javascript')


