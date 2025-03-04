

console.log('Exemplo com while');
let contador = 1;
while (contador <= 10) {
    console.log(`Contador = ${contador}`);
    contador++;
}

console.log();

console.log('Exemplo com for');
for (let i = 0; i <= 10; i++) {
    console.log(`Contador = ${i}`);
}


// exemplo com array
const notas = [6.4, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
    console.log(`usando for no array = ${notas[i]}`);
}