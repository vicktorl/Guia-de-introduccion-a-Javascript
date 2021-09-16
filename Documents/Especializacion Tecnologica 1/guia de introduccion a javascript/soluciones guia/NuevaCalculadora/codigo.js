var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado")
var inputUno = document.getElementById("input-first");
var inputsign = document.getElementById("input-sign");
var inputDos = document.getElementById("input-second");

btn.addEventListener("click", function () {
    var first = inputUno.value;
    var second = inputDos.value;
    var sign = inputsign.value;
    resultado.classList.remove('resultado-error');
    resultado.classList.add('resultado');
    validar(first, second, sign);
});
function NumeroRandom(first, second, sign) {

    if (sign == "*") {
        return multiplicar(first, second);
    } else if (sign == "-") {
        return restar(first, second);
    } else if (sign == "+") {
        return sumar(first, second);
    } else if (sign == "/") {
        return dividir(first, second);
    } else {
        return error();
    }
}
function validar(first, second, sign) {
    if (first === undefined || second === undefined) {
        console.log('el numero es undifined');
        vacio();
    } if (first === null || second === null) {
        console.log('el numero es null');
        vacio();
    } if (first === '' || second === '') {
        resultado.innerHTML = vacio();
        console.log('el numero es vacio');
    }
    else {
        esEntero(first, second, sign); 
    }
}
function esEntero(first, second, sign){
    if (Number.isInteger(parseInt(first)) && Number.isInteger(parseInt(second))) {
        resultado.innerHTML = NumeroRandom(first, second, sign);
        console.log("es entero");
    } else{
    resultado.innerHTML = "no es entero";
    resultado.classList.remove('resultado');
    resultado.classList.add('resultado-error');
    console.log("no es entero");
    }
}
function vacio() {

    resultado.classList.remove('resultado');
    resultado.classList.add('resultado-error');
    return "por favor ingrese dos numeros";
}
function sumar(first, second) {
    return parseInt(first) + parseInt(second);
}
function restar(first, second) {
    return parseInt(first) - parseInt(second);
}
function multiplicar(first, second) {

    return parseInt(first) * parseInt(second);
}
function dividir(first, second) {
    if (second == 0) {
        resultado.classList.remove('resultado');
        resultado.classList.add('resultado-error');
        return "divivion por 0";
    }
    return parseInt(first) / parseInt(second);
}
function error() {
    resultado.classList.remove('resultado-error');
    resultado.classList.add('resultado-error');
    return "caracter no valido, intente nuevamente";
}