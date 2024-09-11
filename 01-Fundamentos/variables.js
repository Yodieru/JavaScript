/* 
  Variables

  Las variables son contenedores que almacenan datos.

  Las variables se declaran usando las palabras 
   reservadas:

  var -> Es la forma tradicional, pero ya no se recomienda
  let -> Es la forma moderna, es la recomendada
  const -> El dato almacenado no puede cambiar

  Para declarar una variable:

  var [nombreVariable] = [valor];
*/

var nombre = "Gadiel Morales";
let edad = 19;
const vivo = true;

console.log(nombre)
console.log(edad)
console.log(vivo)

/* 
  Las variables declaradas con ´var´ y ´let´ pueden cambiar a lo larg del codigo, siempre y cuando su alcanze lo permita.

  las variables declaradas  ´const´ no pueden cambiar
  Si lo intentamos  marcara error.

  Para cambiar el valor de una variables:

  [nombreVariable] = [nuevoValor]
*/

nombre = "Punchunguito";
edad = 59;
vivo = false;

// Mostrarlos nuevos datos
console.log(nombre)
console.log(edad)
console.log(vivo)