function anadir_despues(array, buscar, anadido) {
  return array.reduce((resultado, elemento) => {
    resultado.push(elemento);
    if (elemento === buscar) {
      resultado.push(anadido);
    }
    return resultado;
  }, []);
}

var alimentos = ["🌶️", "🍚", "🌶️", "🍚", "🌶️", "🍚"];
console.log(anadir_despues(alimentos, "🌶️", "🥵"));