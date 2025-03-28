


const alunos = [
    { nome: 'Arthur', nota: 7.3, bolsista: false },
    { nome: 'Cristina', nota: 9.2, bolsista: true },
    { nome: 'Lopes', nota: 9.8, bolsista: false },
    { nome: 'Gael', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual
})

console.log(resultado);
