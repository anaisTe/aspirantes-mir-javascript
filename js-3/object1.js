//1. Crea una variable llamada pedro...
let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
}

//2. Imprime en la consola el valor de la llave edad.
console.log(pedro.edad); 

//3.Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8

//4.Elimina la propiedad con llave activo.
delete pedro.activo;

//5.Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).
for (let persona in pedro) {
    if (pedro.hasOwnProperty(persona)) {
        pedro[persona]
    }
}
console.log(pedro)

//6.Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
pedro.saluda = function saluda() { 
    return `Hola, me llamo ${pedro.nombre}`
}

//7.Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.
console.log(pedro.saluda());
