
// Função em JS é First-Class Object (Citizens)
// Higher-order function


// criar função de forma literal
function fun1() {

}


// Armazenar a função em uma variável
const fun2 = function () {

}


// Armazenar a função em um array
const array = [function (a, b) {
    return a + b
}, fun1, fun2]

console.log(`-> ${array[0](30, 35)}`);


// Armazenar a função em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa!'
}
console.log(obj.falar());


// Passar função como param
function run(fun) {
    fun()
}

run(function () {
    console.log('Executando...');
})



// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}
soma(20, 5)(6);

const somaCont = soma(2, 3)
somaCont(6)

