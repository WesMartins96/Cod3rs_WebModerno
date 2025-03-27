
const escola = [{
    turma: 'Turma A',
    alunos: [{
        nome: 'Beatriz',
        nota: 8.1
    }, {
        nome: 'Cristina',
        nota: 9.3
    }]
}, {
    turma: 'Turma B',
    alunos: [{
        nome: 'Wesley',
        nota: 8.9
    }, {
        nome: 'Gael',
        nota: 7.3
    }]
}]

// Extrair todas as notas em um só array independente de sua turma
const getNotaAluno = a => a.nota
const getNotasTurma = t => t.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)


// utilizando flatMap()
Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
console.log(escola.flatMap(getNotasTurma));

