
// pessoa -> 123 -> {...}
const pessoa = { nome: 'Arthur' }
pessoa.nome = 'Wes';
console.log(pessoa);


// pessoa -> 456 -> {...}
//pessoa = { nome: 'Cristina' }  ERRO


// bloqueia/congela as alterações neste objeto
Object.freeze(pessoa);

pessoa.nome = 'Cristina';
console.log(pessoa.nome); // nome não foi alterado, pois utilizamos o Object.freeze()
