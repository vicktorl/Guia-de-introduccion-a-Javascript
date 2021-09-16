var btn = document.getElementById("btn");
var resultado = document.getElementById("resultado")
var inputUno = document.getElementById("input-min");
var inputDos = document.getElementById("input-max");

btn.addEventListener("click", function () {
    var minimo = inputUno.value;
    var maximo = inputDos.value;
    resultado.innerHTML = NumeroRandom(minimo, maximo);
});

function NumeroRandom(minimo, maximo) {
    if (minimo>maximo) {
        alert(minimo+" es mayor que "+maximo);
        return "error 404"
    }
    return parseInt(Math.random() * (1 + parseInt(maximo) - parseInt(minimo)) + parseInt(minimo));
}