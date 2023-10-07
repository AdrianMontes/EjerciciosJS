const boton = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");

boton.onclick = function () {
    parrafo.classList.toggle("blue");
}