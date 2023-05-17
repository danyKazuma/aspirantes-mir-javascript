function presentacion(persona) {
    var mensaje = "Hola, mi nombre es " 
    + persona.nombre + ", tengo " 
    + persona.edad + " años y vivo en " 
    + persona.ciudad + ".";
    return mensaje;
  }
//Primer valor
var persona = { nombre: "Juan",
                edad: 30,
                ciudad: "México",
                profesion: "Ingeniero"
            };
//Segfundo valor
persona.hobbies = ["Leer", "Cocinar", "Correr"];

//Ciclo FOR
for (var i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}

var resultado = presentacion(persona);
console.log(resultado);

var mensaje = presentacion(persona);

console.log(mensaje);

console.log(persona.hobbies);