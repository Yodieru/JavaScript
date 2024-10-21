/* 

  Arreglo o allays

  Son una estructura de datos que permiuten almacenar mulktples valkosres en una sola variable.

  [Los elementos dentro de arry tiene un posicio]
  
  Los array peden contener datos de calquier tipo:numeros,strings, booleanos incluso array anidados.

  Sintaxis
  let bombreARRAY = [elemento1, elemento2,elemento3]
*/

let frutasFavoritas = ["limon", "Uvas", "Manzana"];
let numerosSuerte =[26, 29, 9, 6, 3];
let meQuiereNoMeQuiere = [true, false, false, true];
let misDatos = ["Gadiel", "Morales", 20, true];
let anidandoArrays = [
  [123 , 456 , 789] , 
["Gato", "Perro", "Pinguinos"] , 
[true, false, true]]

/* 

  array  -> ["limon", "uvas", "manzana"]
  indice ->     0       1         2

  array  -> [26, 29, 9, 6, 3]
  indice ->   0  1   2  3  4
*/

/* 

  Acceder a los lementos de un array

  Para accder a un dato usamos la siguiente sintaxis

  nombreArray [indice];

*/

console.log ( frutasFavoritas[2] )
console.log( numerosSuerte[1] )
console.log( anidandoArrays[2][2] )

/* 

  Modificar elementod del array

  Para cambiar el valor de cualquier elementodentor del array usamos la siguiente sintaxis:

  nombreArray[indice] = nuevoDato

*/

console.log ( frutasFavoritas )

frutasFavoritas [0] = "naranja";

console.log ( frutasFavoritas )

/* 

  Metodos utiles para los arrays
  
  Los metodos son "funciones" que trabajan con los datos de los arrays su sintaxis es la siguiente:

  1. nombreArray.nombreMetodo
  2. nombreArray.nombreMetodo(parametro)

*/

/* 

  length nos dice cuantos elementos tiene un array

*/

console.log ( frutasFavoritas.length )
console.log( numerosSuerte.length )
console.log( anidandoArrays.length )

/* 

  push() - Agregar un elemeto al final del array

  nombreArray.push(dato)
*/

console.log(frutasFavoritas);

frutasFavoritas.push("maracuya");

console.log(frutasFavoritas);

/* 

  pop() - Eliminamos el ultimo del array y lo devuelve.

  nombreArray.pop()

*/

console.log(numerosSuerte);

let numeroQuitado = numerosSuerte.pop()

console.log(numerosSuerte);
console.log(numeroQuitado);

/* 

  Unshift()

  Agrega un elemento al inicio del array

  nombreArray.unshift(elemento)

*/

console.log(frutasFavoritas);

frutasFavoritas.unshift("moras");

console.log(frutasFavoritas);

/* 

  shift() - Elimina el primer elemento del array y lo devuelve

  nombreArray.shift()

*/

console.log(numerosSuerte);

let quitarPrimero = numerosSuerte.shift();

console.log(numerosSuerte);
console.log(quitarPrimero);

/* 

  indexOf() - Encuentra el indice de un elemento en el array.

  nombreArray.indexOf(dato);

*/

let indice = frutasFavoritas.indexOf("Uvas");

console.log(indice);

/* 

  splice() - Eliminar o agregar elementos al array desde una posicion especifica.

  Eliminar

  nombreArray.splice(indiceInicio, indicerFinal)

  Agregar

  nombreArray.splice(indiceInicio, pasos, valores1, valores2)

*/

console.log(frutasFavoritas);

frutasFavoritas.splice(1,2);

console.log(frutasFavoritas);

frutasFavoritas.splice(1,0, "fresa", "banana");

console.log(frutasFavoritas);

/* 

  slice() - Crear una copia de una porcion del Array. No modifica el original, se crea un nuevo Array.

  nombreArray,slice(indiceInicio,indiceFinal );

*/

let frutasCopia = frutasFavoritas.slice(3,5);

console.log(frutasCopia);

/* 

  sort() - Ordena los elementos de un array de mayor menor

  nombreArray.sort() - De primera no pasamos datos entre parentesis

*/

console.log(frutasFavoritas);

frutasFavoritas.sort();

console.log(frutasFavoritas);


console.log(numerosSuerte);

numerosSuerte.sort();

console.log(numerosSuerte);
