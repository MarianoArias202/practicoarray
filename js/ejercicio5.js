/*  5- Definir una función que muestre información sobre una cadena de texto 
que se le pasa como argumento. A partir de la cadena que se le pasa, 
la función determina si esa cadena está formada sólo por mayúsculas,
 sólo por minúsculas o por una mezcla de ambas. */

function compararmayusculayminusculas (textoingresado)
{
  if (textoingresado === textoingresado.toLowerCase())
  {
    document.write(`<h2>el texto "${textoingresado}" contiene solo minusculas</h2>`);
  }
  else if (textoingresado === textoingresado.toUpperCase())
  {
    document.write(`<h2>el texto "${textoingresado}" contiene solo Mayusculas</h2>`);
  }
  else 
   {
    document.write(`<h2>el texto "${textoingresado}"  contiene Mayusculas y minusculas</h2>`);
  }
}

let frase = prompt("Ingrese una frase");
compararmayusculayminusculas(frase)
