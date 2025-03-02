
// novo recurso do ES2015
const Pessoa = {
    nome: 'Wesley',
    idade: 28,
    endereco: {
        rua: 'Rua ABC',
        numero: '15A'
    }
}

// destruturar componentes da construção
const { nome, idade } = Pessoa;
console.log(nome, idade);


// mudar o nome da variavel
const { nome: n, idade: i } = Pessoa;
console.log(n, i);



