
// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Notebook X1 Cobalt';
produto['marca do produto'] = 'Thinkpad';
produto.preco = 2799;

console.log(produto);

delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

// Criação literal de um objeto
const carro = {
    modelo: 'Ford',
    valor: 11000,
    proprietario: {
        nome: 'Gael',
        idade: 4,
        endereco: {
            logradouro: 'Dogs street',
            numero: 1234
        }
    },
    condutores: [{
        nome: 'Wes',
        idade: 28
    },
    {
        nome: 'Cristina',
        idade: 26
    },
    {
        nome: 'Arthur',
        idade: 18
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

delete carro.calcularValorSeguro;

// modificar dados
carro.proprietario.endereco.numero = 225;
carro['proprietario']['endereco']['logradouro'] = 'Nova Street';
console.log(carro);

