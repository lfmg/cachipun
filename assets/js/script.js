// Solicita Cantidad de Juegos

var juegos = parseInt(prompt("Ingresa la cantidad de veces que quieres jugar"));

for (i=1; i <= juegos; i++) {
     tirada();
}

function tirada() {

// Opciones para jugador y máquina
var opcionjugador = parseInt(prompt("Ingresa tu jugada: 1=Piedra, 2=Papel, 3=Tijera"));
var opcionmaquina = Math.floor(Math.random()*3) + 1;

switch (opcionmaquina) {
     case(1):
     jugadamaquina = 'PIEDRA';
     jugadamaquinaimg = '<img class="icono" src="assets/img/piedra.svg" />';
     break;
     case(2):
     jugadamaquina = 'PAPEL';
     jugadamaquinaimg = '<img class="icono" src="assets/img/papel.svg" />';
     break;
     case(3):
     jugadamaquina = 'TIJERAS';
     jugadamaquinaimg = '<img class="icono" src="assets/img/tijeras.svg" />';
     default:
}

switch (opcionjugador) {
     case(1):
     jugadajugador = 'PIEDRA';
     jugadajugadorimg = '<img class="icono" src="assets/img/piedra.svg" />';
     break;
     case(2):
     jugadajugador = 'PAPEL';
     jugadajugadorimg = '<img class="icono" src="assets/img/papel.svg" />';
     break;
     case(3):
     jugadajugador = 'TIJERAS';
     jugadajugadorimg = '<img class="icono" src="assets/img/tijeras.svg" />';
     default:
}



//opciones =  1=Piedra, 2=Papel, 3=Tijera

var resultado = document.getElementById('resultado');
var resultimage = document.getElementById('resultimage');

if (opcionmaquina==opcionjugador) {
     resultado = 'EMPATE'; resultimg = '<img class="icono" src="assets/img/empate.svg" />';
} else if (opcionjugador == 1 && opcionmaquina == 2 ) {
     resultado = 'PERDISTE'; resultimg =  '<img class="icono" src="assets/img/perdiste.svg" />';
} else if (opcionjugador == 1 && opcionmaquina == 3 ) {
     resultado = 'GANASTE'; resultimg =  '<img class="icono" src="assets/img/ganaste.svg" />';
} else if (opcionjugador == 2 && opcionmaquina == 1 ) {
     resultado = 'GANASTE'; resultimg =  '<img class="icono" src="assets/img/ganaste.svg" />';
} else if (opcionjugador == 2 && opcionmaquina == 3 ) {
     resultado = 'PERDISTE'; resultimg =  '<img class="icono" src="assets/img/perdiste.svg" />';
} else if (opcionjugador == 3 && opcionmaquina == 1 ) {
     resultado = 'PERDISTE'; resultimg =  '<img class="icono" src="assets/img/perdiste.svg" />';
} else if (opcionjugador == 3 && opcionmaquina == 2 ) {
     resultado = 'GANASTE'; resultimg =  '<img class="icono" src="assets/img/ganaste.svg" />';
}

//var tujugada = document.getElementById('tujugada');
//var mijugada = document.getElementById('mijugada');
//tujugada.innerHTML = jugadajugadorimg;
//mijugada.innerHTML = jugadamaquinaimg;
//resultimage.innerHTML = resultimg;

//jugador.innerHTML = jugadajugador;
//maquina.innerHTML = jugadamaquina;
//result.innerHTML = resultado;

//document.write(`Tu jugada: ${jugadajugadorimg} / Mi jugada: ${jugadamaquinaimg} / Resultado = ${resultimg}`);

document.write(`<div class="row py-2"><div id="cachipun"><div class="jugada"><h3>Tu jugada</h3><div id="tujugada"> ${jugadajugadorimg}</div><div id="jugador">${jugadajugador}</div></div><div class="jugada"><h3>Mi jugada</h3><div id="mijugada"> ${jugadamaquinaimg}</div><div id="maquina">${jugadamaquina}</div></div><div class="jugada"><h3>Resultado</h3><div id="resultimage"> ${resultimg}</div><div id="result">${resultado}</div></div></div></div>`);

}