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

function actualizar_objetivos() {
    if (objetivo_felicidad_cumplido == false) {
        if (felicidad === 100) {
            objetivo_felicidad_cumplido = true;
        }
        let felicidad_porcentaje = (felicidad / 100) * 100;
        objetivo_felicidad_texto.textContent = "Alcanza la felicidad máxima (" + felicidad + " / 100)";
        objetivo_felicidad_barra.style.width = felicidad_porcentaje + "%";
    }
    objetivo_nivel_texto.textContent = "Alcanza el nivel 7 (" + nivel + " / 7)";
    objetivo_comer_texto.textContent = "Usa la acción Comer 30 veces (" + objetivo_comer + " / 30)";
    objetivo_jugar_texto.textContent = "Usa la acción Jugar 20 veces (" + objetivo_jugar + " / 20)";
    objetivo_descansar_texto.textContent = "Usa la acción Descansar 15 veces (" + objetivo_descansar + " / 15)";

    let objetivo_nivel_porcentaje = (nivel / 7) * 100;
    let objetivo_comer_porcentaje = (objetivo_comer / 30) * 100;
    let objetivo_jugar_porcentaje = (objetivo_jugar / 20) * 100;
    let objetivo_descansar_porcentaje = (objetivo_descansar / 15) * 100;

    objetivo_nivel_barra.style.width = objetivo_nivel_porcentaje + "%";
    objetivo_comer_barra.style.width = objetivo_comer_porcentaje + "%";
    objetivo_jugar_barra.style.width = objetivo_jugar_porcentaje + "%";
    objetivo_descansar_barra.style.width = objetivo_descansar_porcentaje + "%";

    if (felicidad === 100) {
        objetivo_felicidad_barra.style.backgroundColor = "yellow";
        butterfree.style.filter = "brightness(1)";
    }
    if (nivel === 7) {
        objetivo_nivel_barra.style.backgroundColor = "yellow";
        charizard.style.filter = "brightness(1)";
    }
    if (objetivo_comer === 30) {
        objetivo_comer_barra.style.backgroundColor = "yellow";
        bulbasaur.style.filter = "brightness(1)";
    }
    if (objetivo_jugar === 20) {
        objetivo_jugar_barra.style.backgroundColor = "yellow";
        squirtle.style.filter = "brightness(1)";
    }
    if (objetivo_descansar === 15) {
        objetivo_descansar_barra.style.backgroundColor = "yellow";
        pidgeot.style.filter = "brightness(1)";
    }
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
var pokemon_actual_texto = document.getElementById("pokemon_actual_texto");
var pokemon_actual_imagen = document.getElementById("pokemon_actual_imagen");

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

var objetivo_felicidad_cumplido = false;
var objetivo_felicidad_texto = document.getElementById("objetivo_felicidad_texto");
var objetivo_felicidad_barra = document.getElementById("objetivo_felicidad");
objetivo_felicidad_barra.style.backgroundColor = "aqua";

var objetivo_nivel_texto = document.getElementById("objetivo_nivel_texto");
var objetivo_nivel_barra = document.getElementById("objetivo_nivel");
objetivo_nivel_barra.style.backgroundColor = "aqua";

var objetivo_comer = 0;
var objetivo_comer_texto = document.getElementById("objetivo_comer_texto");
var objetivo_comer_barra = document.getElementById("objetivo_comer");
objetivo_comer_barra.style.backgroundColor = "aqua";

var objetivo_jugar = 0;
var objetivo_jugar_texto = document.getElementById("objetivo_jugar_texto");
var objetivo_jugar_barra = document.getElementById("objetivo_jugar");
objetivo_jugar_barra.style.backgroundColor = "aqua";

var objetivo_descansar = 0;
var objetivo_descansar_texto = document.getElementById("objetivo_descansar_texto");
var objetivo_descansar_barra = document.getElementById("objetivo_descansar");
objetivo_descansar_barra.style.backgroundColor = "aqua";

var pikachu = document.getElementById("pikachu");
var butterfree = document.getElementById("butterfree");
butterfree.style.filter = "brightness(0)";
var charizard = document.getElementById("charizard");
charizard.style.filter = "brightness(0)";
var bulbasaur = document.getElementById("bulbasaur");
bulbasaur.style.filter = "brightness(0)";
var squirtle = document.getElementById("squirtle");
squirtle.style.filter = "brightness(0)";
var pidgeot = document.getElementById("pidgeot");
pidgeot.style.filter = "brightness(0)";

actualizar_interfaz();
actualizar_objetivos();

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
        actualizar_objetivos();
    }
}
comer.onclick = function () {
    if (hambre !== 100) {
        felicidad = operar(felicidad, 5, 100);
        hambre = operar(hambre, 15, 100);
        objetivo_comer++;
        actualizar_interfaz();
        actualizar_objetivos();
    }
}
jugar.onclick = function () {
    if (diversion !== 100) {
        if (cumplir_minimo(hambre, 5)) {
            felicidad = operar(felicidad, 5, 100);
            diversion = operar(diversion, 15, 100);
            hambre = operar(hambre, -5, 100);
            objetivo_jugar++;
            actualizar_interfaz();
            actualizar_objetivos();
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
            objetivo_descansar++;
            actualizar_interfaz();
            actualizar_objetivos();
        }
    }
}

pikachu.onclick = function () {
    pokemon_actual_texto.textContent = "Pikachu";
    pokemon_actual_imagen.src = "pikachu.png";
}

butterfree.onclick = function () {
    if (objetivo_felicidad_cumplido == true) {
        pokemon_actual_texto.textContent = "Butterfree";
        pokemon_actual_imagen.src = "butterfree.png";
    }
}

charizard.onclick = function () {
    if (nivel >= 7) {
        pokemon_actual_texto.textContent = "Charizard";
        pokemon_actual_imagen.src = "charizard.png";
    }
}

bulbasaur.onclick = function () {
    if (objetivo_comer >= 30) {
        pokemon_actual_texto.textContent = "Bulbasaur";
        pokemon_actual_imagen.src = "bulbasaur.png";
    }
}

squirtle.onclick = function () {
    if (objetivo_jugar >= 20) {
        pokemon_actual_texto.textContent = "Squirtle";
        pokemon_actual_imagen.src = "squirtle.png";
    }
}

pidgeot.onclick = function () {
    if (objetivo_descansar >= 15) {
        pokemon_actual_texto.textContent = "Pidgeot";
        pokemon_actual_imagen.src = "pidgeot.png";
    }
}