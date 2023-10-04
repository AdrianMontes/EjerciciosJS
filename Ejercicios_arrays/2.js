function buscar(array, buscar) {
    let indice = array.indexOf(buscar);
    if(indice >= 0 || indice < array.lenght) {
        return indice;
    }
}

var alimentos = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(buscar(alimentos, "🍍"));