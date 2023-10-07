//Funciones
/**
 * 0: gana jugador
 * 1: pierde jugador
 * @param {*} resultado 
 */
function comprobar_resultado(resultado) {
    if (resultado === 0) {
        texto.textContent = "¡Has ganado!";
        marcador_jugador++;
        jugador.textContent = "Jugador: " + marcador_jugador;
        imagen.src = "images/win.png";
    }
    else if (resultado === 1) {
        texto.innerHTML = "<span class='rojo'>Has perdido...</span>";
        marcador_maquina++;
        maquina.textContent = "Maquina: " + marcador_maquina;
        maquina.innerHTML = "<span class='rojo'>Maquina: " + marcador_maquina + "</span>"
        imagen.src = "images/loss.png";
    }
}

/**
 * 0: piedra
 * 1: papel
 * 2: tijera
 * @param {*} tirada_jugador 
 */
function tirar(tirada_jugador) {
    let tirada_maquina = Math.floor(Math.random() * 3);

    //Empate
    if (tirada_jugador === tirada_maquina) {
        texto.innerHTML = "<span class='naranja'>¡Empate!</span>";
        color_piedra_original = "transparent";
        color_papel_original = "transparent";
        color_tijeras_original = "transparent";
        imagen.src = "images/piedra_papel_tijera.gif";
    }
    //Ganar
    else if (tirada_jugador === 0 && tirada_maquina === 2) {
        color_piedra_original = "yellow";
        color_tijeras_original = "red";
        color_papel_original = "transparent";
        comprobar_resultado(0);
    }
    else if (tirada_jugador === 1 && tirada_maquina === 0) {
        color_papel_original = "yellow";
        color_piedra_original = "red";
        color_tijeras_original = "transparent";
        comprobar_resultado(0);
    }
    else if (tirada_jugador === 2 && tirada_maquina === 1) {
        color_tijeras_original = "yellow";
        color_papel_original = "red";
        color_piedra_original = "transparent";
        comprobar_resultado(0);
    }
    //Perder
    else if (tirada_maquina === 0 && tirada_jugador === 2) {
        color_piedra_original = "red";
        color_tijeras_original = "yellow";
        color_papel_original = "transparent";
        comprobar_resultado(1);
    }
    else if (tirada_maquina === 1 && tirada_jugador === 0) {
        color_papel_original = "red";
        color_piedra_original = "yellow";
        color_tijeras_original = "transparent";
        comprobar_resultado(1);
    }
    else if (tirada_maquina === 2 && tirada_jugador === 1) {
        color_tijeras_original = "red";
        color_papel_original = "yellow";
        color_piedra_original = "transparent";
        comprobar_resultado(1);
    }
    
    //Cambiamos el sombreado de cada opción a su color original para indicar con mayor precisión las opciones que han elegido los jugadores
    piedra.style.boxShadow = "0px 0px 30px " + color_piedra_original;
    papel.style.boxShadow = "0px 0px 30px " + color_papel_original;
    tijeras.style.boxShadow = "0px 0px 30px " + color_tijeras_original;
}

//Variables
var jugador = document.getElementById("jugador");
var marcador_jugador = 0;
var maquina = document.getElementById("maquina");
var marcador_maquina = 0;
var imagen = document.getElementById("piedrapapeltijera");
var texto = document.getElementById("texto");
var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijeras = document.getElementById("tijeras");
var color_piedra_original = "transparent";
var color_papel_original = "transparent";
var color_tijeras_original = "transparent";

//Eventos
piedra.addEventListener("mouseover", function () {
    piedra.style.boxShadow = "0px 0px 30px yellow";
});
piedra.addEventListener("mouseout", function () {
    piedra.style.boxShadow = "0px 0px 30px " + color_piedra_original;
});
papel.addEventListener("mouseover", function () {
    papel.style.boxShadow = "0px 0px 30px yellow";
});
papel.addEventListener("mouseout", function () {
    papel.style.boxShadow = "0px 0px 30px " + color_papel_original;
});
tijeras.addEventListener("mouseover", function () {
    tijeras.style.boxShadow = "0px 0px 30px yellow";
});
tijeras.addEventListener("mouseout", function () {
    tijeras.style.boxShadow = "0px 0px 30px " + color_tijeras_original;
});

piedra.onclick = function () {
    tirar(0);
}
papel.onclick = function () {
    tirar(1);
}
tijeras.onclick = function () {
    tirar(2);
}