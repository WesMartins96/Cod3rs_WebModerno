

let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global); // true -> aponta para o global

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global) // false
comparaComThis(obj); // true


let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global) // false -> arrow function this não aponta para o global
