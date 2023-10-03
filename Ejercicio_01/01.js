var cadena = "Hola mundo";
var numero = 7;
var booleano = true;
var nulo = null;
var indefinido = undefined;
var simbolo = Symbol("hola");
var objeto_tradicional = {nombre: "Adrian", apellido: "Montes"};
var objeto_array = [1, 2, 3];

console.log(cadena + " (" + typeof cadena + ")");
console.log(numero + " (" + typeof numero + ")");
console.log(booleano + " (" + typeof booleano + ")");
console.log(nulo + " (" + typeof nulo + ")");
console.log(indefinido + " (" + typeof indefinido + ")");
console.log(simbolo);
console.log(typeof simbolo);
console.log(simbolo.description);
console.log(objeto_tradicional + " (" + typeof objeto_tradicional + ")");
console.log(objeto_tradicional.nombre + " " + objeto_tradicional.apellido);
console.log(objeto_array + " (" + typeof objeto_array + ")");
console.log(objeto_array[0] + ", " + objeto_array[1] + ", " + objeto_array[2]);

var global = "Variable tipo global";
console.log("\n" + global);

if (true) {
    let local = "Variable tipo local";
    console.log("\n" + local);
}