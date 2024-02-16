var num1;
var num2;

num1 = parseInt(prompt("Ingresar el primer número"));
num2 = parseInt(prompt("Ingresar el segundo número"));

if (num1 <= num2) {
     alert("El primer número ingresado NO ES MAYOR que el segundo número");
}

if (num2 >= 0) {
     alert("El segundo número que ingresaste es positivo, mayor o igual a cero");
} 
if (num1 != 0 || num1 < 0 ) { 
     alert("El primer número que ingresaste es distinto de cero o es negativo");
}