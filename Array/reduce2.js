// Antes de usar o reduce(), temos que usar o map()

const alunos = [
    { nome: 'Arthur', nota: 7.3, bolsista: false },
    { nome: 'Cristina', nota: 9.2, bolsista: true },
    { nome: 'Lopes', nota: 9.8, bolsista: false },
    { nome: 'Gael', nota: 8.7, bolsista: true }
]


// Desafio 1: Todos os alunos são bolsistas?
const allBolsistas = alunos.map(a => a.bolsista).reduce(function (acumulador, bolsista) {
    return acumulador && bolsista
})
console.log(allBolsistas);


// Desafio 2: Algum aluno é bolsista?
const umBolsista = alunos.map(a => a.bolsista).reduce(function (acumulador, bolsista) {
    return acumulador || bolsista
})
console.log(umBolsista);

