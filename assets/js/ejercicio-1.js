//==========================
// EJERCICIO 1

// Realizar el diagrama de flujo para las siguientes operaciones matemáticas: Suma, Resta, División, Multiplicación y el módulo de un número, partiendo de dos números ingresados por el usuario. (1.5 Puntos)

// Realizar operaciones con dos números. Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos números, calcular lo siguiente: (1.5 Puntos). Suma, Resta, Division, Multiplicacion y Modulo.

// Se crean 2 variables asociadas a dos IDs en el html

//var num1 = document.getElementById('num1');
var num1 = parseFloat(prompt("Ingrese un número mayor que cero"));
//var num2 = document.getElementById('num2');
var num2 = parseFloat(prompt("Ingrese otro número mayor que cero"));

// Se solicita al usuario que ingrese los valores para las variables y con el signo + se convierten de string a número 
//num1.innerHTML = +prompt("Ingrese el primer número");
//num2.innerHTML = +prompt("Ingrese el segundo número");

var suma = num1 + num2;
var resta = num1 - num2;
var producto = num1 * num2;
var division = num1 / num2;
var modulo = num1 % num2;;

document.write(`<p>La suma de ${num1} y ${num2} es igual a: ${suma} </p>`);
document.write(`<p>La diferencia de ${num1} y ${num2} es igual a: ${resta} </p>`);
document.write(`<p>El producto de ${num1} y ${num2} es igual a: ${producto} </p>`);
document.write(`<p>El resultado de ${num1} dividido en ${num2} es igual a: ${division} </p>`);
document.write(`<p>El módulo de ${num1} y ${num2} es igual a: ${modulo} </p>`);