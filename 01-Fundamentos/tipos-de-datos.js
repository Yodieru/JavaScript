/* 
  Tipos de Datos
  Los tipos de datos se dividen dos categorias: Primitivos y Complejos

  1. Tipos de daytos Primitivos
  
  Datos basicos que no se concideran "Objetos" y no tienen "metodos".
  
  number o numero
  
  Representracion de valores numericos ya sea enteros o con decimales (punto flotante)
  
  * String o Cadena de Caracteres

  Se usa para representar text. El texto se coloca entre casillas dobles o simprle "texto" "text"

  * Boolean o Boleanos

  Estos represnten un calor  logico que puede ser 'true' o 'false'

  * Undfined o indefinido

  Es el valor que se  le asigna una variable que ha sido declarada pero no inicializada.

  2. Tipos de Datos complejos

  *Array o Arreglo

  Es un conjunto de Datos que los almacena en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separardos por comas .
*/

let  miNumero =  5;
let miNumeroDecimal = 3.1416

console.log(miNumero);
console.log(miNumeroDecimal);

/* String */
let miNobre = 'Gadiel'
let miApellido = 'Morales'

console.log(miNobre);
console.log(miApellido);

/* Booleans */

let miVerdad = true;
let miMentira = false;

console.log(miVerdad)
console.log(miMentira)

/* Underfined */

let x; /* Declarar una variable sin inicializada */

console.log(x); // underfined

x = prompt("¿Cual es tu numero favorito?")

console.log)(x); // Valor que el usuario introduzca. 

/* Array */

let miFrutasFavoritas = ["Manzana", "Uvas", "Limones"];
let misNumerosSuerte ["3", 6, 9, 29]

console.log(miFrutasFavoritas)
console.log(misNumerosSuerte)
