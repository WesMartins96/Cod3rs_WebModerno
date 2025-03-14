


function Carro(velocidadeMax = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0;

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMax;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const fordFiesta = new Carro;
fordFiesta.acelerar();
console.log(fordFiesta.getVelocidadeAtual());


const dodgeViper = new Carro(350, 20);
dodgeViper.acelerar();
dodgeViper.acelerar();
dodgeViper.acelerar();
console.log(dodgeViper.getVelocidadeAtual());
