//Clases
class Pregunta {
    constructor(pregunta, respuestas, respuesta_correcta) {
        this.pregunta = pregunta;
        this.respuestas = [];
        this.respuestas = respuestas.slice();
        this.respuesta_correcta = respuesta_correcta;
    }

    //Genera una pregunta aleatoriamente
    static generar_pregunta() {
        //Generamos números y un operador aleatorio
        let primera_operacion = 0;
        let segunda_operacion = 0;
        let operador_generado = Math.floor(Math.random()* 4) + 1;
        let operador = '';
        let resultado = 0;

        //1 = Suma; 2 = Resta; 3 = Multiplicación; 4 = División
        if (operador_generado === 1) {
            primera_operacion = Math.floor(Math.random() * 100) + 0;
            segunda_operacion = Math.floor(Math.random() * 100) + 0;
            resultado = primera_operacion + segunda_operacion;
            operador = '+';
        }
        else if (operador_generado === 2) {
            primera_operacion = Math.floor(Math.random() * 100) + 0;
            segunda_operacion = Math.floor(Math.random() * 100) + 0;
            resultado = primera_operacion - segunda_operacion;
            operador = '-';
        }
        else if (operador_generado === 3) {
            primera_operacion = Math.floor(Math.random() * 10) + 0;
            segunda_operacion = Math.floor(Math.random() * 10) + 0;
            resultado = primera_operacion * segunda_operacion;
            operador = '*';
        }
        else if (operador_generado === 4) {
            primera_operacion = Math.floor(Math.random() * 100) + 0;
            segunda_operacion = Math.floor(Math.random() * 100) + 0;
            resultado = primera_operacion / segunda_operacion;
            operador = '/';
        }

        //Generamos una respuesta aleatoria con un valor parecido al resultado
        let respuestas_generadas = [0, 0, 0, 0];
        for (let i = 0; i < 4; i++) {
            //Respuestas con valores menores o mayores del resultado hasta 5
            let varianza = Math.floor(Math.random() * 5) + 1;
            let operador_varianza = Math.floor(Math.random() * 2) + 1;
            let resultado_varianza = 0;

            //1 = Suma; 2 = Resta
            if (operador_varianza === 1) {
                resultado_varianza = resultado + varianza;
            } else if (operador_varianza === 2) {
                resultado_varianza = resultado - varianza;
            }

            respuestas_generadas[i] = resultado_varianza;
        }

        //Guardamos el resultado en una de las respuestas
        let resultado_guardado = Math.floor(Math.random() * 3) + 0;
        respuestas_generadas[resultado_guardado] = resultado;

        //Con los datos ya generados, creamos una pregunta a partir de estos y la devolvemos
        return new Pregunta(
            primera_operacion + " " + operador + " " + segunda_operacion,
            respuestas_generadas,
            resultado_guardado + 1
        );
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
    numero_preguntas.textContent = "Pregunta " + pregunta_actual + " / " + cantidad_preguntas;
}

function pasar_pregunta(valor) {
    pregunta_actual += valor;

    if (pregunta_actual < 1) {
        pregunta_actual = 1;
    }
    else if (pregunta_actual > cantidad_preguntas) {
        pregunta_actual = cantidad_preguntas;
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
    clearInterval(cronometro);
    let respuestas_correctas = 0;
    for (let i = 0; i < cantidad_preguntas; i++) {
        if (preguntas[i].comprobar_respuesta(respuestas[i])) {
            respuestas_correctas++;
        }
    }

    cuestionario_bloque.style.visibility = "hidden";
    resultados_bloque.style.visibility = "visible";
    respuestas_correctas_texto.textContent = "Puntuación: " + respuestas_correctas;
    tiempo.textContent = "Tiempo: " + minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');
}

function actualizarCronometro() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
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
var tiempo = document.getElementById("tiempo_texto");

var pregunta_actual = 1;
var cantidad_preguntas = 10;
var preguntas = [];
var respuestas = [];

var cronometro;
var segundos = 0;
var minutos = 0;

for (let i = 0; i < cantidad_preguntas; i++) {
    let pregunta = Pregunta.generar_pregunta();
    preguntas.push(pregunta);
    respuestas.push(0);
}

cargar_pregunta();
cronometro = setInterval(actualizarCronometro, 1000);


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
    if (pregunta_actual === cantidad_preguntas) {
        resultados();
    }
    else {
        pasar_pregunta(1);
    }
}