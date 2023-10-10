(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          alert("g");
          var nombreInput = document.getElementById("validationCustom01");
          var apellidoInput = document.getElementById("validationCustom02");
          var usuarioInput = document.getElementById(
            "validationCustomUsername"
          );
          var ciudadInput = document.getElementById("validationCustom03");
          var provinciaInput = document.getElementById("validationCustom04");
          var cpInput = document.getElementById("validationCustom05");
          var terminosInput = document.getElementById("invalidCheck");

          if (!nombreInput.checkValidity()) {
            document.getElementById("error_nombre").style.visibility = "visible";
          } else {
            document.getElementById("error_nombre").style.visibility = "hidden";
          }

          if (!apellidoInput.checkValidity()) {
            document.getElementById("error_apellido").style.visibility = "visible";
          } else {
            document.getElementById("error_apellido").style.visibility = "hidden";
          }

          if (!usuarioInput.checkValidity()) {
            document.getElementById("error_usuario").style.visibility = "visible";
          } else {
            document.getElementById("error_usuario").style.visibility = "hidden";
          }

          if (!ciudadInput.checkValidity()) {
            document.getElementById("error_ciudad").style.visibility = "visible";
          } else {
            document.getElementById("error_ciudad").style.visibility = "hidden";
          }

          if (!provinciaInput.checkValidity()) {
            document.getElementById("error_provincia").style.visibility = "visible";
          } else {
            document.getElementById("error_provincia").style.visibility = "hidden";
          }

          var cpValue = cpInput.value;
          if (isNaN(cpValue)) {
            document.getElementById("error_cp").style.visibility = "visible";
          } else {
            document.getElementById("error_cp").style.visibility = "hidden";
          }

          if (!terminosInput.checkValidity()) {
            document.getElementById("error_terminos").style.visibility = "visible";
          } else {
            document.getElementById("error_terminos").style.visibility = "hidden";
          }
        }
      },
      false
    );
  });
})();
