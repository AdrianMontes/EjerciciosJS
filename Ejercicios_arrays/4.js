function convertir(array, convertir, conversion) {
    return array.map((elemento) => (elemento === convertir ? conversion : elemento));
}

var alimentos = ["🍓", "🍋", "🍓", "🍋", "🍓"];
console.log(convertir(alimentos, "🍓", "🍄"));