
/* for (var multiplicador = 1; multiplicador < 9; multiplicador++) {
  document.write(9 + "x" + multiplicador + ": " + (9*multiplicador) + "<br>");
}

for (var multiplicador = 1; multiplicador < 9; multiplicador++) {
  document.write(10 + "x" + multiplicador + ": " + (10*multiplicador) + "<br>");
}

for (var multiplicador = 1; multiplicador < 9; multiplicador++) {
  document.write(11 + "x" + multiplicador + ": " + (11*multiplicador) + "<br>");
}

*/


const $tabla = document.getElementById("tablas")

// acá manejo la cantidad de tablas y números a multiplicar
// con cambiar el número de columnas puedo manejar todo

// tambien tengo que manejar el numero de cuadros con "esteNumero" en el bucle for

let columnaIzquierda = 11; 
let columnaDerecha = 11;
let resultado

/* 
basicamente arranca con "esteNumero" como iniciador
y lo voy multiplicando varias vueltas por "porEste"
*/

for (let esteNumero = 9 ; esteNumero<=columnaIzquierda; esteNumero++){

    const $article = document.createElement("article")
    for(let porEsteOtro = 1 ; porEsteOtro<=columnaDerecha; porEsteOtro++){

      resultado = esteNumero*porEsteOtro
      const $p = document.createElement("p")
      $p.textContent = `${esteNumero} X ${porEsteOtro} = ${resultado}`
      $article.appendChild($p)

      $tabla.appendChild($article)
    }
}