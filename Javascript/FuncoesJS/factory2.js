
// Função que retorna um obj
function criarProd(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProd('Notebook', 2199.99));
console.log(criarProd('Samsung S25', 4199.99));


