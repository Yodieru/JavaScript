/* 

  Cclos o bucles

  Nos permite ejecutar un bloque de codigo varias veces

  + Facilita tareas repetitivas , ahorrando codigo y tiempo

*/

/* 

  1. For

  Este  bucle tiene 3 partes clave:

   1. Inicializacion de una variable.
   2. Condicion que evala el valor de la variable
   3. Actalizacion del valor de la variable

  Sintaxis

  for (inicializacion ; condicion ; actualizacion) {
  //Codigo que se ejecuta
  }

*/

for (let i = 1 ; i <= 10 ; i++ ) { 
  // codigo qe se ejecuta
  console.log(" Mensaje " + i)
}

for (let i = 10 ; i >= 0 ; i--) {
  console.log(i)
}

/* 

  2. while

  Este ciclo ejecta su bloque  de codigo mientras la condicion especificada sea verdadera.

  Sintaxis

  Sedefine la variable fuera del ciclo

  let nombreVariable = valor;

  while (condicion) {
  // Codigo a ejecutar

  nombreVariable++ /Actualizacion
  }

*/

let contador = 0; //Definicion

while ( contador < 3 ) { //Condicion
  console.log("Gato" + contador);

  contador++; // Actualizacion
}

let veces = 5;

while (veces > 2 ) {
  console.log ("Veces :" + veces);

  veces--;
}

/* 

  3. do...while

  Es similar a while, pero garantiza qe el bloque de codigo se ejecute al menos una vez.

  Primero se ejecuta el cpodigo que el bloque de codigo se ejecuta al menos una vez.

  Primero se ejecuta el codigo y luego se verifica la condicion

  Sintaxis
  
  // La variable se define fuera del ciclo.

  let nombreVariable = valor // Definicion

  do {
  //Codigo que se ejecuta

  nombreVariable++ // Actualizacion

  } while (condicion);

*/

let numero = 20;
do {
  // Codigo que se ejecuta al menos una vez
  console.log("El numero es: " + numero);

  numero--;
} while (numero < 10);