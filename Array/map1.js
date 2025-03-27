

const nums = [1, 2, 3, 4, 5]

let result = nums.map(function (e) {
    return e * 2;
})
console.log(result);
console.log(nums);


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(result);
