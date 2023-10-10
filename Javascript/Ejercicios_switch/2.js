var numero = "3";

switch (numero) {
  case "1":
    numero = 1;
    break;
  case "2":
    numero = 2;
    break;
  case "3":
    numero = 3;
    break;
  case "4":
    numero = 4;
    break;
  case "5":
    numero = 5;
    break;
  default:
    console.log("No has introducido una opción correcta.");
    break;
}

console.log(numero + " (" + typeof numero + ")");