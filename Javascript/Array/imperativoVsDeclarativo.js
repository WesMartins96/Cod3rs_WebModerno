
const alunos = [
    { nome: 'Cristina', nota: 7.9 },
    { nome: 'Gael', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);


// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length);

// Exemplo declarativo 2
const total3 = alunos.map(a => a.nota).reduce((total, atual) => total + atual)
console.log(total3 / alunos.length);
