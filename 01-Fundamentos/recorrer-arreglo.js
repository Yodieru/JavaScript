/* 

  Recorrer arreglos

  Podemos acceder a cada dato de un arreglo a traves de su indice. Ya sea para obtener el dato o hacer algo ese indice.

*/

/* Definir un array */

let colores = ["azul", "naranja", "rojo", "blanco"] 
// indices:      0        1         2

/*  Imprimimos por consola los datos del array */

/* 

console.log(colores[0])
console.log(colores[1])
console.log(colores[2])

*/

colores.push("morado")

/* Recorrer el array con el bucle  for */

for( let i = 0 ; i <= colores.length ; i++ ) {
  // codigo que se ejecuta
  console.log ( colores[i])
}

/* 

Bucle for...of

Es una manera simple y moderna de recorrer arrays en JS
Este nos permite acceder directamente al valor de cada elemento sin necesidad de usar indices.

Sintaxis

for (const elemento of nombreArray){
    // Cpdigo a ejecutar por cada elemento en el array
}

*/

for( const color of colores ) {
  // codigo a ejecutar

  console.log ( `Colorcito: ${color}`)
}

/*  Ejercicio para recorer un arreglo con for...of */
let stands = ["star platinum", "Za hando", "Za warudo", "Crazy Diamond"]

for( const espiritu of stands ) {
  console.log ( `Stand: ${espiritu}`)
}