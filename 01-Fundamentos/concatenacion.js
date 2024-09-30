/* 
  Concatenacion

  La concatenacion es un proceso para unir o combinar dos o mas cadenas de texto en una sola
  
  Hay dos formas de realizar la concatenacion

  1. Opador (+) - Ete es el metodo mas comun para concatenar cadenas de texto
  2. Template Strings, Plantilla de Cadenas o Literales
  (``) - Alt Gr + C (portuguesa). Utilizamos los backtics o acentos invertidos, dentro podemos insertar cadenas de texto, variables y expresiones.
*/

// Concatenar con operador (+)

let nombre = "Gadiel";
let apellido = "Morales";

let nombreCompleto = nombre + " " + apellido; 

console.log(nombreCompleto); 

// Concatenar con Template Strings

let saludo = `Hola ${nombre} ${apellido}! ¿Como estas?
Sabias que 2 + 2 es igual a ${2+2}`;
console.log(saludo);

