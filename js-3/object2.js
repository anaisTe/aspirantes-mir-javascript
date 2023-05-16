//1. Crea un objeto literal llamado "persona"...
let persona = new Object;
persona.nombre = 'Pablo';
persona.edad = 22;
persona.ciudad = 'Lima';
persona.profesion = 'Profesor'

//2. Imprime en la consola el objeto "persona" completo.
console.log(persona);

//3. Crea una función llamada "presentacion"...
function presentacion(obj) {
  return `Hola, me llamo ${obj.nombre}, tengo ${obj.edad} años y vivo en ${obj.ciudad}.`;
}

//4. Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
let mensaje = presentacion(persona);

//5. Imprime en la consola el valor de la variable "mensaje".
console.log(mensaje);

//6. Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.
persona.hobbies = ['Dibujo', 'Planear viajes', 'Cine']

//7. Imprime en la consola la propiedad "hobbies" del objeto "persona".
console.log(persona.hobbies);

//8. Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
let llaves = Object.keys(persona);
for (let i = 4; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(persona[llave]);
}