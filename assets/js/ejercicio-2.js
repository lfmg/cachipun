//==========================
// EJERCICIO 2
// Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit. (2 Puntos). Se debe considerar la siguiente información respecto a la equivalencia de las escalas de temperatura:
// 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos es 0 °C + 273.15 = 273.15 K
// 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F

var celsius = document.getElementById('celcius');
var tempCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius"));
var tempKelvin = tempCelsius  + 273.15;
var tempFarenheit = (tempCelsius * 9 / 5) + 32;


document.write(`<p>La temperatura ${tempCelsius}ºC, equivale a: ${tempKelvin.toFixed(2)}ºK</p>`);
document.write(`<p>La temperatura ${tempCelsius}°C, equivale a: ${tempFarenheit.toFixed(2)}°F.</p>`);