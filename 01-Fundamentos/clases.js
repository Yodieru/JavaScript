/* 

  Clases

  Una clase en Js es na plantlla para crear objetos

  Es una forma moderna  y natral de trabar con la programacion orientada a objetos.

  Los nombres de las clases se recomienda escribirlas con la letras maysculas

  Metodo constructor

  El metodo constructor es un metodo especial que se ejecuta auomaticamente cuando se crea una nueva instanciq de la clase

  Dentro del metodo cnstructor ,pasamos las propiedades y valores de la clase

  Laspropiedades pasan como parametros y luego se asignan con 'this'

  Sintaxis Basica

  class NombreClase {
    // Metodo constructor

    constructor (par1, par2) {
    this.par1 = par1;
    this.par2 = par2;<
    }
  }
  
  Instancias de clases para crear un objeto usando la clase, se utiliza la palabra 'new', esto invoca al constructor de la clase

  Sintaxis

  new NombreClase(par1, par2);

  Esta instancia se asigna a una variable o constante

  +Metodos de clase

  Se definen dentro de una clase y asignan AUTOMATICAMENTE  en el  'prototipo' del objeto . Esto permite que todas las instancias compartan el mismo metodo

  Sintaxis

  nombreMetodo(parm...){
    // Codigo quese ejecuta
  }

*/

// Definir la clase Mascota

class Mascota {
  constructor(nombre, edad){
    this.nombre = nombre; // Propiedad nombre
    this.edad = edad; // Propiedad edad
  }

  saludo(){
    console.log(`¡Hola me llamo ${this.nombre} y tengo  ${this.edad} años!`)
  }

}

// Instancear la clase Mascota. Creamos un objeto con la plantilla Mascota

let mascota1 = new Mascota("Solovino", 5);
let mascota2 = new Mascota("Kirby", 4);

// Accedemos a los datos de las instancias

console.log(mascota1.nombre)
console.log(mascota1.edad)

// Lanzar los metodos de los objetos
mascota1.saludo()
mascota2.saludo()