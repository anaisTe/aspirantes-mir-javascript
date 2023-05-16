//1.Crear una variable llamada receta e inicialízalo con un objeto literal vacío.
let receta = new Object;

//2. Agrégale una propiedad nombre con valor “Sandwich”.
receta.nombre = 'Sandwich';
//3. Agrégale una propiedad ingredientes con un arreglo vacío.
receta.ingredientes = [];

//4. Agrega un objeto al arreglo ingredientes...
receta.ingredientes.push({nombre: 'Pan', cantidad: 2})

//5. Agrega otro ingrediente al arreglo...
receta.ingredientes.push({nombre: 'Queso', cantidad: 1})

//6. Debajo del objeto imprime en la consola el nombre...
console.log(receta.ingredientes[0].nombre);

// Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
let sum = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
    sum += receta.ingredientes[i].cantidad 
}
console.log(sum);