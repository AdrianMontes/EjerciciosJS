function sustituir(array, sustituir, sustitucion) {
    for(let i = array.indexOf(sustituir); i < array.length; i++) {
        array[i] = sustitucion;
    }
    return array;
}

var alimentos = ["🍔", "🥪", "🍣", "🍕", "☕", "🍽️", "🍙", "🍘", "🥑"];

alimentos = sustituir(alimentos, "🍕", "🍺");
console.log(alimentos);