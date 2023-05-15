function separarString(string) {
    var resultado = [];
    var palabra = '';
    
    for (var i = 0; i < string.length; i++) {
      if (string[i] !== ' ') {
        palabra += string[i];
      } else if (palabra !== '') {
        resultado.push(palabra);
        palabra = '';
      }
    }
    
    if (palabra !== '') {
      resultado.push(palabra);
    }
    
    return resultado;
  }
  console.log(separarString("hola desde javascript"));