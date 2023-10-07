function actualizar_bombilla() {
    let width = 5 * zoom.value;
    let height = 5 * zoom.value;
    let opacity = (luz.value / 10);
    bombilla.style.width = width + "em";
    bombilla.style.height = height + "em";
    bombilla.style.opacity = opacity;
}

var bombilla = document.getElementById("bombilla");
var boton = document.getElementById("boton");
var on = false;
var zoom = document.getElementById("nivel_zoom");
zoom.value = 2;
var luz = document.getElementById("nivel_luz");
luz.value = 10;
actualizar_bombilla();

boton.onclick = function () {
    if (on == false) {
        on = true;
        bombilla.src = "on.jpg";
        boton.src = "bon.jpg";
    }
    else if (on == true) {
        on = false;
        bombilla.src = "off.jpg";
        boton.src = "boff.jpg";
    }
}

zoom.onclick = function () {
    if (zoom.value < 1) {
        zoom.value = 1;
    }
    else if (zoom.value > 10) {
        zoom.value = 10;
    }
    actualizar_bombilla();
}

luz.onclick = function () {
    if (luz.value < 0) {
        luz.value = 0;
    }
    else if (luz.value > 10) {
        luz.value = 10;
    }
    actualizar_bombilla();
}