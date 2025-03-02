


//par nome/valor
const saudacao = 'opa';  //contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa'; // contexto léxico 2
    return saudacao;
}


// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Arthur',
    idade: 26,
    peso: 70,
    endereco: {
        logradouro: 'Rua my avenue',
        numero: '455'
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);


