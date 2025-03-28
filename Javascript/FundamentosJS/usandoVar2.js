
// Nao usar o escopo global é uma boa pratica com javascript.

// exemplo com var, a variavel se sobescreve
var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);

}
console.log('fora = ', numero);
