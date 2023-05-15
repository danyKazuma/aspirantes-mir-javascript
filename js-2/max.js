// escribe la función max acá
function max(numeros=[i++]){
    let maximo = 0;
if(Object.entries(numeros).length===0){
    return numeros[0];
}else{
    for (let numero of numeros) {
        if (maximo < numero){
        maximo = numero;
      }
      }
}
return maximo;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined