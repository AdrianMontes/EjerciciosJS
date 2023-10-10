let numero = 1;
let i = 0;
do {
    if(i === 0){
        i++;
        numero--;
        console.log(numero);
    } else {
        numero++;
        console.log(numero);
    }
} while (numero < 5);
/*
    Este programa consiste en un bucle donde en cada
    iteración se suma +1 a una variable. Primero se
    comprueba si el índice es igual a 0, y si se
    cumple, se restará -1 a la variable "numero". Si
    no es igual a 0, se sumará +1 a la variable
    "numero". En ambos casos se imprimirá el valor
    actual de la variable "numero" hasta llegar a 5.

    En total, el bucle dará 6 iteraciones. Como la
    variable "i" empieza por 0, la primera iteración
    empezará por el if. Como en el if se suma +1 a
    la variable "i", no se volverá a cumplir la
    condición inicial y todas las iteraciones
    restantes caerán en el else.
*/