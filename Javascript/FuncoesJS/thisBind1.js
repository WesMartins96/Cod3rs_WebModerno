

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();

// Utilizando bind()
const _falar = pessoa.falar.bind(pessoa);
_falar();



