function maxIndex(arreglo) {

    if (arreglo.length === 0) {
      return -1;
    }

    var indiceMaximo = 0;
    var valorMaximo = arreglo[0];
    
    for (var i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > valorMaximo) {
        indiceMaximo = i;
        valorMaximo = arreglo[i];
      }
    }    
    return indiceMaximo;
  }
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
