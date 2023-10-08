//Variables
var body = document.getElementById("body");
var sonido1_boton = document.getElementById("sonido1");
var sonido1 = new Audio("sounds/Darbuka_06_76_SP.mp3");
var sonido2_boton = document.getElementById("sonido2");
var sonido2 = new Audio("sounds/Darbuka_18_76_SP.mp3");
var sonido3_boton = document.getElementById("sonido3");
var sonido3 = new Audio("sounds/Darbuka_42_76_SP.mp3");
var sonido4_boton = document.getElementById("sonido4");
var sonido4 = new Audio("sounds/Darbuka_48_76_SP.mp3");
var sonido5_boton = document.getElementById("sonido5");
var sonido5 = new Audio("sounds/Darbuka_66_76_SP.mp3");
var sonido6_boton = document.getElementById("sonido6");
var sonido6 = new Audio("sounds/Darbuka_105_76_SP.mp3");
var sonido7_boton = document.getElementById("sonido7");
var sonido7 = new Audio("sounds/Darbuka_118_76_SP.mp3");
var sonido8_boton = document.getElementById("sonido8");
var sonido8 = new Audio("sounds/Darbuka_130_76_SP.mp3");
var sonido9_boton = document.getElementById("sonido9");
var sonido9 = new Audio("sounds/Darbuka_159_76_SP.mp3");


//Eventos
sonido1_boton.onclick = function () {
    body.style.backgroundImage = getComputedStyle(sonido1_boton).backgroundImage;
    sonido1.play();
}
sonido2_boton.onclick = function () {
    body.style.backgroundImage = getComputedStyle(sonido2_boton).backgroundImage;
    sonido2.play();
}
sonido3_boton.onclick = function () {
    body.style.backgroundImage = getComputedStyle(sonido3_boton).backgroundImage;
    sonido3.play();
}
sonido4_boton.onclick = function () {
    body.style.backgroundImage = getComputedStyle(sonido4_boton).backgroundImage;
    sonido4.play();
}
sonido5_boton.onclick = function () {
    body.style.backgroundImage = getComputedStyle(sonido5_boton).backgroundImage;
    sonido5.play();
}
sonido6_boton.onclick = function () {
    body.style.backgroundImage = getComputedStyle(sonido6_boton).backgroundImage;
    sonido6.play();
}
sonido7_boton.onclick = function () {
    body.style.backgroundImage = getComputedStyle(sonido7_boton).backgroundImage;
    sonido7.play();
}
sonido8_boton.onclick = function () {
    body.style.backgroundImage = getComputedStyle(sonido8_boton).backgroundImage;
    sonido8.play();
}
sonido9_boton.onclick = function () {
    body.style.backgroundImage = getComputedStyle(sonido9_boton).backgroundImage;
    sonido9.play();
}