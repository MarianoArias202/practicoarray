/* 
4- Escribir el código de una función a la que se pasa como parámetro un
 número entero y devuelve como resultado una cadena de texto que indica 
 si el número es par o impar. Mostrar por pantalla el resultado devuelto 
 por la función.
*/

function numeropar(numeroingresado)
{
    if(parseInt(numeroingresado) % 2 === 0)
    {
        console.log(numeroingresado)
        document.write(`<h2 class="text-center">el ${numeroingresado} si es un numero par</h2>`);
    }
    else
    {
        document.write(`<h2 class="text-center">el ${numeroingresado} no es un numero par</h2>`);
    } 
}

let numeroingresado = parseInt(prompt("Ingrese un numero"))
numeropar(numeroingresado)


