function saluda(nombre){
    let saludo="Hola, me llamo "+nombre;
    return saludo;
}

let persona = {
    nombre: "Pedro Perez",
    edad: 30,
    activo : true,
    hobbies : ["programar","squash","piano"]
  }

  console.log("valor de edad: "+persona.edad);
  persona.estatura=1.8;
  console.log("valor de estatura: "+persona.estatura);
  delete persona.activo;
  console.log("valor de activo: "+persona.activo);

  console.log(saluda(persona.nombre));

