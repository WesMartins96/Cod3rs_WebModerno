

console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Arthur', 'Gael');
console.log(aprovados);

aprovados = ['Bia', 'Arthur', 'Gael']
console.log(aprovados[0], aprovados[2]);
console.log(aprovados[1]);

aprovados[3] = 'Wes';
aprovados.push('Martins');
console.log(aprovados);
console.log(aprovados.length);


aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

aprovados.splice(4, 1, 'Lopes');
console.log(aprovados);
aprovados.splice(1, 1, 'Cris')
console.log(aprovados);


