//==========================
// EJERCICIO 3
// Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos). Se debe considerar lo siguiente:
// 1 año tiene 365 días
// 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.

var dias = parseInt(prompt("Ingrese una cantidad de días"));

// Conversión de días a formato Años, semanas, días.

var years = Math.floor(dias / 365);
var semanas = Math.floor ((dias % 365)/ 7);
var diasRestantes = dias - (years * 365) - (semanas * 7);

document.write(`<p> ${dias} días equivalen a: ${years} año(s), ${semanas} semana(s) y ${diasRestantes} día(s).</p>`);
