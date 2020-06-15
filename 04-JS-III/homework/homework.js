// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var elemento = array[0];
  return elemento;
}//en node funciona

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var elemento = array[array.length-1];
  return elemento;
}//en node funciona

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var largo = array.length;
  return largo;
}//en node funciona

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i= 0; i < array.length; i++)
  {
    var a = array[i] + 1;
    array[i]= a;
  }
  return array;
}//en node funciona

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}//en node funciona

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}//en node funciona

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var p = palabras[0];
  for(let i = 1; i < palabras.length; i++)
  {
    p = p + ' ' + palabras[i];
  }
  return p;
}// en node funciona

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var v = false;
  for(let i = 0; i < array.length; i++)
  {
    if(array[i] == elemento)
      {
        return true;}
    else
      {v=false;}
  }
  return v;
}// en node funciona

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var v = numeros[0];
  for( let i = 1; i < numeros.length; i++)
    {v = v + numeros[i];}
  return v;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var v = resultadosTest[0];
  var resto = resultadosTest.length;
  for( let i = 1; i < resto; i++)
    {v = v + resultadosTest[i];}
  var porcentaje = v / resto;
  return porcentaje;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var v= numeros[0];
  for(let i=1; i< numeros.length; i++)
  {
    if(v< numeros[i])
      {v=numeros[i]}
  }
  return v;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length== 0)
    {return 0;}
  if(arguments.length > 1)
  {
    var x= arguments[0];
    for(let i=1; i< arguments.length; i++)
    {
      x = x * arguments[i];
    }
    return x;
  }
  else
    {var j= arguments[0];
      return j;}
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
