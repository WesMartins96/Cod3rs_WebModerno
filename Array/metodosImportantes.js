
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop(); // Remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen') // Adiciona um elemento ao array
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton') // Adiciona o elemento no index 0 do aray
console.log(pilotos);


// splice() pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

// remover
pilotos.splice(3, 1) // no [indice 3] remove 1 a partir dele
console.log(pilotos);


// Retorna um novo array
// slice()
const novoArrayPilotos = pilotos.slice(2);
console.log(novoArrayPilotos);

const pilotosSelecionados = pilotos.slice(1, 4)
console.log(pilotosSelecionados); 
