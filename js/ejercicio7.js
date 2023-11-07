/*7- Escriba un script que muestre la tabla de multiplicar
 de un número ingresado por pantalla, la creación de la tabla 
 debe ser realizada con una función y mostrar solo los resultados
  del 1 al 10 del número elegido por el usuario.
 */
function tablamultiplicacion(Pnumeroingresado)
{

    for(let i=1; i<=10 ;i++)
    {
      let resultado = numeroingresado * i;
      document.write(`<p class="text-center"> ${numeroingresado} X ${i} = ${resultado}</p>`);
    }
    return resultado
}

  let numeroingresado= prompt("ingrese un numero para ver la tabla de multiplicacion")

  tablamultiplicacion(numeroingresado)

  
  document.write(tablamultiplicacion(numeroingresado))

  