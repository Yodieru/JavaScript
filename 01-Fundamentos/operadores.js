/* 
  Operadores

  son simbolos utilizados para realizar operaciones sobre valores y variables

  1. Arimeticas
  2. Asignacion
  3. Comparacion

*/

/* 
  1. Operaciones arimeticas
  
  Se utilizan para realizar calculos matematicos
*/

// Suma (+): Suma dos valores

let suma = 16 + 6; // 22
console.log (suma);

// Resta (-) Resta el segundo vcalor al primero

let resta = 54 - 15; //39
console.log(resta);

// Multiplicacion (*): Multiplica los dos valores

let multi = 4 * 8; //32
console.log(multi);

// Division (/): Divide el primer valor por el segundo.

let divi = 20 / 4; // 5
console.log(divi);

// Modulo (%): Devuelve el resto de la division entre dos valores.

let mod = 7 % 2; //1
let mod2 = 9 % 3; //0
console.log(mod);
console.log(mod2);

// Exponenciacion (**): Eleva un numero a la potencia del otro.
let expo = 3 ** 2; // 9
let expo2 = 5 ** 12; // 244140625
console.log(expo);
console.log(expo2);

// Incremento (++): Incrementa el valor en 1
let y = 6;
y++;
console.log(y);


/* 2. Operadores de asignacion

  Estos operadores asignan valores a las variables

*/

// Asignacion (=) Asigna un valor a la variable

let w = 45;

// Asignacion con suma (+=): Summa el valot a una variable y la reasigna

w + 5; //50
console.log(w)

//asignacion con resta (-=): Resta el valor a una variable y la reasigna

w -= 15; //35
console.log(w)

// Asignacion con multimp´licacion (*=): Multiplica la vatiable por un valor y la rasigna

w *= 2; //70
console.log(w)

// Asignacion con division (/=): divide una variable por un valor y la reasigna

w /= 10; // 7
console.log(w)

/* 
  3. Comparacion

  Estos operadores comparan dos valores y devuelven 'true' o 'false'.

*/

//Igualdad (==): Compara dos valores para ver si son iguales. NOTA: Sin tener rn cuenta el tipo de dato.

let valor = "5";
let compara = 5 == valor;
console.log(compara) // true

// Igualdad estricta (===): Comparara dos valores y su tipo, para ver si son exactamente iguales.

compara = 5 === valor ;
console.log(compara) // false

// Desigauldad  (!=): Verificar si dos valores no son iguales

let valor1 = "10";
let valor2 = 10;

console.log(valor1 != valor2)

//Desigauldad estricta (!==): Verifica si dos valores y sus tipos no son exactamente iguales

valor1 = "10";
valor2 = 10;

console.log(valor1 !== valor2) // true

// Mayor que (>): verifica si el primer valor es mayor que el segundo.

compara = 5 > 10;

console.log(compara) //true

// Mayor o igaul que (>=): Varificar si el primer valor es mayor o igual que el segundo

compara = 10 >= 5;

console.log(compara) // true

// Menor que (<): Verifica si el primer valor es menor que el segundo

console.log(3 < 8); // true
console.log(10 < 8); // false
console.log("5" < 5); // false

//Menor o igaul que (<=): Verifica si el primer valor es menor o igual que el segundo valor

console.log(4 <= 10); //true
console.log(20 <= 100); //true
console.log(45 <= 7); //false
console.log(8 <= 8); //true

