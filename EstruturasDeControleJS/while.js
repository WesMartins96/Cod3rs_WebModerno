

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let opt = 0;

while (opt != -1) {
    opt = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opt}.`);

}

console.log('FIM')

