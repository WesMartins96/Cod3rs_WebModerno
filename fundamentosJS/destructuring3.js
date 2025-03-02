

// destruturar uma função
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (min - max) + max;
    return Math.floor(valor);
}

const obj = { min: 40, max: 50 };

// exemplos
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({}));

