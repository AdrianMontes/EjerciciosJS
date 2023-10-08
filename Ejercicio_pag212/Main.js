//Clases
class Pregunta {
    constructor(pregunta, respuestas, respuesta_correcta) {
        this.pregunta = pregunta;
        this.respuestas = [];
        this.respuestas = respuestas.slice();
        this.respuesta_correcta = respuesta_correcta;
    }

    comprobar_respuesta(respuesta) {
        if (respuesta === this.respuesta_correcta) {
            return true;
        }
        return false;
    }
}


//Funciones
function cargar_pregunta() {
    pregunta_actual_texto.textContent = preguntas[pregunta_actual - 1].pregunta;
    respuesta1.textContent = preguntas[pregunta_actual - 1].respuestas[0];
    respuesta2.textContent = preguntas[pregunta_actual - 1].respuestas[1];
    respuesta3.textContent = preguntas[pregunta_actual - 1].respuestas[2];
    respuesta4.textContent = preguntas[pregunta_actual - 1].respuestas[3];
    numero_preguntas.textContent = "Pregunta " + pregunta_actual + " / 3";
}

function pasar_pregunta(valor) {
    pregunta_actual += valor;

    if (pregunta_actual < 1) {
        pregunta_actual = 1;
    }
    else if (pregunta_actual > 3) {
        pregunta_actual = 3;
    }

    cargar_pregunta();
    marcar_respuesta();
}

function marcar_respuesta() {
    if (respuestas[pregunta_actual - 1] === 0) {
        respuesta1.style.backgroundColor = "lightseagreen";
        respuesta2.style.backgroundColor = "lightseagreen";
        respuesta3.style.backgroundColor = "lightseagreen";
        respuesta4.style.backgroundColor = "lightseagreen";
    }
    else if (respuestas[pregunta_actual - 1] === 1) {
        respuesta1.style.backgroundColor = "lime";
        respuesta2.style.backgroundColor = "lightseagreen";
        respuesta3.style.backgroundColor = "lightseagreen";
        respuesta4.style.backgroundColor = "lightseagreen";
    }
    else if (respuestas[pregunta_actual - 1] === 2) {
        respuestas[pregunta_actual - 1] = 2;
        respuesta1.style.backgroundColor = "lightseagreen";
        respuesta2.style.backgroundColor = "lime";
        respuesta3.style.backgroundColor = "lightseagreen";
        respuesta4.style.backgroundColor = "lightseagreen";
    }
    else if (respuestas[pregunta_actual - 1] === 3) {
        respuestas[pregunta_actual - 1] = 3;
        respuesta1.style.backgroundColor = "lightseagreen";
        respuesta2.style.backgroundColor = "lightseagreen";
        respuesta3.style.backgroundColor = "lime";
        respuesta4.style.backgroundColor = "lightseagreen";
    }
    else if (respuestas[pregunta_actual - 1] === 4) {
        respuestas[pregunta_actual - 1] = 4;
        respuesta1.style.backgroundColor = "lightseagreen";
        respuesta2.style.backgroundColor = "lightseagreen";
        respuesta3.style.backgroundColor = "lightseagreen";
        respuesta4.style.backgroundColor = "lime";
    }
}

function resultados() {
    let respuestas_correctas = 0;
    for (let i = 0; i < 3; i++) {
        if (preguntas[i].comprobar_respuesta(respuestas[i])) {
            respuestas_correctas++;
        }
    }

    cuestionario_bloque.style.visibility = "hidden";
    resultados_bloque.style.visibility = "visible";
    respuestas_correctas_texto.textContent = "Puntuación: " + respuestas_correctas;
}


//Variables
var cuestionario_bloque = document.getElementById("cuestionario");
var resultados_bloque = document.getElementById("resultados");

var pregunta_actual_texto = document.getElementById("pregunta_actual");
var respuesta1 = document.getElementById("respuesta1");
var respuesta2 = document.getElementById("respuesta2");
var respuesta3 = document.getElementById("respuesta3");
var respuesta4 = document.getElementById("respuesta4");

var anterior = document.getElementById("anterior");
var numero_preguntas = document.getElementById("numero_preguntas");
var siguiente = document.getElementById("siguiente");

var respuestas_correctas_texto = document.getElementById("respuestas_correctas_texto");

var pregunta1 = new Pregunta(
    "¿Cuál es la capital de España?",
    ["Barcelona", "Madrid", "Castilla-La Mancha", "Castilla y León"],
    2
);

var pregunta2 = new Pregunta(
    "¿Cuál es la capital de Francia?",
    ["Burdeos", "Toulouse", "Lyon", "París"],
    4
);

var pregunta3 = new Pregunta(
    "¿Cuál es la capital de Japón?",
    ["Kioto", "Osaka", "Tokio", "Fukuoka"],
    3
);

var preguntas = [pregunta1, pregunta2, pregunta3];
var respuestas = [0, 0, 0];
var pregunta_actual = 1;

cargar_pregunta();


//Eventos
respuesta1.onclick = function () {
    respuestas[pregunta_actual - 1] = 1;
    marcar_respuesta();
}
respuesta2.onclick = function () {
    respuestas[pregunta_actual - 1] = 2;
    marcar_respuesta();
}
respuesta3.onclick = function () {
    respuestas[pregunta_actual - 1] = 3;
    marcar_respuesta();
}
respuesta4.onclick = function () {
    respuestas[pregunta_actual - 1] = 4;
    marcar_respuesta();
}
anterior.onclick = function () {
    pasar_pregunta(-1);
}
siguiente.onclick = function () {
    if (pregunta_actual === 3) {
        resultados();
    }
    else {
        pasar_pregunta(1);
    }
}