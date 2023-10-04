function quitar(array, quitar) {
    return array.filter((elemento) => elemento != quitar);
}

var alimentos = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(quitar(alimentos, "🍍"));