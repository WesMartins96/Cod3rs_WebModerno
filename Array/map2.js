

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const obj = carrinho.map(json => JSON.parse(json));

const precos = obj.map(item => `R$ ${parseFloat(item.preco).toFixed(2).replace('.', ',')}`)
console.log(precos);

