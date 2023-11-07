/*3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar 
en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/


let inicio = 1;
let fin = 6;
let dado1
let dado2
let sumadedados
let arreglosumadedados

document.write(`
<section class="container">

<table class="table">
<thead class="thead-dark">
  <tr>
    <th scope="col">Suma <i class="fa-solid fa-dice"></i></th>
    <th scope="col">Apariciones</th>
  </tr>
</thead>
<tbody>`)

for (let i = 2; i < 50; i++)
 {
    dado1 = inicio + Math.floor(Math.random() * fin);
    console.log(dado1)
    dado2 = inicio + Math.floor(Math.random() * fin);
    console.log(dado2)
    sumadedados = dado1 + dado2
    arreglosumadedados = [sumadedados]
    document.write(`<tr><td>${i} </td><td> ${sumadedados}</td></tr>`)
  }


 
  
 document.write(`</tbody> </table> </section>`)


