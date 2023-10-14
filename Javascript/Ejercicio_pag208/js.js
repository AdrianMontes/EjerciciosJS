//Funciones
function actualizar_interfaz() {
    if (felicidad <= 25) {
        felicidad_barra.style.backgroundColor = "red";
    }
    else {
        felicidad_barra.style.backgroundColor = "greenyellow";
    }

    if (energia <= 25) {
        felicidad = operar(felicidad, -5, 100);
        energia_barra.style.backgroundColor = "red";
    }
    else {
        energia_barra.style.backgroundColor = "greenyellow";
    }

    if (hambre <= 25) {
        felicidad = operar(felicidad, -5, 100);
        hambre_barra.style.backgroundColor = "red";
    }
    else {
        hambre_barra.style.backgroundColor = "greenyellow";
    }

    if (diversion <= 25) {
        felicidad = operar(felicidad, -5, 100);
        diversion_barra.style.backgroundColor = "red";
    }
    else {
        diversion_barra.style.backgroundColor = "greenyellow";
    }

    nivel_texto.textContent = "Nivel: " + nivel;
    experiencia_texto.textContent = "Experiencia: " + experiencia_actual + " / " + experiencia_maxima;
    felicidad_texto.textContent = "Felicidad: " + felicidad + " / 100";
    energia_texto.textContent = "Energia: " + energia + " / " + energia_maxima;
    hambre_texto.textContent = "Hambre: " + hambre + " / 100";
    diversion_texto.textContent = "Diversión: " + diversion + " / 100";

    let felicidad_porcentaje = (felicidad / 100) * 100;
    let experiencia_porcentaje = (experiencia_actual / experiencia_maxima) * 100;
    let energia_porcentaje = (energia / energia_maxima) * 100;
    let hambre_porcentaje = (hambre / 100) * 100;
    let diversion_porcentaje = (diversion / 100) * 100;

    felicidad_barra.style.width = felicidad_porcentaje + "%";
    experiencia_barra.style.width = experiencia_porcentaje + "%";
    energia_barra.style.width = energia_porcentaje + "%";
    hambre_barra.style.width = hambre_porcentaje + "%";
    diversion_barra.style.width = diversion_porcentaje + "%";
}

function subir_nivel() {
    if (experiencia_actual === experiencia_maxima) {
        felicidad = operar(felicidad, 15, 100);
        nivel++;
        experiencia_actual = 0;
        experiencia_maxima += 5;
        energia_maxima += 20;
    }
}

//Función que comprueba si el valor que queremos restar cumple el mínimo
function cumplir_minimo(valor, resta) {
    if (valor - resta >= 0) {
        return true;
    }
    return false;
}

function operar(valor, operacion, maximo) {
    let resultado = valor + operacion;
    if (resultado < 0) { //Para restas
        return 0;
    }
    else if (resultado > maximo) { //Para sumas
        return maximo;
    }
    return resultado; //Si no sobrepasa ningún límite
}

//Variables
var nivel = 1;
var nivel_texto = document.getElementById("nivel_texto");

var experiencia_actual = 0;
var experiencia_maxima = 5;
var experiencia_texto = document.getElementById("experiencia_texto");
var experiencia_barra = document.getElementById("experiencia");

var felicidad = 0;
var felicidad_texto = document.getElementById("felicidad_texto");
var felicidad_barra = document.getElementById("felicidad");

var energia = 100;
var energia_maxima = 100;
var energia_texto = document.getElementById("energia_texto");
var energia_barra = document.getElementById("energia");

var hambre = 70;
var hambre_texto = document.getElementById("hambre_texto");
var hambre_barra = document.getElementById("hambre");

var diversion = 50;
var diversion_texto = document.getElementById("diversion_texto");
var diversion_barra = document.getElementById("diversion");

var entrenar = document.getElementById("entrenar");
var comer = document.getElementById("comer");
var jugar = document.getElementById("jugar");
var descansar = document.getElementById("descansar");

actualizar_interfaz();

//Eventos
entrenar.onclick = function () {
    if (cumplir_minimo(energia, 15) && cumplir_minimo(hambre, 15) && cumplir_minimo(diversion, 5)) {
        energia = operar(energia, -15, energia_maxima);
        hambre = operar(hambre, -15, 100);
        diversion = operar(diversion, -5, 100);
        //Adquiere experiencia en función de la felicidad
        if (felicidad < 50) {
            experiencia_actual = operar(experiencia_actual, 1, experiencia_maxima);
        }
        else if (felicidad === 100) {
            experiencia_actual = operar(experiencia_actual, 3, experiencia_maxima);
        }
        else {
            experiencia_actual = operar(experiencia_actual, 2, experiencia_maxima);
        }
        subir_nivel();
        actualizar_interfaz();
    }
}
comer.onclick = function () {
    if (hambre !== 100) {
        felicidad = operar(felicidad, 5, 100);
        hambre = operar(hambre, 15, 100);
        actualizar_interfaz();
    }
}
jugar.onclick = function () {
    if (diversion !== 100) {
        if (cumplir_minimo(hambre, 5)) {
            felicidad = operar(felicidad, 5, 100);
            diversion = operar(diversion, 15, 100);
            hambre = operar(hambre, -5, 100);
            actualizar_interfaz();
        }
    }
}
descansar.onclick = function () {
    if (energia !== energia_maxima) {
        if (cumplir_minimo(hambre, 10) && cumplir_minimo(diversion, 10)) {
            felicidad = operar(felicidad, 5, 100);
            energia = operar(energia, 25, energia_maxima);
            hambre = operar(hambre, -10, 100);
            diversion = operar(diversion, -10, 100);
            actualizar_interfaz();
        }
    }
}