/* 
  Condicionales

  Son estructuas que permiten ejecutar diferentes blñoques de codigo en funcion de si una condicion (expresiones) es verdadera o falsa.

  Estas estructuras controlan el flujop de los programas

  1. if (si) 

  El bloque if se ejecuta solo si la condicion que se le pasa es verdadera 'true'. Si la concicion es falsa 'false' el codigo dentro de if se omite.

  if (condicion) {
    codigo que se ejecuta si es verdadera
  }

  2. else -> de lo contrario

  Este bloque ejecuta un codigo cundo las condiciones anteriores no son verdaderas.

  if(con) {
    Codigo que se ejecuta en caso de que la concicion sea verdadera
  } else {
    Codigo que se ejecuta en caso de que la concicion anterior o anteriores sea falsa
   }

  3. else if -> si no

  Else 'if' nos ayuda comprobar condiciones adicionales si la condicion 'if' es falsa. Podemos tener tantos 'else if' como necesitemos. Los 'else if' se escriben entre 'if' y entre el 'else'

  if (condicional) {
  // codigo
  } else if (condicional) {
   // Codigo ejecutar
  } else if (condicional) {
   // Codigo ejecutar...
  } else {
   // codigo...}
*/

// Sentencia o bloque if 

let numero = 300 ;

if (numero > 500) {
  console.log("Me ejecute por que la primera condicion es verdadera")
}else if (numero < 400){
 console.log("Me ejecute por que la segunda conciciones es verdadera")
}else {
  console.log("Me ejecute por que las condiciones anteriores son falsas ")
}