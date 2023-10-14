//Funciones
function actualizar_tema() {
    tema_actual++;

    if (tema_actual > 3) {
        tema_actual = 1;
    }

    if (tema_actual === 1) {
        carcasa.classList.add("carcasa1");
        carcasa.classList.remove("carcasa2");
        carcasa.classList.remove("carcasa3");

        header.classList.add("header1");
        header.classList.remove("header2");
        header.classList.remove("header3");

        tema_seleccion_contorno.style.justifyContent = "start";
        tema_seleccion_contorno.style.backgroundColor = "#252d42";
        tema_seleccion.style.backgroundColor = "#c0433a";

        operacion_texto.style.backgroundColor = "#181f32"
        operacion_texto.style.color = "white";

        teclas.style.backgroundColor = "#252d44";

        for (let i = 0; i < clase_teclas.length; i++) {
            clase_teclas[i].style.backgroundColor = "lightgray";
            clase_teclas[i].style.color = "darkslategray";
        }

        for (let i = 0; i < clase_borrar.length; i++) {
            clase_borrar[i].style.backgroundColor = "#64719a";
            clase_borrar[i].style.color = "lightgray";
        }

        tecla_equals.className = "igual1";
    }
    else if (tema_actual === 2) {
        carcasa.classList.remove("carcasa1");
        carcasa.classList.add("carcasa2");
        carcasa.classList.remove("carcasa3");

        header.classList.remove("header1");
        header.classList.add("header2");
        header.classList.remove("header3");

        tema_seleccion_contorno.style.justifyContent = "center";
        tema_seleccion_contorno.style.backgroundColor = "gray";
        tema_seleccion.style.backgroundColor = "orangered";

        operacion_texto.style.backgroundColor = "white";
        operacion_texto.style.color = "black";

        teclas.style.backgroundColor = "gray";

        for (let i = 0; i < clase_teclas.length; i++) {
            clase_teclas[i].style.backgroundColor = "lightgray";
            clase_teclas[i].style.color = "black";
        }

        for (let i = 0; i < clase_borrar.length; i++) {
            clase_borrar[i].style.backgroundColor = "darkcyan";
            clase_borrar[i].style.color = "lightgray";
        }

        tecla_equals.className = "igual2";
    }
    else if (tema_actual === 3) {
        carcasa.classList.remove("carcasa1");
        carcasa.classList.remove("carcasa2");
        carcasa.classList.add("carcasa3");

        header.classList.remove("header1");
        header.classList.remove("header2");
        header.classList.add("header3");

        tema_seleccion_contorno.style.justifyContent = "end";
        tema_seleccion_contorno.style.backgroundColor = "black";
        tema_seleccion.style.backgroundColor = "cyan";

        operacion_texto.style.backgroundColor = "black"
        operacion_texto.style.color = "yellow"

        teclas.style.backgroundColor = "black";

        for (let i = 0; i < clase_teclas.length; i++) {
            clase_teclas[i].style.backgroundColor = "darkslateblue";
            clase_teclas[i].style.color = "yellow";
        }

        for (let i = 0; i < clase_borrar.length; i++) {
            clase_borrar[i].style.backgroundColor = "darkorchid";
            clase_borrar[i].style.color = "white";
        }

        tecla_equals.className = "igual3";
    }
}

function anadir_numero(numero) {
    if (numero == '+') {
        if (operacion_actual == 0) {
            operacion_actual = 1;
            operador_actual = '+';
        }
        else if (operacion_actual == 1) {
            igualar_operacion();
            operador_actual = '+';
            operacion_texto.textContent = operaciones[0];
        }
    }
    else if (numero == '-') {
        if (operacion_actual == 0) {
            operacion_actual = 1;
            operador_actual = '-';
        }
        else if (operacion_actual == 1) {
            igualar_operacion();
            operador_actual = '-';
            operacion_texto.textContent = operaciones[0];
        }
    }
    else if (numero == '*') {
        if (operacion_actual == 0) {
            operacion_actual = 1;
            operador_actual = '*';
        }
        else if (operacion_actual == 1) {
            igualar_operacion();
            operador_actual = '*';
            operacion_texto.textContent = operaciones[0];
        }
    }
    else if (numero == '/') {
        if (operacion_actual == 0) {
            operacion_actual = 1;
            operador_actual = '/';
        }
        else if (operacion_actual == 1) {
            igualar_operacion();
            operador_actual = '/';
            operacion_texto.textContent = operaciones[0];
        }
    }
    else {
        operaciones[operacion_actual] += numero;
    }

    operacion_texto.textContent += numero;
}

