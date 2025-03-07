


const soma = function (x, y) {
    return x + y;
}

const imprimirResult = function (a, b, op = soma) {
    console.log(op(a, b));
}

// Exemplos com funções anônimas
imprimirResult(3, 4)

imprimirResult(3, 4, function (x, y) {
    return x - y;
})

imprimirResult(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Olá');
    }
}

pessoa.falar();