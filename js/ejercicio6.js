/* 
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58
*/

function calcperimetro(pladoA, pladoB)
{
    let perimetro 
    perimetro = 2 * (pladoA + pladoB);
    return perimetro.toFixed(2);
   
}



let ladoA= parseFloat(prompt("Ingresar el lado A del rectangulo"))
let ladoB= parseFloat(prompt("Ingresar el Lado B del rectangulo"))

calcperimetro(ladoA,ladoB);

document.write(`<h2 class="text-center">el perimetro de un rectangulo "${ladoA} X ${ladoB}" es: ${calcperimetro(ladoA,ladoB)}</h2>`);


