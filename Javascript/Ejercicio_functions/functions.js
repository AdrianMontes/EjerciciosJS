var arrow = () => {
    return "Adrián Montes Muñoz";
}
console.log(arrow());

console.log();

function segunda_funcion(boolean) {
    console.log(boolean);
}
segunda_funcion(true);
segunda_funcion(false);

console.log();

function tercera_funcion(...valores) {
    valores.forEach(element => {
        console.log(element)
    });
}
tercera_funcion(1, 2, 3, 4, 5);