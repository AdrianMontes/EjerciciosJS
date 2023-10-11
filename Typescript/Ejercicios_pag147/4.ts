//1
const mandar_mensaje_arrow = (mensaje: string): void => {
    console.log(mensaje);
}

mandar_mensaje_arrow("Hola mundo");


//2
const saludar_persona_arrow = (persona: string): string => {
    return "Hola " + persona;
}

console.log(saludar_persona_arrow("David"));


//3
const es_booleano_arrow = (variable: any): (boolean | string) => {
    if (typeof variable === "boolean") {
        return true;
    }

    return "No es booleano";
}

let booleano3: boolean = true;
let string3: string = "Hola";

console.log(es_booleano_arrow(booleano3));
console.log(es_booleano_arrow(string3));