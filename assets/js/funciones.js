/*
var num1 = prompt("Ingresa el primer número:");
var num2 = prompt("Ingresa el segundo número:");

function suma (num1, num2) {

     var num1 = parseInt(num1);
     var num2 = parseInt(num2);
     var resultadoSuma = num1 + num2;
     return resultadoSuma;
}

document.write(suma(num1, num2));
*/
function suma () {
     var numero1 = parseInt(document.getElementById("numero1").value);
     var numero2 = parseInt(document.getElementById("numero2").value);
     var resultadoSuma = numero1 + numero2;
     return resultadoSuma;

}