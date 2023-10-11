function es_booleano(variable: any): (boolean | string) {
    if (typeof variable === "boolean") {
        return true;
    }

    return "No es booleano";
}

let booleano: boolean = true;
let string: string = "Hola";

console.log(es_booleano(booleano));
console.log(es_booleano(string));