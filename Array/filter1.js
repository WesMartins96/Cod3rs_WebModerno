

// Filtrar um array usando filter()
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo fde Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
    return false
}));

// Retornar apenas produtos que são acima de 500 reais.
const prodCaro = produtos.filter(p => p.preco > 500)
console.log(prodCaro);

// Retornar apenas Produtos frágeis.
const prodFragil = produtos.filter(p => p.fragil == true)
console.log(prodFragil);

// filter() encadiado para mostrar produtos caros e frágeis
const prodCarosFrageis = produtos.filter(p => p.preco > 500).filter(p => p.fragil == true)
console.log(prodCarosFrageis);
