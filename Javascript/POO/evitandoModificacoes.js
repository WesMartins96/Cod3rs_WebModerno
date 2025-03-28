
// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'xpto'
produto.descricao = 'descrição do produto'
delete produto.tag
console.log(produto);


// Object.seal
const pessoa = { nome: 'Cristina', idade: 26 }
Object.seal(pessoa);
console.log('Selado', Object.isSealed(pessoa));

// Podemos alterar mas não podemos adicionar e deletar
pessoa.sobrenome = 'Lopes'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);
