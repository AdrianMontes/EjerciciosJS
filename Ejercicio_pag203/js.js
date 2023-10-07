function actualizar_array() {
    var texto = array.join(", ");
    parrafo.textContent = texto;
}

function generar_alimento() {
    const alimentos = "🍕🍔🍟🌭🍿🧂🧈🥞🧇🍳🥚🥓🍞🥐🥨🥯🥖🫓🌯🌮🥪🥙🥗🧀🫔🥫🍖🍗🥩🍠🍙🍘🍱🥡🥠🥟🍚🍛🍜🦪🍣🍤🍲🥘🧆🍢🥮🍥🫕🍝🥣🥧🍦🍧🧁🍰🎂🍪🍩🍨🍫🍬🍭🍡🍮🍯🍵🫖☕🧃🥛🍼🧉🍶🍾🍷🍸🍹🧊🫗🥃🥂🍻🍺🥤🧋🍉🍈🍇🥥🥝🏺🍊🍋🍌🍍🥭🍎";
    let numero = Math.floor(Math.random() * alimentos.length);
    return alimentos[numero];
}

var array = [];
const push = document.getElementById("push");
const unshift = document.getElementById("unshift");
const insert = document.getElementById("insert");
var insert_at = document.getElementById("insert_at");
const pop = document.getElementById("pop");
const shift = document.getElementById("shift");
const remove = document.getElementById("remove");
var remove_at = document.getElementById("remove_at");
var parrafo = document.getElementById("info");

actualizar_array();

push.onclick = function () {
    array.push(generar_alimento());
    actualizar_array();
}
unshift.onclick = function () {
    array.unshift(generar_alimento());
    actualizar_array();
}
insert.onclick = function () {
    insert_at = document.getElementById("insert_at");
    let index = insert_at.value;
    array.splice(index, 0, generar_alimento());
    actualizar_array();
}
insert_at.onclick = function () {
    if (insert_at.value < 0) {
        insert_at.value = 0;
    }
    else if (insert_at.value > array.length - 1) {
        insert_at.value = array.length - 1;
    }
    if (array.length == 0) {
        insert_at.value = 0;
    }
}
pop.onclick = function () {
    array.pop();
    actualizar_array();
}
shift.onclick = function () {
    array.shift();
    actualizar_array();
}
remove.onclick = function () {
    remove_at = document.getElementById("remove_at");
    let index = remove_at.value;
    array.splice(index, 1);
    actualizar_array();
}
remove_at.onclick = function () {
    if (remove_at.value < 0) {
        remove_at.value = 0;
    }
    else if (remove_at.value > array.length - 1) {
        remove_at.value = array.length - 1;
    }
    if (array.length == 0) {
        remove_at.value = 0;
    }
}