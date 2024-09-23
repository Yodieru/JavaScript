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

  2. Tipos de Datos complejos o de objetos

  *Array o Arreglo

  Es un conjunto de Datos que los almacena en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separardos por comas .

  * Object

  Es un conjunto de multiples datos en pares 'clave'-'valor'. Se escriben entre llaves {} y separados por comas.

  * Fuctions o Funciones

  Esun tipo de dato que puede ser "invocado". Se declaran con una palabra reservada "funcion" y el codigo que se ejecutan entre llave {"codigo"}
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

console.log(miVerdad);
console.log(miMentira);

/* Underfined */

let x; /* Declarar una variable sin inicializada */

console.log(x); // underfined

/* x = prompt("¿Cual es tu numero favorito?") */

console.log(x); // Valor que el usuario introduzca. 

/* Array */

let miFrutasFavoritas = ["Manzana", "Uvas", "Limones"];
let misNumerosSuerte =  ["3", 6, 9, 29];
let otroArray = ["tacos", 57, 89];

console.log(miFrutasFavoritas);
console.log(misNumerosSuerte);
console.log(otroArray);

/* Objeto */

let persona = {
  // clave : valor,
  nombre : "Gadiel",
  edad : 19,
  colorCabello : "Negro",
  colorOjos : "Cafe oscuros",
  altura : 1.82,
  peso : undefined,
  vivo : true,
  novia : false,
}

console.log(persona);
//Accedemos al valor de una clave dentro  de un objeto
// Con la notacion de punto
console.log(persona.nombre)
console.log(persona.altura)
console.log(persona.novia)

/* Function */

let mensajito = function () {
  // Pasamos el codigo que ejecuta la funcion
  console("Este es un mensaje lanzado por una función")
}

// Invocamos la funcion
mensajito();