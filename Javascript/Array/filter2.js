

// Como funciona o filter()
Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo fde Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


// Retornar apenas produtos que são acima de 500 reais.
const prodCaro = produtos.filter2(p => p.preco > 500)
console.log(prodCaro);

// Retornar apenas Produtos frágeis.
const prodFragil = produtos.filter2(p => p.fragil == true)
console.log(prodFragil);

// filter() encadiado para mostrar produtos caros e frágeis
const prodCarosFrageis = produtos.filter2(p => p.preco > 500).filter2(p => p.fragil == true)
console.log(prodCarosFrageis);