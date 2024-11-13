/* 

  áractiuca Clases y Objetos

  1. Crear una clase llamada Arma
  Debe tener las siguientes propiedades en su construccion

  * nombre (string): nombre del arma
  * tipo (string): tipo de arma (ej. "espada", "pistola", "arco")
  * daño (numero): cantidad de dasño que puede causar

  Agrega un metodo llamado describir que  imprima en consola

  arma: Galadhrim / Tipo: arco / Daño 40

  2. Crea un objeto llamado arsenal que contenga:
  * Una propiedad armas que sea un array vacio
  * Un metodo agregarArma que recibe un arma como parametro y la agrega al array armas
  
  3. Instancia Armas:
  * Crea tres armas usando la clase Arma con diferentes valores para nombre, tipo y daño

  4. Agrega las armas al Arsenal
  * Usa el metodo agregarArmas del objetoarsenal paraagregar cada una de las armas al array armas

  5. Muestra la descripcion de las armas

  * Usa un bucle for para recorrer el array armas dentro del objeto arsenal
  * En cada interacion , llama al metodo describir de cada arma para mostrar sus detalles en la consola
*/

class Armas {
  constructor (nombre, tipo, daño){
  this.nombre = nombre
  this.tipo = tipo
  this.daño = daño
  }

  describir () {
    console.log (`arma: ${this.nombre}/ Tipo: ${this.tipo} / Daño ${this.daño}`)
  }
}

let arsenal = {
  armas : [],
  agregarArma (Armas){
    this.armas.push(Armas);
  }
}

let arma1 = new Armas ("Macuahuitl", "Espada", 200);
let arma2 = new Armas ("Teputzopilli","Lanza", 160);
let arma3 = new Armas ("Tlaximaltepoztill","Hacha", 190);

arsenal.agregarArma(arma1)
arsenal.agregarArma(arma2)
arsenal.agregarArma(arma3)

for (let arma of arsenal.armas){
  console.log (arma)
}
