/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista los doce nombres del arreglo.*/

let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

document.write(`<h1 class="ms-5">Lista de meses</h1>`)

document.write(`<ul class="ms-5"> `)

for( let i=0; i<meses.length; i++)
{
document.write(`<li>${meses[i]}</li>`)
}
document.write(`</ul>`)