function igualar_operacion() {
    let resultado = 0;
    if (operador_actual == '+') {
        resultado = parseFloat(operaciones[0]) + parseFloat(operaciones[1]);
        operaciones[0] = resultado.toString();
        operaciones[1] = "";
    }
    else if (operador_actual == '-') {
        resultado = parseFloat(operaciones[0]) - parseFloat(operaciones[1]);
        operaciones[0] = resultado.toString();
        operaciones[1] = "";
    }
    else if (operador_actual == '*') {
        resultado = parseFloat(operaciones[0]) * parseFloat(operaciones[1]);
        operaciones[0] = resultado.toString();
        operaciones[1] = "";
    }
    else if (operador_actual == '/') {
        resultado = parseFloat(operaciones[0]) / parseFloat(operaciones[1]);
        operaciones[0] = resultado.toString();
        operaciones[1] = "";
    }
    operacion_actual = 0;
}

function borrar() {
    if (operaciones[1] == "") {
        operador_actual = '';
        operacion_actual = 0;
    }

    var nuevo_texto = operacion_texto.textContent;
    operacion_texto.textContent = nuevo_texto.substring(0, nuevo_texto.length - 1);
}

//Variables
//IDs
var carcasa = document.getElementById("carcasa");
var header = document.getElementById("header");
var tema_seleccion_contorno = document.getElementById("contorno");
var tema_seleccion = document.getElementById("selection");
var tema_actual = 0;

var operaciones = ["", ""];
var operacion_actual = 0;
var operador_actual = '';
var operacion_texto = document.getElementById("operacion");

var teclas = document.getElementById("teclas");
var tecla_7 = document.getElementById("tecla7");
var tecla_8 = document.getElementById("tecla8");
var tecla_9 = document.getElementById("tecla9");
var tecla_delete = document.getElementById("delete");
var tecla_4 = document.getElementById("tecla4");
var tecla_5 = document.getElementById("tecla5");
var tecla_6 = document.getElementById("tecla6");
var tecla_plus = document.getElementById("teclaplus");
var tecla_1 = document.getElementById("tecla1");
var tecla_2 = document.getElementById("tecla2");
var tecla_3 = document.getElementById("tecla3");
var tecla_minus = document.getElementById("teclaminus");
var tecla_dot = document.getElementById("tecladot");
var tecla_0 = document.getElementById("tecla0");
var tecla_bar = document.getElementById("teclabar");
var tecla_x = document.getElementById("teclax");
var tecla_reset = document.getElementById("reset");
var tecla_equals = document.getElementById("equals");

//Clases
var clase_teclas = document.getElementsByClassName("numero1");
var clase_borrar = document.getElementsByClassName("borrar1");
//clase_teclas[1].style.backgroundColor = "red";

actualizar_tema();

//Eventos
tema_seleccion_contorno.onclick = function () {
    actualizar_tema();
}
tecla_7.onclick = function () {
    anadir_numero('7');
}
tecla_8.onclick = function () {
    anadir_numero('8');
}
tecla_9.onclick = function () {
    anadir_numero('9');
}
tecla_delete.onclick = function () {
    borrar();
}
tecla_4.onclick = function () {
    anadir_numero('4');
}
tecla_5.onclick = function () {
    anadir_numero('5');
}
tecla_6.onclick = function () {
    anadir_numero('6');
}
tecla_plus.onclick = function () {
    anadir_numero('+');
}
tecla_1.onclick = function () {
    anadir_numero('1');
}
tecla_2.onclick = function () {
    anadir_numero('2');
}
tecla_3.onclick = function () {
    anadir_numero('3');
}
tecla_minus.onclick = function () {
    anadir_numero('-');
}
tecla_dot.onclick = function () {
    anadir_numero('.');
}
tecla_0.onclick = function () {
    anadir_numero('0');
}
tecla_bar.onclick = function () {
    anadir_numero('/');
}
tecla_x.onclick = function () {
    anadir_numero('*');
}
tecla_reset.onclick = function () {
    operacion_texto.textContent = "";
    operaciones = ["", ""];
    operacion_actual = 0;
    operador_actual = '';
}
tecla_equals.onclick = function () {
    igualar_operacion();
    operacion_texto.textContent = operaciones[0];
}