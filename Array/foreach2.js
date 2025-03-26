
Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Arthur', 'Bia', 'Gael', 'Lopes'];

aprovados.forEach2(function (nome, index) {
    console.log(`${index + 1}) ${nome}`);
})

