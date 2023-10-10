var carta = document.getElementById("carta");

carta.addEventListener("mouseover", function () {
    carta.src = "card-front.png";
});
carta.addEventListener("mouseout", function () {
    carta.src = "card-back.png";
});