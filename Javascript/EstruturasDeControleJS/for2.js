

// Utilizando for in para navegar no array
const notas = [6.4, 7.4, 9.8, 8.1, 7.7];
for (let i in notas) {
    console.log(`usando for in = ${notas[i]}`);
}
console.log();


const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Martins',
    idade: 29,
    peso: 64
}


console.log(`Dados cadastrados:`);
for (let p in pessoa) {
    console.log(`${p}: ${pessoa[p]}`);
}