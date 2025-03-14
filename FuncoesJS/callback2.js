
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Obter todas as notas menor do que 7.0

// sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]) // push = adicionar
    }
}
console.log(notasBaixas);


// com callback
notasBaixas = notas.filter(function (nota) {
    return nota <= 7;
});
console.log(notasBaixas);


