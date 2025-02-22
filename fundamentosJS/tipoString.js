
let linguagem = "Javascript";

console.log(linguagem.charAt(4)); //Pega o index da string  [index inicia do 0]
console.log(linguagem.charCodeAt(3)); //valor da tabela unicode
console.log(linguagem.indexOf("J")); // Qual o index esta

console.log(linguagem.substring(1)); //Deleta a string do index
console.log(linguagem.substring(0, 4)); //Pega um range e deleta o resto da string

console.log("Lingaguem: ".concat(linguagem).concat("!")); //concatena strings

console.log(linguagem.replace('script', ' 2025')); //Substitui qualquer string por outra string

//Converter string em array
console.log("Wesley,Beatriz,Gael,Arthur".split(',')); //split para tranformar em array








