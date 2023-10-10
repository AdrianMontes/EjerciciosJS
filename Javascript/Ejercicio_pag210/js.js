//Funciones
function generar_texto() {
  const apiUrl = "https://api.chucknorris.io/jokes/random";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((data) => {
      let value = data.value;
      console.log(value);
      frase_texto.textContent = value;
    })
    .catch((error) => {
      console.error("Hubo un error:", error);
    });
}

//Variables
var frase_texto = document.getElementById("frase");
var siguiente_caja = document.getElementById("siguiente");
generar_texto();


//Eventos
siguiente_caja.onclick = function () {
    generar_texto();
};
