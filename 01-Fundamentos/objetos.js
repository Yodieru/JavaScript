/* 

  Objetos

  Es una coleccion de propiedades y metodos.

  las propiedades describen las caracteristicas del objeto.

  Los metodos describen los comportamientos del objeto.

  Los objetos peden contener distrintos tipos de datos: strings, nmbers, arrays, booleans, "undefined", otros objetos e inclso funciones.

  Sintaxis:

  let nombreObjeto = {
    // Propiedades y Metodos
  };

  Propiedades dentro de un objeto se escriben en pares "clave" : "valor"

  nombre : "Gadiel" // Propiedad

  let nombre = "Gadiel" //variable

  Las propiedades de un objeto se separan por comas ',' despues del valor.

  Las claves de las propiedades pueden tener mas de una palabra. Pero se deberan escribir entre comillas "" o ''

  "nombre real" = "Gadiel",

  Tambien se peden ecribir en formato Camel Case y sin comillas

  nombreReal = "Gadiel",

*/

/* Definir un objeto */

let personaje = {
  nombre : "Frodo Bolsón",
  edad : 52,
  residencia : "La Comarca",
  poderes : false,
  habilidadesHumanas : ["Valentia", "Valor", "Determinacion", "Compañerismo"]
}

/* Accedemos al valor  de las propiedades del objeto */

console.log(personaje.nombre);
/* console.log(personaje["habilidades humanas"]); */
console.log(personaje.habilidadesHumanas[0])

/* Agregar y borrar propiedades de objetos */

personaje.enemigos = ["Sauron", "Gollum"]; // Agregar

delete personaje.poderes

/* solo 

  Anidamos objetos

  nombramos al objeto animado y lo definimos con las llaves {} - Dentro de las llñaves se declaran las propiedades en pares "clave" : "valor" 

  Metodos

  Un metodo es una funcion que se define como propiedad de un objeto

  Sintaxis

  nombreClave : function(parametros) {
    //Codigo  que se ejecuta
  }

  this
  
  Es una palabra reservada que se refiere al objeto actual y sirve para acceder a sus propiedades del mismo.
*/

let mascota = {
  nombre : "Solovino",
  tipo : "Chihuaha",
  edad : 6,

  // Objeto Anidado
  fisico : {
    estatura : 20,
    peso : 2.5,
    color : "cafe"
  },

  //Declaramos un metodo
  saludo : function(amo) {
    // Codigo  que se ejecuta al invocar la funcion
    alert( `Guau Guau Guau me llamos ${this.nombre} y mi amo es ${amo}`)
  }

}

console.log(mascota.fisico.peso)
console.log(mascota.fisico.estatura)
console.log(mascota.fisico.color)

mascota.fisico.colorOjos = "cafe"; // Agregar
delete mascota.fisico.color; // Eliminamos

/* Accedemos al metodo saludo del objeto mascota */

mascota.saludo("Gadiel");