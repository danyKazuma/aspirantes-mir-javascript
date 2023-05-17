function sumar(receta) {
    var totalCantidades = 0;
    for (var i = 0; i < receta.ingredientes.length; i++) {
      totalCantidades += receta.ingredientes[i].cantidad;
    }
    return totalCantidades;
  }
  
var receta = {};
receta.nombre = "Sandwich";
receta.ingredientes = [];
//Primer valor
var pan = {
  nombre: "Pan",
  cantidad: 2
};
receta.ingredientes.push(pan);
//Segundo Valor
var queso = {
  nombre: "Queso",
  cantidad: 1
};

receta.ingredientes.push(queso);

console.log(receta.ingredientes[0].nombre);
console.log("Total de cantidades de ingredientes:", sumar(receta));
