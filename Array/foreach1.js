

const aprovados = ['Arthur', 'Bia', 'Gael', 'Lopes'];

aprovados.forEach(function (nome, index) {
    console.log(`${index + 1}) ${nome}`);
})

aprovados.forEach(nome => console.log(nome))