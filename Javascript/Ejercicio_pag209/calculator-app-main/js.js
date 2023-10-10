//Funciones
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
var operaciones = ["", ""];
var operacion_actual = 0;
var operador_actual = '';
var operacion_texto = document.getElementById("operacion");

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

//Eventos
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