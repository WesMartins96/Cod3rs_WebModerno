
function tratarErro(erro) {
    throw new Error("Algo de errado aconteceu! Reinicie o programa");
}

// tratamento de erros try/catch/throw

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (error) {
        tratarErro(error)
    } finally {
        console.log('Chegou no finally');
    }
}

const obj = { nome: "Wesley Martins" }
imprimirNomeGritando(obj)
