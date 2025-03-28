
// Formas de criar objetos

// Usando notação literal
const obj1 = {

}
console.log(obj1);


// Usando Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);


// Usando Função Construtora
function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());


// Usando Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}
const funcionario1 = criarFuncionario('Arthur', 7980, 4);
const funcionario2 = criarFuncionario('Beatriz CL', 11400, 1);
console.log(funcionario1.getSalario(), funcionario2.getSalario());


// Usando Object.create
const dog = Object.create(null);
dog.nome = 'Gael';
console.log(dog);


// Usando uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);



