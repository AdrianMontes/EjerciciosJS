//Funciones
function actualizar_interfaz() {
    if (felicidad <= 50) {
        felicidad_barra.style.backgroundColor = "red";
    }
    else {
        felicidad_barra.style.backgroundColor = "greenyellow";
    }

    if (energia <= 50) {
        felicidad = operar(felicidad, -5);
        energia_barra.style.backgroundColor = "red";
    }
    else {
        energia_barra.style.backgroundColor = "greenyellow";
    }

    if (hambre <= 50) {
        felicidad = operar(felicidad, -5);
        hambre_barra.style.backgroundColor = "red";
    }
    else {
        hambre_barra.style.backgroundColor = "greenyellow";
    }

    if (diversion <= 50) {
        felicidad = operar(felicidad, -5);
        diversion_barra.style.backgroundColor = "red";
    }
    else {
        diversion_barra.style.backgroundColor = "greenyellow";
    }

    nivel_texto.textContent = "Nivel: " + nivel;
    experiencia_texto.textContent = "Experiencia: " + experiencia_actual + " / " + experiencia_maxima;
    felicidad_texto.textContent = "Felicidad: " + felicidad + " / 200";
    energia_texto.textContent = "Energia: " + energia + " / 200";
    hambre_texto.textContent = "Hambre: " + hambre + " / 200";
    diversion_texto.textContent = "Diversión: " + diversion + " / 200";

    felicidad_barra.style.width = felicidad + "px";
    energia_barra.style.width = energia + "px";
    hambre_barra.style.width = hambre + "px";
    diversion_barra.style.width = diversion + "px";
}

function subir_nivel() {
    if (experiencia_actual === experiencia_maxima) {
        felicidad = operar(felicidad, 30);
        nivel++;
        experiencia_actual = 0;
        experiencia_maxima += 5;
    }
}

//Función que comprueba si el valor que queremos restar cumple el mínimo
function cumplir_minimo(valor, resta) {
    if (valor - resta >= 0) {
        return true;
    }
    return false;
}

function operar(valor, operacion) {
    let resultado = valor + operacion;
    if (resultado < 0) { //Para restas
        return 0;
    }
    else if (resultado > 200) { //Para sumas
        return 200;
    }
    return resultado; //Si no sobrepasa ningún límite
}

//Variables
var nivel = 1;
var nivel_texto = document.getElementById("nivel_texto");

var experiencia_actual = 0;
var experiencia_maxima = 5;
var experiencia_texto = document.getElementById("experiencia_texto");

var felicidad = 0;
var felicidad_texto = document.getElementById("felicidad_texto");
var felicidad_barra = document.getElementById("felicidad");

var energia = 200;
var energia_texto = document.getElementById("energia_texto");
var energia_barra = document.getElementById("energia");

var hambre = 150;
var hambre_texto = document.getElementById("hambre_texto");
var hambre_barra = document.getElementById("hambre");

var diversion = 100;
var diversion_texto = document.getElementById("diversion_texto");
var diversion_barra = document.getElementById("diversion");

var entrenar = document.getElementById("entrenar");
var comer = document.getElementById("comer");
var jugar = document.getElementById("jugar");
var descansar = document.getElementById("descansar");

actualizar_interfaz();

//Eventos
entrenar.onclick = function () {
    if (cumplir_minimo(energia, 30) && cumplir_minimo(hambre, 30) && cumplir_minimo(diversion, 10)) {
        energia = operar(energia, -30);
        hambre = operar(hambre, -30);
        diversion = operar(diversion, -10);
        experiencia_actual = operar(experiencia_actual, 1);
        subir_nivel();
        actualizar_interfaz();
    }
}
comer.onclick = function () {
    if (hambre !== 200) {
        felicidad = operar(felicidad, 5);
        hambre = operar(hambre, 30);
        actualizar_interfaz();
    }
}
jugar.onclick = function () {
    if (diversion !== 200) {
        if (cumplir_minimo(hambre, 10)) {
            felicidad = operar(felicidad, 10);
            diversion = operar(diversion, 30);
            hambre = operar(hambre, -10);
            actualizar_interfaz();
        }
    }
}
descansar.onclick = function () {
    if (energia !== 200) {
        if (cumplir_minimo(hambre, 20) && cumplir_minimo(diversion, 20)) {
            felicidad = operar(felicidad, 5);
            energia = operar(energia, 50);
            hambre = operar(hambre, -20);
            diversion = operar(diversion, -20);
            actualizar_interfaz();
        }
    }
}