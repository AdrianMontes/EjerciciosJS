function anadir_entre_medio(array, medio, nuevo_elemento) {
  return array.reduce((resultado, elemento, index) => {
    resultado.push(elemento);

    if (elemento === medio && array[index + 1] === medio) {
      resultado.push(nuevo_elemento);
    }

    return resultado;
  }, []);
}

var cartas = ["🎴", "🎴", "🎴", "🎴", "🎴", "🎴"];
console.log(anadir_entre_medio(cartas, "🎴", "🃏"));