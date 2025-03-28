
//array in javascript
const values = [7.7, 8.9, 6.3, 9.2]

console.log(values[0], values[1]);
console.log(values[3]);
console.log(values[4]); //undefined

console.log(values.length);

//adicionar
values.push({ id: 3 }, false, null, 'Teste');
console.log(values);


//destacar/retirar o ultimo elemento do array
console.log(values.pop());


//retira um elemento do array
delete values[0];
console.log(values);

console.log(typeof values); //object
