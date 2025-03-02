

// destruturar função com array
function rand([min = 0, max = 1000]) {
    if (min > max) {
        [min, max] = [max, min];
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor); //floor [arredonda para baixo]
}

// exemplos
console.log(rand([50, 60]));
console.log(rand([992]));
console.log(rand([, 10]));
console.log(rand([]));





