let a = 7;
let b = 94;

b = a;
a = 94

console.log("a = " + a);
console.log("b = " + b);

//Podemos realizar a troca de valores das variaveis da forma abaixo:
[a, b] = [b, a]
console.log("aALTERNATIVO = " + a);
console.log("bALTERNATIVO = " + b);