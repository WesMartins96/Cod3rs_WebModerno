
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opt = -1;

do {
    opt = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opt}.`);
} while (opt != -1);


console.log('FIM')
